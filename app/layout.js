import '@/styles/globals.css';
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/pages.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
    title: 'ESEIDA - Delegación de Alumnos ESEI',
    description: 'Delegación de Alumnos de la Escuela Superior de Ingeniería Informática (ESEI) - Universidad de Vigo',
    keywords: 'ESEIDA, ESEI, delegación alumnos, Universidad de Vigo, Ourense, ingeniería informática',
    authors: [{ name: 'ESEIDA' }],
    openGraph: {
        title: 'ESEIDA - Delegación de Alumnos ESEI',
        description: 'Delegación de Alumnos de la Escuela Superior de Ingeniería Informática',
        type: 'website',
    },
};

// Script inline que se ejecuta inmediatamente - aplica colores y prepara el logo
const themeInitScript = `
(function() {
  var themes = [
    { id: 'corporativo', logo: '/images/logo/Texto negro/Corporativo.png', c: ['#fdf2f8','#fce7f3','#fbcfe8','#f9a8d4','#f472b6','#ec4899','#db2777','#be185d','#fb7185','#f43f5e'] },
    { id: 'eventos', logo: '/images/logo/Texto negro/Eventos.png', c: ['#eef2ff','#e0e7ff','#c7d2fe','#a5b4fc','#818cf8','#6366f1','#4f46e5','#4338ca','#a78bfa','#8b5cf6'] },
    { id: 'auxiliar1', logo: '/images/logo/Texto negro/Auxiliar 1.png', c: ['#ecfeff','#cffafe','#a5f3fc','#67e8f9','#22d3ee','#06b6d4','#0891b2','#0e7490','#38bdf8','#0ea5e9'] },
    { id: 'auxiliar2', logo: '/images/logo/Texto negro/Auxiliar 2.png', c: ['#ecfdf5','#d1fae5','#a7f3d0','#6ee7b7','#34d399','#10b981','#059669','#047857','#2dd4bf','#14b8a6'] },
    { id: 'auxiliar3', logo: '/images/logo/Texto negro/Auxiliar 3.png', c: ['#f0fdf4','#dcfce7','#bbf7d0','#86efac','#4ade80','#22c55e','#16a34a','#15803d','#facc15','#eab308'] },
    { id: 'colaboradores', logo: '/images/logo/Texto negro/Colaboradores.png', c: ['#fff7ed','#ffedd5','#fed7aa','#fdba74','#fb923c','#f97316','#ea580c','#c2410c','#fbbf24','#f59e0b'] },
    { id: 'guias', logo: '/images/logo/Texto negro/Guías.png', c: ['#fdf4ff','#fae8ff','#f5d0fe','#f0abfc','#e879f9','#d946ef','#c026d3','#a21caf','#a78bfa','#8b5cf6'] },
    { id: 'se2', logo: '/images/logo/Texto negro/SE2.png', c: ['#fef2f2','#fee2e2','#fecaca','#fca5a5','#f87171','#ef4444','#dc2626','#b91c1c','#fb923c','#f97316'] }
  ];
  var keys = ['--primary-50','--primary-100','--primary-200','--primary-300','--primary-400','--primary-500','--primary-600','--primary-700','--secondary-400','--secondary-500'];
  var t = themes[Math.floor(Math.random() * themes.length)];
  var r = document.documentElement;
  for (var i = 0; i < keys.length; i++) { r.style.setProperty(keys[i], t.c[i]); }
  window.__ESEIDA_THEME__ = t;
  
  // Actualizar logos cuando el DOM esté listo
  function updateLogos() {
    var logo = document.getElementById('eseida-logo');
    var footerLogo = document.getElementById('eseida-footer-logo');
    if (logo) logo.src = t.logo;
    if (footerLogo) footerLogo.src = t.logo;
  }
  
  // Intentar actualizar inmediatamente y también cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateLogos);
  } else {
    updateLogos();
  }
  
  // También observar cambios en el DOM para capturar cuando React renderice
  var observer = new MutationObserver(function(mutations) {
    updateLogos();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  
  // Detener el observer después de 2 segundos
  setTimeout(function() { observer.disconnect(); }, 2000);
})();
`;

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
