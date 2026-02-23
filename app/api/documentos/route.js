import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('documentos')
            .select('*')
            .order('display_order', { ascending: true });

        if (error) throw error;

        // Agrupar documentos por categoría
        const grouped = data.reduce((acc, doc) => {
            const existing = acc.find(g => g.category === doc.category);
            if (existing) {
                existing.items.push(doc);
            } else {
                acc.push({
                    category: doc.category,
                    items: [doc]
                });
            }
            return acc;
        }, []);

        return NextResponse.json(grouped);
    } catch (error) {
        console.error('Error fetching documentos:', error);
        return NextResponse.json(
            { error: 'Error al cargar los documentos' },
            { status: 500 }
        );
    }
}
