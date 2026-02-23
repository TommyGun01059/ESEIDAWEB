import Link from 'next/link';

export const metadata = {
    title: 'Avisos - ESEIDA',
    description: 'Avisos importantes de la Delegación de Alumnos ESEIDA',
};

export default function AvisosPage() {
    const avisos = [
        {
            id: 1,
            title: '⚠️ Cierre temporal de la biblioteca',
            content: 'La biblioteca permanecerá cerrada del 20 al 22 de octubre por obras de mantenimiento.',
            date: '18 Oct 2026',
            priority: 'high',
            icon: '📚'
        },
        {
            id: 2,
            title: '📝 Plazo de matrícula extraordinaria',
            content: 'Recordad que el plazo para la matrícula extraordinaria termina el 25 de octubre.',
            date: '15 Oct 2026',
            priority: 'high',
            icon: '⏰'
        },
        {
            id: 3,
            title: '🔧 Mantenimiento del aula de informática',
            content: 'El aula 2.3 estará fuera de servicio el viernes 17 de octubre.',
            date: '12 Oct 2026',
            priority: 'medium',
            icon: '💻'
        },
        {
            id: 4,
            title: '🚗 Cambio temporal de acceso al parking',
            content: 'Por obras, el acceso al parking será por la entrada lateral durante esta semana.',
            date: '10 Oct 2026',
            priority: 'low',
            icon: '🅿️'
        },
    ];

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'high':
                return { background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' };
            case 'medium':
                return { background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' };
            default:
                return {};
        }
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>📢 Avisos</h1>
                    <p>
                        Comunicaciones importantes que debes conocer
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="news-tabs">
                        <Link href="/noticias" className="news-tab">
                            📰 Noticias
                        </Link>
                        <Link href="/noticias/avisos" className="news-tab active">
                            📢 Avisos
                        </Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        {avisos.map((aviso) => (
                            <article
                                key={aviso.id}
                                className="card"
                                style={getPriorityClass(aviso.priority)}
                            >
                                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start' }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        flexShrink: 0,
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'var(--bg-glass)',
                                        borderRadius: 'var(--radius-md)'
                                    }}>
                                        {aviso.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: 'var(--spacing-sm)',
                                            flexWrap: 'wrap',
                                            gap: 'var(--spacing-sm)'
                                        }}>
                                            <h3 style={{ fontSize: '1.1rem' }}>{aviso.title}</h3>
                                            <span style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-muted)',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {aviso.date}
                                            </span>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)' }}>{aviso.content}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
