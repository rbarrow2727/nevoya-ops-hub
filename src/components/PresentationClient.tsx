'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PresentationClient({ html }: { html: string }) {
    const [active, setActive] = useState(false);
    const [slides, setSlides] = useState<string[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Basic slide splitting logic (split by H2)
        const parts = html.split('<h2');
        const processed = parts.map((part, i) => (i === 0 ? part : '<h2' + part));
        setSlides(processed);
    }, [html]);

    if (!active) {
        return (
            <button className="btn btn-primary" onClick={() => setActive(true)}>
                Start Presentation
            </button>
        );
    }

    return (
        <div className="presentation-mode">
            <button
                onClick={() => setActive(false)}
                className="btn-glass"
                style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 1100, padding: '0.5rem' }}
            >
                <X size={24} />
            </button>

            <div className="slide">
                <div className="prose" dangerouslySetInnerHTML={{ __html: slides[currentSlide] }} />
            </div>

            <div style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2rem', alignItems: 'center', zIndex: 1100, background: 'rgba(10, 12, 16, 0.8)', padding: '1rem 2rem', borderRadius: '100px', backdropFilter: 'blur(8px)', border: '1px solid var(--border)' }}>
                <button
                    className="btn btn-glass"
                    disabled={currentSlide === 0}
                    onClick={() => {
                        setCurrentSlide(prev => prev - 1);
                        window.scrollTo(0, 0);
                        document.querySelector('.presentation-mode')?.scrollTo(0, 0);
                    }}
                >
                    <ChevronLeft size={20} /> Previous
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Slide</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{currentSlide + 1} / {slides.length}</span>
                </div>
                <button
                    className="btn btn-glass"
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => {
                        setCurrentSlide(prev => prev + 1);
                        window.scrollTo(0, 0);
                        document.querySelector('.presentation-mode')?.scrollTo(0, 0);
                    }}
                >
                    Next <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
