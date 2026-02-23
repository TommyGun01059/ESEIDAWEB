'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FormulariosPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const formularios = [
        {
            title: 'Sugerencias y Propuestas',
            description: '¿Tienes ideas para mejorar la ESEI? Cuéntanoslas y trabajaremos para llevarlas a cabo.',
            icon: '💡',
            link: '#formulario'
        },
        {
            title: 'Quejas y Reclamaciones',
            description: 'Si algo no funciona como debería, queremos saberlo para poder solucionarlo.',
            icon: '⚠️',
            link: '#formulario'
        },
        {
            title: 'Solicitud de Información',
            description: '¿Necesitas información sobre trámites, normativas o servicios? Pregúntanos.',
            icon: '❓',
            link: '#formulario'
        },
        {
            title: 'Inscripción a Eventos',
            description: 'Apúntate a los eventos y actividades organizados por ESEIDA.',
            icon: '🎟️',
            link: '/eventos'
        },
        {
            title: 'Colaboración',
            description: '¿Quieres colaborar con la delegación o proponer una actividad conjunta?',
            icon: '🤝',
            link: '#formulario'
        },
        {
            title: 'Contacto General',
            description: 'Para cualquier otra consulta que no encaje en las categorías anteriores.',
            icon: '✉️',
            link: '#formulario'
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const res = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Error al enviar el mensaje');
            }

            setSubmitted(true);
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError(err.message);
            setTimeout(() => setError(null), 5000);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Formularios</h1>
                    <p>
                        Ponte en contacto con nosotros o envía tus solicitudes
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>¿Qué necesitas?</h2>
                        <p>Selecciona el tipo de consulta que mejor se adapte a tu necesidad</p>
                    </div>

                    <div className="forms-grid">
                        {formularios.map((form, index) => (
                            <div key={index} className="card form-card">
                                <div className="form-icon">{form.icon}</div>
                                <h3 className="form-title">{form.title}</h3>
                                <p className="form-description">{form.description}</p>
                                <a href={form.link} className="btn btn-outline" style={{ width: '100%' }}>
                                    Acceder
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="formulario" className="section" style={{ background: 'rgba(59, 130, 246, 0.03)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Formulario de Contacto</h2>
                        <p>Rellena el siguiente formulario y te responderemos lo antes posible</p>
                    </div>

                    {submitted && (
                        <div className="card" style={{
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            textAlign: 'center',
                            marginBottom: 'var(--spacing-xl)'
                        }}>
                            <p style={{ color: 'var(--success)', fontWeight: 500 }}>
                                ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="card" style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            textAlign: 'center',
                            marginBottom: 'var(--spacing-xl)'
                        }}>
                            <p style={{ color: '#ef4444', fontWeight: 500 }}>
                                ❌ {error}
                            </p>
                        </div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="grid-2">
                            <div className="form-group">
                                <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="asunto" className="form-label">Asunto *</label>
                            <input
                                type="text"
                                id="asunto"
                                name="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="¿De qué quieres hablarnos?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            ></textarea>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ minWidth: '200px' }}
                                disabled={submitting}
                            >
                                {submitting ? '⏳ Enviando...' : '📨 Enviar mensaje'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
