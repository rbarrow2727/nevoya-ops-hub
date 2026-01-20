import { ChevronLeft, Maximize2, Share2, Printer } from 'lucide-react';
import PresentationClient from '@/components/PresentationClient';
import { getSOPBySlug, getSOPs } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function SOPPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const sop = await getSOPBySlug(slug);
    const allSops = await getSOPs();

    if (!sop) {
        notFound();
    }

    return (
        <div className="layout-container">
            <aside className="sidebar">
                <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
                    NEVOYA<span>OPS</span>
                </Link>

                <div className="nav-section">
                    <Link href="/" className="nav-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ChevronLeft size={16} /> Back to Dashboard
                    </Link>
                    <div className="nav-title">SOP Library</div>
                    {allSops.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/sops/${s.slug}`}
                            className={`nav-link ${s.slug === slug ? 'active' : ''}`}
                        >
                            {s.title}
                        </Link>
                    ))}
                </div>
            </aside>

            <main className="main-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        Operations &gt; SOPs &gt; <span style={{ color: 'var(--primary)' }}>{sop.title}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-glass" title="Presentation Mode"><Maximize2 size={18} /></button>
                        <button className="btn btn-glass" title="Share"><Share2 size={18} /></button>
                        <button className="btn btn-glass" title="Print"><Printer size={18} /></button>
                    </div>
                </div>

                <article className="prose">
                    <div dangerouslySetInnerHTML={{ __html: sop.contentHtml }} />
                </article>

                <div className="floating-nav">
                    <PresentationClient html={sop.contentHtml} />
                </div>
            </main>
        </div>
    );
}

export async function generateStaticParams() {
    const sops = await getSOPs();
    return sops.map((sop) => ({
        slug: sop.slug,
    }));
}
