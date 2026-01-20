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
                style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
                <X size={32} />
            </button>

            <div className="slide">
                <div className="prose" dangerouslySetInnerHTML={{ __html: slides[currentSlide] }} />
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <button
                    className="btn btn-glass"
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide(prev => prev - 1)}
                >
                    <ChevronLeft /> Previous
                </button>
                <span style={{ color: 'var(--text-secondary)' }}>{currentSlide + 1} / {slides.length}</span>
                <button
                    className="btn btn-glass"
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => setCurrentSlide(prev => prev + 1)}
                >
                    Next <ChevronRight />
                </button>
            </div>
        </div>
    );
}
