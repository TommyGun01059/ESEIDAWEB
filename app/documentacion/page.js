'use client';

import { useState, useEffect } from 'react';

// Datos de fallback
const fallbackDocumentos = [
    {
        category: 'Normativa Académica',
        items: [
            { name: 'Reglamento de la ESEI', description: 'Normativa general del centro', icon: '📜' },
            { name: 'Normativa de TFG', description: 'Guía para el Trabajo Fin de Grado', icon: '🎓' },
            { name: 'Normativa de Prácticas', description: 'Información sobre prácticas externas', icon: '💼' },
        ]
    },
    {
        category: 'Guías y Manuales',
        items: [
            { name: 'Guía del Estudiante', description: 'Todo lo que necesitas saber', icon: '📖' },
            { name: 'Manual de Movilidad', description: 'Erasmus y otros programas', icon: '✈️' },
            { name: 'Calendario Académico', description: 'Fechas importantes del curso', icon: '📅' },
        ]
    },
    {
        category: 'Plantillas',
        items: [
            { name: 'Plantilla TFG LaTeX', description: 'Formato oficial para el TFG', icon: '📝' },
            { name: 'Plantilla Presentación', description: 'Diseño para presentaciones', icon: '🖥️' },
            { name: 'Modelo de Solicitud', description: 'Para peticiones oficiales', icon: '📋' },
        ]
    },
    {
        category: 'Actas y Reuniones',
        items: [
            { name: 'Actas Junta de Centro', description: 'Actas de las reuniones', icon: '📄' },
            { name: 'Actas Delegación', description: 'Reuniones de la delegación', icon: '📑' },
            { name: 'Memoria Anual', description: 'Resumen de actividades', icon: '📊' },
        ]
    }
];

export default function DocumentacionPage() {
    const [documentos, setDocumentos] = useState(fallbackDocumentos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDocumentos() {
            try {
                const res = await fetch('/api/documentos');
                if (!res.ok) throw new Error('Error fetching');
                const data = await res.json();
                if (data.length > 0) {
                    setDocumentos(data);
                }
            } catch (error) {
                console.warn('Usando datos de fallback para documentos:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDocumentos();
    }, []);

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Documentación</h1>
                    <p>
                        Recursos y documentos útiles para tu vida académica
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {documentos.map((categoria, index) => (
                        <div key={index} style={{ marginBottom: 'var(--spacing-3xl)' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                marginBottom: 'var(--spacing-xl)',
                                paddingBottom: 'var(--spacing-sm)',
                                borderBottom: '2px solid rgba(59, 130, 246, 0.3)'
                            }}>
                                {categoria.category}
                            </h2>

                            <div className="docs-grid">
                                {categoria.items.map((doc, docIndex) => (
                                    <div key={docIndex} className="card doc-card">
                                        <div className="doc-icon">{doc.icon}</div>
                                        <div className="doc-info">
                                            <h4>{doc.name}</h4>
                                            <p>{doc.description}</p>
                                            <a href={doc.file_url || '#'} className="doc-link">
                                                Descargar ↓
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: 'rgba(59, 130, 246, 0.03)' }}>
                <div className="container">
                    <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>¿No encuentras lo que buscas?</h3>
                        <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
                            Si necesitas algún documento específico, contacta con nosotros y te ayudaremos.
                        </p>
                        <a href="mailto:eseida@uvigo.gal" className="btn btn-primary">
                            ✉️ Solicitar documento
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
