'use client';

import { Target, Handshake, Lightbulb, Sparkles, ClipboardList, PartyPopper, LifeBuoy, Megaphone, Users } from 'lucide-react';

export default function QuienesSomosPage() {
    const valores = [
        {
            icon: <Target size={32} />,
            title: 'Representación',
            description: 'Damos voz a todos los estudiantes en los órganos de gobierno.'
        },
        {
            icon: <Handshake size={32} />,
            title: 'Compromiso',
            description: 'Trabajamos cada día por mejorar la experiencia universitaria.'
        },
        {
            icon: <Lightbulb size={32} />,
            title: 'Innovación',
            description: 'Buscamos nuevas formas de conectar con el alumnado.'
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Transparencia',
            description: 'Actuamos con honestidad y rendimos cuentas a los estudiantes.'
        }
    ];

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Quiénes Somos</h1>
                    <p>
                        Conoce a la delegación que trabaja por ti cada día
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>La <span className="gradient-text">Delegación de Alumnos</span> de la ESEI</h2>
                            <p>
                                Somos ESEIDA, la Delegación de Alumnos de la Escuela Superior de Ingeniería
                                Informática (ESEI) de la Universidad de Vigo en el campus de Ourense.
                            </p>
                            <p>
                                Nuestra misión es representar y defender los intereses del alumnado,
                                organizando actividades que enriquezcan la vida universitaria y siendo
                                el puente entre los estudiantes y la institución.
                            </p>
                            <p>
                                Formamos parte de los órganos de gobierno de la facultad, participamos
                                en la toma de decisiones académicas y trabajamos para que tu paso por
                                la ESEI sea lo mejor posible.
                            </p>
                        </div>
                        <div className="about-image">
                            <Users size={80} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'rgba(59, 130, 246, 0.03)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Nuestros Valores</h2>
                        <p>Los principios que guían nuestro trabajo</p>
                    </div>

                    <div className="values-grid">
                        {valores.map((valor, index) => (
                            <div key={index} className="card value-card">
                                <div className="value-icon">{valor.icon}</div>
                                <h4 className="value-title">{valor.title}</h4>
                                <p className="value-description">{valor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>¿Qué hacemos?</h2>
                    </div>

                    <div className="grid-2">
                        <div className="card">
                            <h4 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ClipboardList size={20} /> Representación Estudiantil
                            </h4>
                            <p>
                                Participamos en la Junta de Centro, comisiones académicas y otros órganos
                                de gobierno para llevar tu voz a donde se toman las decisiones.
                            </p>
                        </div>

                        <div className="card">
                            <h4 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <PartyPopper size={20} /> Organización de Eventos
                            </h4>
                            <p>
                                Planificamos actividades culturales, deportivas y sociales que
                                fomentan la convivencia y hacen más amena la vida universitaria.
                            </p>
                        </div>

                        <div className="card">
                            <h4 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <LifeBuoy size={20} /> Atención al Alumnado
                            </h4>
                            <p>
                                Resolvemos dudas, ayudamos con trámites y orientamos a los estudiantes
                                en todo lo relacionado con su vida académica.
                            </p>
                        </div>

                        <div className="card">
                            <h4 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Megaphone size={20} /> Comunicación
                            </h4>
                            <p>
                                Mantenemos informado al alumnado de noticias, cambios y oportunidades
                                relevantes a través de nuestros canales de comunicación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
