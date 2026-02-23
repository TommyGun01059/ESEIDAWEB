import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('eventos')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching eventos:', error);
        return NextResponse.json(
            { error: 'Error al cargar los eventos' },
            { status: 500 }
        );
    }
}
