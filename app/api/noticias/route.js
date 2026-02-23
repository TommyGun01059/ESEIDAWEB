import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('noticias')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching noticias:', error);
        return NextResponse.json(
            { error: 'Error al cargar las noticias' },
            { status: 500 }
        );
    }
}
