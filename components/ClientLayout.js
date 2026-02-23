'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function ClientLayout({ children }) {
    return (
        <ThemeProvider>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );
}
