# 🥂 St Mary’s House — Champagne Intelligence Ecosystem  
*Full Architectural Overview & Onboarding Manual*  

---

## 1. Vision

Create a unified, AI-powered dental platform that blends **luxury design**, **clinical precision**, and **technical intelligence**.  
Three pillars define the ecosystem:

1. **Website (Vercel)** — Cinematic, elegant, patient-facing experience.  
2. **Patient Portal (Railway)** — Secure, GDPR-compliant digital care hub.  
3. **AI Engine (Railway)** — The practice brain: KPIs, marketing, finance automation.

The Champagne Intelligence System ensures every visual element, every AI process, and every patient touchpoint feels calm, sophisticated, and trustworthy.

---

## 2. Champagne Architecture Diagram

```svg
<svg width="960" height="620" viewBox="0 0 960 620" xmlns="http://www.w3.org/2000/svg">
  <style>
    .node{fill:#fffafc;stroke:var(--smh-accent-gold);stroke-width:1.4;}
    .title{font-family:'Montserrat',sans-serif;font-size:15px;font-weight:600;fill:#b20e6b;}
    .sub{font-family:'Lora',serif;font-size:12px;fill:#333;}
    .arrow{stroke:var(--smh-primary-teal);stroke-width:2;marker-end:url(#arrow);}
  </style>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="var(--smh-primary-teal)"/>
    </marker>
  </defs>
  <!-- Website -->
  <rect class="node" x="40" y="70" width="250" height="130" rx="10"/>
  <text x="165" y="95" text-anchor="middle" class="title">Frontend Website (Vercel)</text>
  <text x="165" y="120" text-anchor="middle" class="sub">Next.js 15 • React 18 • Tailwind v4</text>
  <text x="165" y="140" text-anchor="middle" class="sub">Manus AI Design + Codex Integration</text>

  <!-- Chatbot -->
  <rect class="node" x="360" y="30" width="230" height="110" rx="10"/>
  <text x="475" y="55" text-anchor="middle" class="title">AI Concierge Chatbot</text>
  <text x="475" y="80" text-anchor="middle" class="sub">Voice + Text + Emotion Detection</text>
  <text x="475" y="100" text-anchor="middle" class="sub">Dentally / Tabeo / Twilio Integrations</text>

  <!-- Portal -->
  <rect class="node" x="670" y="180" width="250" height="130" rx="10"/>
  <text x="795" y="205" text-anchor="middle" class="title">Patient Portal (Railway)</text>
  <text x="795" y="230" text-anchor="middle" class="sub">Secure 2FA • File Upload • 3-D Viewer</text>
  <text x="795" y="250" text-anchor="middle" class="sub">AI Treatment Plans + Chat Support</text>

  <!-- Admin Engine -->
  <rect class="node" x="360" y="310" width="230" height="130" rx="10"/>
  <text x="475" y="335" text-anchor="middle" class="title">Admin AI Engine (Railway)</text>
  <text x="475" y="360" text-anchor="middle" class="sub">KPI • Finance • Marketing Automation</text>
  <text x="475" y="380" text-anchor="middle" class="sub">OpenAI + Zapier + Xero + GA4</text>

  <!-- Marketing -->
  <rect class="node" x="40" y="460" width="250" height="110" rx="10"/>
  <text x="165" y="485" text-anchor="middle" class="title">AI Marketing System</text>
  <text x="165" y="510" text-anchor="middle" class="sub">SEO • Blog • Local Pages • Campaigns</text>

  <!-- Links -->
  <line class="arrow" x1="290" y1="135" x2="360" y2="85"/>
  <line class="arrow" x1="590" y1="85" x2="670" y2="210"/>
  <line class="arrow" x1="475" y1="260" x2="475" y2="310"/>
  <line class="arrow" x1="290" y1="135" x2="360" y2="340"/>
  <line class="arrow" x1="475" y1="440" x2="290" y2="490"/>
</svg>
