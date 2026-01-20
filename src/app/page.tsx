import Link from 'next/link';
import { getSOPs } from '@/lib/markdown';
import { FileText, ArrowRight, Activity, Shield, Zap } from 'lucide-react';

export default async function Home() {
  const sops = await getSOPs();

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="logo">
          NEVOYA<span>OPS</span>
        </div>

        <div className="nav-section">
          <div className="nav-title">SOP Library</div>
          {sops.map((sop) => (
            <Link key={sop.slug} href={`/sops/${sop.slug}`} className="nav-link">
              {sop.title}
            </Link>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <header style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
            Operations Control Center
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
            Nevoya Dispatch 2.0 Standard Operating Procedures & Resources.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '16px' }}>
            <Zap size={32} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Core Metrics</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Target: $1,000 revenue per truck/day. OTD: 95%+.
            </p>
            <Link href="/sops/core-metrics" className="btn btn-glass">View Dashboard</Link>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '16px' }}>
            <Shield size={32} color="var(--secondary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Safety & Escalation</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Standard protocols for incidents, breakdowns, and delays.
            </p>
            <Link href="/sops/safety-escalation-matrix" className="btn btn-glass">Escalation Matrix</Link>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '16px' }}>
            <Activity size={32} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Training Paths</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Interactive walkthroughs for new driver managers.
            </p>
            <Link href="/sops/driver-manager-training-path" className="btn btn-glass">Start Training</Link>
          </div>
        </div>

        <section style={{ marginTop: '5rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Latest Documents</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sops.length > 0 ? (
              sops.map((sop) => (
                <Link
                  key={sop.slug}
                  href={`/sops/${sop.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'var(--glass-bg)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'white',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FileText color="var(--primary)" />
                    <span style={{ fontWeight: 600 }}>{sop.title}</span>
                  </div>
                  <ArrowRight size={20} color="var(--text-secondary)" />
                </Link>
              ))
            ) : (
              <p style={{ color: 'var(--text-secondary)' }}>No documents found. Add Markdown files to `src/content/sops` to get started.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
