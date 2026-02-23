import { getSupabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const supabase = getSupabase();
        if (!supabase) {
            return NextResponse.json(
                { error: 'Servicio no disponible' },
                { status: 503 }
            );
        }

        const body = await request.json();
        const { nombre, email, asunto, mensaje } = body;

        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios' },
                { status: 400 }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'El formato del email no es válido' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('mensajes_contacto')
            .insert([{ nombre, email, asunto, mensaje }])
            .select();

        if (error) throw error;

        return NextResponse.json(
            { message: 'Mensaje enviado correctamente', data },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error saving contacto:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje' },
            { status: 500 }
        );
    }
}

