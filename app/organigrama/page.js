'use client';

import { useState, useEffect } from 'react';

function MemberCard({ member, isExpanded, onToggle }) {
    return (
        <div
            className={`member-card ${isExpanded ? 'expanded' : ''}`}
            onClick={onToggle}
        >
            <div className="member-card-header">
                <span>{member.role}</span>
            </div>
            <div className="member-card-body">
                <div className="member-photo">
                    <img
                        src={member.photo_url || '/images/equipo/placeholder.png'}
                        alt={member.name}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="member-photo-placeholder">👤</span>';
                        }}
                    />
                </div>
                <h3 className="member-name">{member.name}</h3>

                {/* Información de contacto - visible cuando está expandido */}
                <div className={`member-contact ${isExpanded ? 'show' : ''}`}>
                    <a
                        href={`mailto:${member.email}`}
                        className="contact-item"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="contact-icon">✉️</span>
                        <span>{member.email}</span>
                    </a>
                    {member.agenda_url && (
                        <a
                            href={member.agenda_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="contact-icon">📅</span>
                            <span>Agenda Pública</span>
                        </a>
                    )}
                </div>

                <div className="member-expand-hint">
                    {isExpanded ? 'Clic para cerrar' : 'Clic para ver contacto'}
                </div>
            </div>
        </div>
    );
}

// Datos de fallback por si Supabase no está configurado
const fallbackData = {
    juntaDirectiva: [
        { id: 1, name: 'Nombre Presidente/a', role: 'Presidencia', email: 'presidencia@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 2, name: 'Nombre Vicepresidente/a', role: 'Vicepresidencia', email: 'vicepresidencia@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 3, name: 'Nombre Tesorero/a', role: 'Tesorería', email: 'tesoreria@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 4, name: 'Nombre Secretario/a', role: 'Secretaría', email: 'secretaria@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 5, name: 'Nombre Vicesecretario/a', role: 'Vicesecretaría', email: 'vicesecretaria@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 6, name: 'Nombre Vocal', role: 'Vocalía', email: 'vocalia@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null }
    ],
    delegados: [
        { id: 7, name: 'Delegado/a 1º', role: 'Delegado/a 1º Curso', email: 'delegado1@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 8, name: 'Delegado/a 2º', role: 'Delegado/a 2º Curso', email: 'delegado2@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 9, name: 'Delegado/a 3º', role: 'Delegado/a 3º Curso', email: 'delegado3@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 10, name: 'Delegado/a 4º', role: 'Delegado/a 4º Curso', email: 'delegado4@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null },
        { id: 11, name: 'Delegado/a Máster', role: 'Delegado/a Máster', email: 'delegadomaster@eseida.es', photo_url: '/images/equipo/placeholder.png', agenda_url: null }
    ]
};

export default function OrganigramaPage() {
    const [expandedId, setExpandedId] = useState(null);
    const [miembros, setMiembros] = useState(fallbackData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMiembros() {
            try {
                const res = await fetch('/api/miembros');
                if (!res.ok) throw new Error('Error fetching');
                const data = await res.json();
                // Solo actualizar si hay datos reales
                if (data.juntaDirectiva?.length > 0 || data.delegados?.length > 0) {
                    setMiembros(data);
                }
            } catch (error) {
                console.warn('Usando datos de fallback:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMiembros();
    }, []);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Organigrama</h1>
                    <p>
                        Conoce a las personas que forman parte de ESEIDA
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Junta Directiva */}
                    <div className="org-section">
                        <h2 className="org-section-title">Junta Directiva</h2>
                        <div className="members-grid">
                            {miembros.juntaDirectiva.map((member) => (
                                <MemberCard
                                    key={member.id}
                                    member={member}
                                    isExpanded={expandedId === member.id}
                                    onToggle={() => handleToggle(member.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Delegados de Curso */}
                    <div className="org-section">
                        <h2 className="org-section-title">Delegados de Curso</h2>
                        <div className="members-grid">
                            {miembros.delegados.map((member) => (
                                <MemberCard
                                    key={member.id}
                                    member={member}
                                    isExpanded={expandedId === member.id}
                                    onToggle={() => handleToggle(member.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-tertiary)' }}>
                <div className="container">
                    <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>¿Quieres formar parte del equipo?</h3>
                        <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
                            Si te interesa participar en la delegación, contacta con nosotros.
                            ¡Siempre buscamos personas comprometidas!
                        </p>
                        <a href="mailto:eseida@uvigo.gal" className="btn btn-primary">
                            ✉️ Contactar
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
