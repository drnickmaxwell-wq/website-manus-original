/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUB = (p: string) => path.join(ROOT, "public", p);

function ensureDir(p: string){ fs.mkdirSync(p, { recursive: true }); }

const SIZES = {
  desktop: { w: 1920, h: 1080 },
  mobile:  { w: 1080, h: 1920 }
};

const COLORS = {
  gold: "#D4AF37",
  teal: "#40C4B4",
  magenta: "#C2185B"
};

const OUT = {
  textures: "textures",
  overlays: "overlays",
  gradients: "gradients",
  waves: "waves"
};

[OUT.textures, OUT.overlays, OUT.gradients, OUT.waves].forEach(dir => ensureDir(PUB(dir)));

function rng(seed: number){ let x = seed >>> 0; return ()=>{ x^=x<<13; x^=x>>>17; x^=x<<5; return (x>>>0)/0xffffffff; }; }
const darker = (hex: string, f=0.78) => {
  const n = (v:number)=>Math.max(0,Math.min(255,Math.round(v*f)));
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `#${n(r).toString(16).padStart(2,"0")}${n(g).toString(16).padStart(2,"0")}${n(b).toString(16).padStart(2,"0")}`;
};

async function makeFilmGrain(file:string,w:number,h:number,dark:boolean){
  const R = rng(dark?0xA11CE:0x51A5E);
  const pixels = Buffer.alloc(w*h*3);
  for(let i=0;i<w*h;i++){
    const n = Math.floor((R()*50) + (dark? 90:128));
    pixels[i*3+0]=n; pixels[i*3+1]=n; pixels[i*3+2]=n;
  }
  const base = sharp(pixels,{raw:{width:w,height:h,channels:3}}).webp({quality:90});
  const vignette = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <defs><radialGradient id="v" cx="50%" cy="55%" r="70%">
        <stop offset="0%" stop-color="#000" stop-opacity="${dark?0.18:0.10}"/>
        <stop offset="100%" stop-color="#000" stop-opacity="${dark?0.55:0.35}"/>
      </radialGradient></defs>
      <rect width="100%" height="100%" fill="url(#v)"/>
    </svg>`);
  await sharp({create:{width:w,height:h,channels:4,background: dark?"#0D0E10":"#ffffff"}})
    .composite([{input: await base.toBuffer(), blend:"overlay"},{input:vignette, blend:"multiply"}])
    .webp({quality:92})
    .toFile(file);
}

function particlesSVG(w:number,h:number,color:string,seed:number,dark:boolean){
  const R=rng(seed); const count=Math.floor((w*h)/(dark?36000:42000));
  const parts:string[]=[];
  for(let i=0;i<count;i++){
    const cx=Math.floor(R()*w), cy=Math.floor(R()*h), r=Math.floor(6+R()*26);
    const op = dark? 0.35+R()*0.15 : 0.25+R()*0.2;
    parts.push(`<g opacity="${op}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark?darker(color,0.85):color}"/>
      <circle cx="${cx}" cy="${cy}" r="${Math.max(1, r*0.18)}" fill="#000" opacity="${dark?0.22:0.16}"/>
    </g>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><filter id="b"><feGaussianBlur stdDeviation="0.7"/></filter></defs>
    <g filter="url(#b)">${parts.join("")}</g>
  </svg>`;
}

async function makeParticles(file:string,w:number,h:number,color:string,seed:number,dark:boolean){
  const svg = Buffer.from(particlesSVG(w,h,color,seed,dark));
  await sharp(svg).webp({quality:92}).toFile(file);
}

function glowSVG(w:number,h:number,seed:number,dark:boolean){
  const R=rng(seed); const n=24; const blobs:string[]=[];
  for(let i=0;i<n;i++){
    const cx=Math.floor(R()*w), cy=Math.floor(R()*h);
    const r=Math.floor((w+h)/40*(0.5+R()*1.2));
    const op=dark? 0.25+R()*0.25 : 0.18+R()*0.22;
    blobs.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="white" opacity="${op}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><filter id="s"><feGaussianBlur stdDeviation="${dark?18:14}"/></filter></defs>
    <g filter="url(#s)">${blobs.join("")}</g>
  </svg>`;
}
async function makeGlow(file:string,w:number,h:number,dark:boolean){
  await sharp(Buffer.from(glowSVG(w,h,0xB10B10,dark))).webp({quality:92}).toFile(file);
}

async function makeGradient(file:string,w:number,h:number,dark:boolean){
  const g1 = dark? "#EE66D1":"#D94BC6";
  const g2 = dark? "#00D6DB":"#00C2C7";
  const svg = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${g1}"/><stop offset="100%" stop-color="${g2}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`);
  await sharp(svg).webp({quality:95}).toFile(file);
}

function waveMask(colored=false){
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="540" viewBox="0 0 1920 540" preserveAspectRatio="none">
  <defs>
    ${colored? `<linearGradient id="fill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D94BC6"/><stop offset="60%" stop-color="#40C4B4"/><stop offset="100%" stop-color="#D4AF37"/>
    </linearGradient>` : ``}
  </defs>
  <path d="M0,120 C420,40 720,220 960,160 C1200,100 1480,20 1920,140 L1920,540 L0,540 Z" fill="${colored? "url(#fill)":"#ffffff"}"/>
</svg>`;
}

async function run(){
  // film grain
  await makeFilmGrain(PUB(`${OUT.textures}/film-grain-desktop.webp`), SIZES.desktop.w, SIZES.desktop.h, false);
  await makeFilmGrain(PUB(`${OUT.textures}/film-grain-mobile.webp`),  SIZES.mobile.w,  SIZES.mobile.h,  false);
  await makeFilmGrain(PUB(`${OUT.textures}/film-grain-dark.webp`),    SIZES.desktop.w, SIZES.desktop.h, true);
  await makeFilmGrain(PUB(`${OUT.textures}/film-grain-mobile-dark.webp`), SIZES.mobile.w, SIZES.mobile.h, true);

  // particles
  const entries:[keyof typeof COLORS,string][] = [["gold",COLORS.gold],["teal",COLORS.teal],["magenta",COLORS.magenta]];
  for(const [name, hex] of entries){
    await makeParticles(PUB(`${OUT.textures}/particles-${name}.webp`), SIZES.desktop.w, SIZES.desktop.h, hex, 0x1000+name.length, false);
    await makeParticles(PUB(`${OUT.textures}/particles-${name}-mobile.webp`), SIZES.mobile.w, SIZES.mobile.h, hex, 0x1100+name.length, false);
    await makeParticles(PUB(`${OUT.textures}/particles-${name}-dark.webp`), SIZES.desktop.w, SIZES.desktop.h, darker(hex), 0x1200+name.length, true);
    await makeParticles(PUB(`${OUT.textures}/particles-${name}-mobile-dark.webp`), SIZES.mobile.w, SIZES.mobile.h, darker(hex), 0x1300+name.length, true);
  }

  // glow dust
  await makeGlow(PUB(`${OUT.overlays}/glow-dust.webp`), SIZES.desktop.w, SIZES.desktop.h, false);
  await makeGlow(PUB(`${OUT.overlays}/glow-dust-mobile.webp`), SIZES.mobile.w, SIZES.mobile.h, false);
  await makeGlow(PUB(`${OUT.overlays}/glow-dust-dark.webp`), SIZES.desktop.w, SIZES.desktop.h, true);
  await makeGlow(PUB(`${OUT.overlays}/glow-dust-mobile-dark.webp`), SIZES.mobile.w, SIZES.mobile.h, true);

  // gradient fallbacks
  await makeGradient(PUB(`${OUT.gradients}/hero-gradient-fallback.webp`), SIZES.desktop.w, SIZES.desktop.h, false);
  await makeGradient(PUB(`${OUT.gradients}/hero-gradient-fallback-dark.webp`), SIZES.desktop.w, SIZES.desktop.h, true);

  // waves (mask for CSS masking, fill for decorative sections)
  fs.writeFileSync(PUB(`${OUT.waves}/smh-wave-mask.svg`), waveMask(false), "utf8");
  fs.writeFileSync(PUB(`${OUT.waves}/smh-wave-fill.svg`), waveMask(true), "utf8");

  console.log("✅ Champagne assets generated into /public.");
}

run().catch(err => { console.error(err); process.exit(0); });
