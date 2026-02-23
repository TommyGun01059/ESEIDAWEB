'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Datos de fallback
const fallbackEventos = [
    { id: 1, title: 'Bienvenida de Nuevos Alumnos', date: '15 Sep 2026', description: 'Jornada de acogida para los estudiantes de nuevo ingreso. Conoce la facultad, los servicios y a tus compañeros.', icon: '🎓', category: 'Académico' },
    { id: 2, title: 'Hackathon ESEI 2026', date: '20 Oct 2026', description: '48 horas de programación intensiva. Forma tu equipo y compite por increíbles premios.', icon: '💻', category: 'Tecnología' },
    { id: 3, title: 'Charla: Inteligencia Artificial', date: '5 Nov 2026', description: 'Conferencia sobre las últimas tendencias en IA y su aplicación en el mundo laboral.', icon: '🤖', category: 'Charla' },
    { id: 4, title: 'Torneo de Videojuegos', date: '15 Nov 2026', description: 'Competición de eSports con diferentes juegos. ¡Demuestra tus habilidades gaming!', icon: '🎮', category: 'Social' },
    { id: 5, title: 'Cena de Navidad', date: '18 Dic 2026', description: 'Celebra el fin del cuatrimestre con todos tus compañeros en nuestra tradicional cena navideña.', icon: '🎄', category: 'Social' },
    { id: 6, title: 'Feria de Empresas', date: '10 Feb 2027', description: 'Conecta con empresas del sector tecnológico. Oportunidades de prácticas y empleo.', icon: '🏢', category: 'Profesional' }
];

export default function EventosPage() {
    const [eventos, setEventos] = useState(fallbackEventos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEventos() {
            try {
                const res = await fetch('/api/eventos');
                if (!res.ok) throw new Error('Error fetching');
                const data = await res.json();
                if (data.length > 0) {
                    setEventos(data);
                }
            } catch (error) {
                console.warn('Usando datos de fallback para eventos:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchEventos();
    }, []);

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Eventos</h1>
                    <p>
                        Descubre todas las actividades que organizamos para ti durante el curso académico.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="events-grid">
                        {eventos.map((evento) => (
                            <article key={evento.id} className="event-card">
                                <div className="event-image">
                                    {evento.icon}
                                </div>
                                <div className="event-content">
                                    <span className="event-date">
                                        📅 {evento.date}
                                    </span>
                                    <h3 className="event-title">{evento.title}</h3>
                                    <p className="event-description">{evento.description}</p>
                                    <Link href={`/eventos/${evento.id}`} className="btn btn-outline mt-md" style={{ display: 'inline-block' }}>
                                        Más información
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
