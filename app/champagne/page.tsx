"use client";
import { useEffect, useState } from "react";

type Row = { path: string; exists: boolean; size: number };
type Report = {
  ok: boolean;
  appRoot: string;
  tokens: { tokensExists: boolean; tokensImported: boolean };
  assets: Row[];
  missing: string[];
};

export default function Page(){
  const [data, setData] = useState<Report | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try{
        const res = await fetch("/api/champagne-audit", { cache: "no-store" });
        if(!res.ok){ throw new Error(String(res.status)); }
        const j = await res.json() as Report;
        setData(j);
      }catch(e:any){
        setErr(String(e));
      }
    })();
  }, []);

  return (
    <main className="min-h-screen p-6 sm:p-10 space-y-8">
      <h1 className="text-2xl sm:text-3xl smh-heading">Champagne Audit</h1>
      {err && <p className="text-red-500">Error: {err}</p>}
      {!data && !err && <p>Loading…</p>}
      {data && (
        <>
          <section className="p-6 rounded-xl smh-glass">
            <h2 className="smh-heading text-xl mb-2">App Root</h2>
            <p>{data.appRoot}</p>
          </section>

          <section className="p-6 rounded-xl smh-glass">
            <h2 className="smh-heading text-xl mb-2">Tokens</h2>
            <ul className="list-disc pl-5">
              <li>tokens file present: {data.tokens.tokensExists ? "✅" : "❌"}</li>
              <li>imported in layout: {data.tokens.tokensImported ? "✅" : "❌"}</li>
            </ul>
          </section>

          <section className="p-6 rounded-xl smh-glass overflow-auto">
            <h2 className="smh-heading text-xl mb-2">Assets</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="py-2">Path</th>
                  <th className="py-2">Exists</th>
                  <th className="py-2">Size</th>
                </tr>
              </thead>
              <tbody>
                {data.assets.map(r => (
                  <tr key={r.path} className="border-b border-white/5">
                    <td className="py-1 font-mono">{r.path}</td>
                    <td className="py-1">{r.exists ? "✅" : "❌"}</td>
                    <td className="py-1">{r.size || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {data.missing.length > 0 && (
            <section className="p-6 rounded-xl smh-glass">
              <h2 className="smh-heading text-xl mb-2">Missing</h2>
              <ul className="list-disc pl-5">
                {data.missing.map(m => <li key={m} className="font-mono">{m}</li>)}
              </ul>
            </section>
          )}
        </>
      )}
    </main>
  );
}
