'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Mail, MapPin, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [logoPath, setLogoPath] = useState('/images/logo/Texto negro/Corporativo.png');

    useEffect(() => {
        // Obtener logo del tema al montar
        if (typeof window !== 'undefined' && window.__ESEIDA_THEME__) {
            setLogoPath(window.__ESEIDA_THEME__.logo);
        }
    }, []);

    const quickLinks = [
        { name: 'Eventos', href: '/eventos' },
        { name: 'Quiénes Somos', href: '/quienes-somos' },
        { name: 'Organigrama', href: '/organigrama' },
        { name: 'Noticias', href: '/noticias' },
    ];

    const resourceLinks = [
        { name: 'Documentación', href: '/documentacion' },
        { name: 'Formularios', href: '/formularios' },
        { name: 'Avisos', href: '/noticias/avisos' },
        { name: 'ESEI', href: 'https://esei.uvigo.es/es/', external: true },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <img
                                id="eseida-footer-logo"
                                src={logoPath}
                                alt="ESEIDA"
                                className="footer-logo-image"
                                suppressHydrationWarning
                            />
                        </Link>
                        <p className="footer-description">
                            Delegación de Alumnos de la Escuela Superior de Ingeniería Informática (ESEI).
                            Representamos y defendemos los intereses del alumnado.
                        </p>
                        <div className="footer-social">
                            <a
                                href="https://twitter.com/eseida"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://instagram.com/eseida"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="mailto:eseida@uvigo.gal"
                                className="social-link"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Enlaces Rápidos</h4>
                        <div className="footer-links">
                            {quickLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="footer-link">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="footer-column">
                        <h4>Recursos</h4>
                        <div className="footer-links">
                            {resourceLinks.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                    >
                                        {link.name} ↗
                                    </a>
                                ) : (
                                    <Link key={link.name} href={link.href} className="footer-link">
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4>Contacto</h4>
                        <div className="footer-contact-item">
                            <span className="icon"><MapPin size={16} /></span>
                            <span>ESEI, Campus de Ourense<br />Universidad de Vigo</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon"><Mail size={16} /></span>
                            <span>eseida@uvigo.gal</span>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} ESEIDA - Delegación de Alumnos ESEI. Todos los derechos reservados.
                    </p>
                    <div className="footer-bottom-links">
                        <Link href="/privacidad" className="footer-bottom-link">
                            Privacidad
                        </Link>
                        <Link href="/cookies" className="footer-bottom-link">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
