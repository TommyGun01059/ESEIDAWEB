'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Función para obtener el logo del tema actual
function getInitialLogo() {
    if (typeof window !== 'undefined' && window.__ESEIDA_THEME__) {
        return window.__ESEIDA_THEME__.logo;
    }
    return '/images/logo/Texto negro/Corporativo.png';
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoPath, setLogoPath] = useState('/images/logo/Texto negro/Corporativo.png');
    const pathname = usePathname();

    useEffect(() => {
        // Obtener logo del tema al montar
        if (typeof window !== 'undefined' && window.__ESEIDA_THEME__) {
            setLogoPath(window.__ESEIDA_THEME__.logo);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', href: '/' },
        { name: 'Eventos', href: '/eventos' },
        { name: 'Quiénes Somos', href: '/quienes-somos' },
        { name: 'Organigrama', href: '/organigrama' },
        {
            name: 'Noticias',
            href: '/noticias',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Avisos', href: '/noticias/avisos', icon: '📢' },
                { name: 'Noticias', href: '/noticias', icon: '📰' }
            ]
        },
        { name: 'Documentación', href: '/documentacion' },
        { name: 'Formularios', href: '/formularios' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    {/* Logo - usa script inline para evitar flash */}
                    <Link href="/" className="logo">
                        <img
                            id="eseida-logo"
                            src={logoPath}
                            alt="ESEIDA"
                            className="logo-image"
                            suppressHydrationWarning
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav">
                        {navItems.map((item) => (
                            <div key={item.name} className="nav-item">
                                <Link
                                    href={item.href}
                                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                                >
                                    {item.name}
                                    {item.hasDropdown && <span className="arrow">▼</span>}
                                </Link>

                                {item.hasDropdown && (
                                    <div className="dropdown">
                                        {item.dropdownItems.map((dropItem) => (
                                            <Link
                                                key={dropItem.name}
                                                href={dropItem.href}
                                                className="dropdown-link"
                                            >
                                                <span className="icon">{dropItem.icon}</span>
                                                {dropItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* External Link to ESEI */}
                        <div className="nav-external">
                            <a
                                href="https://esei.uvigo.es/es/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                🎓 ESEI
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    <div key={item.name}>
                        <Link
                            href={item.href}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {item.name}
                        </Link>

                        {item.hasDropdown && (
                            <div className="mobile-dropdown">
                                {item.dropdownItems.map((dropItem) => (
                                    <Link
                                        key={dropItem.name}
                                        href={dropItem.href}
                                        className="mobile-dropdown-link"
                                        onClick={closeMobileMenu}
                                    >
                                        {dropItem.icon} {dropItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <div className="mt-lg">
                    <a
                        href="https://esei.uvigo.es/es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                    >
                        🎓 Ir a ESEI
                    </a>
                </div>
            </nav>
        </>
    );
}
