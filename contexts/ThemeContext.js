'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Definición de temas con logos y colores correspondientes
const themes = [
    {
        id: 'corporativo',
        name: 'Corporativo',
        logo: '/images/logo/Texto negro/Corporativo.png',
    },
    {
        id: 'eventos',
        name: 'Eventos',
        logo: '/images/logo/Texto negro/Eventos.png',
    },
    {
        id: 'auxiliar1',
        name: 'Auxiliar 1',
        logo: '/images/logo/Texto negro/Auxiliar 1.png',
    },
    {
        id: 'auxiliar2',
        name: 'Auxiliar 2',
        logo: '/images/logo/Texto negro/Auxiliar 2.png',
    },
    {
        id: 'auxiliar3',
        name: 'Auxiliar 3',
        logo: '/images/logo/Texto negro/Auxiliar 3.png',
    },
    {
        id: 'colaboradores',
        name: 'Colaboradores',
        logo: '/images/logo/Texto negro/Colaboradores.png',
    },
    {
        id: 'guias',
        name: 'Guías',
        logo: '/images/logo/Texto negro/Guías.png',
    },
    {
        id: 'se2',
        name: 'SE2',
        logo: '/images/logo/Texto negro/SE2.png',
    }
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(themes[0]);
    const [logoPath, setLogoPath] = useState(themes[0].logo);

    useEffect(() => {
        // Leer el tema establecido por el script inline en layout.js
        if (typeof window !== 'undefined' && window.__ESEIDA_THEME__) {
            const savedTheme = window.__ESEIDA_THEME__;
            const theme = themes.find(t => t.id === savedTheme.id);
            if (theme) {
                setCurrentTheme(theme);
                setLogoPath(savedTheme.logo);
            }
        }
    }, []);

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            themes,
            logoPath
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        return {
            currentTheme: themes[0],
            themes,
            logoPath: themes[0].logo
        };
    }
    return context;
}

export { themes };
