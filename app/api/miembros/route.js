import { getSupabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const supabase = getSupabase();
        if (!supabase) {
            return NextResponse.json({ juntaDirectiva: [], delegados: [] });
        }

        const { data, error } = await supabase
            .from('miembros')
            .select('*')
            .order('display_order', { ascending: true });

        if (error) throw error;

        const miembros = {
            juntaDirectiva: data.filter(m => m.grupo === 'junta_directiva'),
            delegados: data.filter(m => m.grupo === 'delegado')
        };

        return NextResponse.json(miembros);
    } catch (error) {
        console.error('Error fetching miembros:', error);
        return NextResponse.json(
            { error: 'Error al cargar los miembros' },
            { status: 500 }
        );
    }
}

