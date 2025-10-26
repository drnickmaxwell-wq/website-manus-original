export default function SiteFooter(){
  return (
    <footer className="mt-16 border-t border-[color:var(--smh-gold-600)]/20">
      <div className="container mx-auto px-4 py-10 smh-text-dim">
        <div className="smh-heading text-lg mb-2 text-[color:var(--smh-text)]">St Mary’s House Dental</div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
