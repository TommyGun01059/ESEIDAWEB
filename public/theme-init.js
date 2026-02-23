// Script de inicialización de tema - se ejecuta antes de React
// Este script se inyecta inline en el HTML para evitar el flash de colores

const themes = [
    {
        id: 'corporativo',
        logo: '/images/logo/Texto negro/Corporativo.png',
        colors: {
            '--primary-50': '#fdf2f8',
            '--primary-100': '#fce7f3',
            '--primary-200': '#fbcfe8',
            '--primary-300': '#f9a8d4',
            '--primary-400': '#f472b6',
            '--primary-500': '#ec4899',
            '--primary-600': '#db2777',
            '--primary-700': '#be185d',
            '--secondary-400': '#fb7185',
            '--secondary-500': '#f43f5e',
            '--bg-secondary': '#fefafc',
            '--bg-tertiary': '#fdf2f8',
        }
    },
    {
        id: 'eventos',
        logo: '/images/logo/Texto negro/Eventos.png',
        colors: {
            '--primary-50': '#eef2ff',
            '--primary-100': '#e0e7ff',
            '--primary-200': '#c7d2fe',
            '--primary-300': '#a5b4fc',
            '--primary-400': '#818cf8',
            '--primary-500': '#6366f1',
            '--primary-600': '#4f46e5',
            '--primary-700': '#4338ca',
            '--secondary-400': '#a78bfa',
            '--secondary-500': '#8b5cf6',
            '--bg-secondary': '#f8f9ff',
            '--bg-tertiary': '#eef2ff',
        }
    },
    {
        id: 'auxiliar1',
        logo: '/images/logo/Texto negro/Auxiliar 1.png',
        colors: {
            '--primary-50': '#ecfeff',
            '--primary-100': '#cffafe',
            '--primary-200': '#a5f3fc',
            '--primary-300': '#67e8f9',
            '--primary-400': '#22d3ee',
            '--primary-500': '#06b6d4',
            '--primary-600': '#0891b2',
            '--primary-700': '#0e7490',
            '--secondary-400': '#38bdf8',
            '--secondary-500': '#0ea5e9',
            '--bg-secondary': '#f8feff',
            '--bg-tertiary': '#ecfeff',
        }
    },
    {
        id: 'auxiliar2',
        logo: '/images/logo/Texto negro/Auxiliar 2.png',
        colors: {
            '--primary-50': '#ecfdf5',
            '--primary-100': '#d1fae5',
            '--primary-200': '#a7f3d0',
            '--primary-300': '#6ee7b7',
            '--primary-400': '#34d399',
            '--primary-500': '#10b981',
            '--primary-600': '#059669',
            '--primary-700': '#047857',
            '--secondary-400': '#2dd4bf',
            '--secondary-500': '#14b8a6',
            '--bg-secondary': '#f8fefc',
            '--bg-tertiary': '#ecfdf5',
        }
    },
    {
        id: 'auxiliar3',
        logo: '/images/logo/Texto negro/Auxiliar 3.png',
        colors: {
            '--primary-50': '#f0fdf4',
            '--primary-100': '#dcfce7',
            '--primary-200': '#bbf7d0',
            '--primary-300': '#86efac',
            '--primary-400': '#4ade80',
            '--primary-500': '#22c55e',
            '--primary-600': '#16a34a',
            '--primary-700': '#15803d',
            '--secondary-400': '#facc15',
            '--secondary-500': '#eab308',
            '--bg-secondary': '#f9fef9',
            '--bg-tertiary': '#f0fdf4',
        }
    },
    {
        id: 'colaboradores',
        logo: '/images/logo/Texto negro/Colaboradores.png',
        colors: {
            '--primary-50': '#fff7ed',
            '--primary-100': '#ffedd5',
            '--primary-200': '#fed7aa',
            '--primary-300': '#fdba74',
            '--primary-400': '#fb923c',
            '--primary-500': '#f97316',
            '--primary-600': '#ea580c',
            '--primary-700': '#c2410c',
            '--secondary-400': '#fbbf24',
            '--secondary-500': '#f59e0b',
            '--bg-secondary': '#fffbf7',
            '--bg-tertiary': '#fff7ed',
        }
    },
    {
        id: 'guias',
        logo: '/images/logo/Texto negro/Guías.png',
        colors: {
            '--primary-50': '#fdf4ff',
            '--primary-100': '#fae8ff',
            '--primary-200': '#f5d0fe',
            '--primary-300': '#f0abfc',
            '--primary-400': '#e879f9',
            '--primary-500': '#d946ef',
            '--primary-600': '#c026d3',
            '--primary-700': '#a21caf',
            '--secondary-400': '#a78bfa',
            '--secondary-500': '#8b5cf6',
            '--bg-secondary': '#fefaff',
            '--bg-tertiary': '#fdf4ff',
        }
    },
    {
        id: 'se2',
        logo: '/images/logo/Texto negro/SE2.png',
        colors: {
            '--primary-50': '#fef2f2',
            '--primary-100': '#fee2e2',
            '--primary-200': '#fecaca',
            '--primary-300': '#fca5a5',
            '--primary-400': '#f87171',
            '--primary-500': '#ef4444',
            '--primary-600': '#dc2626',
            '--primary-700': '#b91c1c',
            '--secondary-400': '#fb923c',
            '--secondary-500': '#f97316',
            '--bg-secondary': '#fffafa',
            '--bg-tertiary': '#fef2f2',
        }
    }
];

// Seleccionar tema aleatorio
const randomIndex = Math.floor(Math.random() * themes.length);
const selectedTheme = themes[randomIndex];

// Aplicar colores inmediatamente
const root = document.documentElement;
Object.entries(selectedTheme.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
});

// Guardar en sessionStorage para que React lo recoja
sessionStorage.setItem('eseida-theme-id', selectedTheme.id);
sessionStorage.setItem('eseida-theme-logo', selectedTheme.logo);
