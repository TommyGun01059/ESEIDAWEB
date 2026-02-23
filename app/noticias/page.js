'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Datos de fallback
const fallbackNoticias = [
    { id: 1, title: 'Convocatoria de elecciones a delegados de curso', excerpt: 'Se abren las candidaturas para elegir a los representantes de cada curso. Presenta tu candidatura hasta el 30 de octubre.', date: '15 Oct 2026', category: 'Noticia', icon: '🗳️' },
    { id: 2, title: 'Nuevos horarios de tutorías', excerpt: 'Se han actualizado los horarios de tutorías del profesorado para el primer cuatrimestre.', date: '10 Oct 2026', category: 'Noticia', icon: '📅' },
    { id: 3, title: 'Resultados de la encuesta sobre instalaciones', excerpt: 'Más de 500 estudiantes participaron en la encuesta. Descubre los resultados y las propuestas de mejora.', date: '5 Oct 2026', category: 'Noticia', icon: '📊' },
    { id: 4, title: 'Acuerdo con la cafetería para descuentos', excerpt: 'Hemos llegado a un acuerdo para que los estudiantes tengan un 10% de descuento presentando el carnet.', date: '1 Oct 2026', category: 'Noticia', icon: '☕' },
];

export default function NoticiasPage() {
    const [noticias, setNoticias] = useState(fallbackNoticias);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNoticias() {
            try {
                const res = await fetch('/api/noticias');
                if (!res.ok) throw new Error('Error fetching');
                const data = await res.json();
                if (data.length > 0) {
                    setNoticias(data);
                }
            } catch (error) {
                console.warn('Usando datos de fallback para noticias:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchNoticias();
    }, []);

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Noticias</h1>
                    <p>
                        Mantente informado de todo lo que ocurre en la ESEI
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="news-tabs">
                        <Link href="/noticias" className="news-tab active">
                            📰 Todas
                        </Link>
                        <Link href="/noticias/avisos" className="news-tab">
                            📢 Avisos
                        </Link>
                    </div>

                    <div className="news-grid">
                        {noticias.map((noticia) => (
                            <article key={noticia.id} className="news-card">
                                <div className="news-image">
                                    {noticia.icon}
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <span className="news-category">{noticia.category}</span>
                                        <span className="news-date">{noticia.date}</span>
                                    </div>
                                    <h3 className="news-title">{noticia.title}</h3>
                                    <p className="news-excerpt">{noticia.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
