'use client';

import Link from 'next/link';
import { GraduationCap, Megaphone, PartyPopper, Handshake, Users, Calendar } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <GraduationCap size={18} />
                        <span>Delegación de Alumnos ESEI</span>
                    </div>

                    <h1 className="hero-title">
                        Bienvenidos a <span className="gradient-text">ESEIDA</span>
                    </h1>

                    <p className="hero-subtitle">
                        Somos la voz del alumnado de la Escuela Superior de Ingeniería Informática.
                        Trabajamos para representar, defender y mejorar la experiencia universitaria
                        de todos los estudiantes.
                    </p>

                    <div className="hero-buttons">
                        <Link href="/quienes-somos" className="btn btn-primary">
                            Conócenos
                        </Link>
                        <Link href="/eventos" className="btn btn-secondary">
                            Ver Eventos
                        </Link>
                        <a
                            href="https://esei.uvigo.es/es/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <GraduationCap size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            Ir a ESEI
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">
                                <Users size={20} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                1000+
                            </div>
                            <div className="stat-label">Estudiantes representados</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">
                                <Calendar size={20} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                15+
                            </div>
                            <div className="stat-label">Eventos anuales</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">
                                <Handshake size={20} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                10+
                            </div>
                            <div className="stat-label">Delegados activos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>¿Qué hacemos?</h2>
                        <p>
                            Trabajamos cada día para mejorar tu experiencia en la ESEI
                        </p>
                    </div>

                    <div className="grid-3">
                        <div className="card">
                            <div className="value-icon"><Megaphone size={32} /></div>
                            <h3 className="value-title">Representación</h3>
                            <p className="value-description">
                                Llevamos tu voz a los órganos de gobierno de la facultad y la universidad.
                            </p>
                        </div>

                        <div className="card">
                            <div className="value-icon"><PartyPopper size={32} /></div>
                            <h3 className="value-title">Eventos</h3>
                            <p className="value-description">
                                Organizamos actividades culturales, deportivas y sociales para toda la comunidad.
                            </p>
                        </div>

                        <div className="card">
                            <div className="value-icon"><Handshake size={32} /></div>
                            <h3 className="value-title">Apoyo</h3>
                            <p className="value-description">
                                Te ayudamos con trámites, dudas y cualquier problema que tengas en tu vida universitaria.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>¿Tienes alguna sugerencia?</h2>
                        <p style={{ marginBottom: 'var(--spacing-xl)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
                            Queremos escucharte. Si tienes ideas, quejas o propuestas, no dudes en contactarnos.
                        </p>
                        <div className="flex-center gap-md">
                            <Link href="/formularios" className="btn btn-primary">
                                Contactar
                            </Link>
                            <Link href="/documentacion" className="btn btn-secondary">
                                Ver Documentación
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
