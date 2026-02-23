-- ============================================
-- ESEIDA Web - Schema y datos iniciales
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================

-- ============================================
-- 1. CREAR TABLAS
-- ============================================

-- Miembros del organigrama (Junta Directiva + Delegados)
CREATE TABLE IF NOT EXISTS miembros (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    email TEXT,
    photo_url TEXT DEFAULT '/images/equipo/placeholder.png',
    agenda_url TEXT,
    grupo TEXT NOT NULL CHECK (grupo IN ('junta_directiva', 'delegado')),
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Noticias y avisos
CREATE TABLE IF NOT EXISTS noticias (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT,
    date TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Noticia',
    icon TEXT DEFAULT '📰',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Eventos
CREATE TABLE IF NOT EXISTS eventos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date TEXT NOT NULL,
    icon TEXT DEFAULT '📅',
    category TEXT NOT NULL DEFAULT 'General',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documentos organizados por categoría
CREATE TABLE IF NOT EXISTS documentos (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT DEFAULT '📄',
    category TEXT NOT NULL,
    file_url TEXT,
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS mensajes_contacto (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    asunto TEXT NOT NULL,
    mensaje TEXT NOT NULL,
    leido BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 2. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE miembros ENABLE ROW LEVEL SECURITY;
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE documentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE mensajes_contacto ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública (cualquier visitante puede leer)
CREATE POLICY "Lectura pública de miembros" ON miembros
    FOR SELECT USING (true);

CREATE POLICY "Lectura pública de noticias" ON noticias
    FOR SELECT USING (true);

CREATE POLICY "Lectura pública de eventos" ON eventos
    FOR SELECT USING (true);

CREATE POLICY "Lectura pública de documentos" ON documentos
    FOR SELECT USING (true);

-- Los mensajes de contacto: inserción pública, lectura solo autenticados
CREATE POLICY "Inserción pública de mensajes" ON mensajes_contacto
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Lectura de mensajes solo autenticados" ON mensajes_contacto
    FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- 3. DATOS INICIALES (SEED)
-- ============================================

-- Miembros - Junta Directiva
INSERT INTO miembros (name, role, email, photo_url, agenda_url, grupo, display_order) VALUES
    ('Nombre Presidente/a', 'Presidencia', 'presidencia@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 1),
    ('Nombre Vicepresidente/a', 'Vicepresidencia', 'vicepresidencia@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 2),
    ('Nombre Tesorero/a', 'Tesorería', 'tesoreria@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 3),
    ('Nombre Secretario/a', 'Secretaría', 'secretaria@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 4),
    ('Nombre Vicesecretario/a', 'Vicesecretaría', 'vicesecretaria@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 5),
    ('Nombre Vocal', 'Vocalía', 'vocalia@eseida.es', '/images/equipo/placeholder.png', NULL, 'junta_directiva', 6);

-- Miembros - Delegados
INSERT INTO miembros (name, role, email, photo_url, agenda_url, grupo, display_order) VALUES
    ('Delegado/a 1º', 'Delegado/a 1º Curso', 'delegado1@eseida.es', '/images/equipo/placeholder.png', NULL, 'delegado', 1),
    ('Delegado/a 2º', 'Delegado/a 2º Curso', 'delegado2@eseida.es', '/images/equipo/placeholder.png', NULL, 'delegado', 2),
    ('Delegado/a 3º', 'Delegado/a 3º Curso', 'delegado3@eseida.es', '/images/equipo/placeholder.png', NULL, 'delegado', 3),
    ('Delegado/a 4º', 'Delegado/a 4º Curso', 'delegado4@eseida.es', '/images/equipo/placeholder.png', NULL, 'delegado', 4),
    ('Delegado/a Máster', 'Delegado/a Máster', 'delegadomaster@eseida.es', '/images/equipo/placeholder.png', NULL, 'delegado', 5);

-- Noticias
INSERT INTO noticias (title, excerpt, date, category, icon) VALUES
    ('Convocatoria de elecciones a delegados de curso', 'Se abren las candidaturas para elegir a los representantes de cada curso. Presenta tu candidatura hasta el 30 de octubre.', '15 Oct 2026', 'Noticia', '🗳️'),
    ('Nuevos horarios de tutorías', 'Se han actualizado los horarios de tutorías del profesorado para el primer cuatrimestre.', '10 Oct 2026', 'Noticia', '📅'),
    ('Resultados de la encuesta sobre instalaciones', 'Más de 500 estudiantes participaron en la encuesta. Descubre los resultados y las propuestas de mejora.', '5 Oct 2026', 'Noticia', '📊'),
    ('Acuerdo con la cafetería para descuentos', 'Hemos llegado a un acuerdo para que los estudiantes tengan un 10% de descuento presentando el carnet.', '1 Oct 2026', 'Noticia', '☕');

-- Eventos
INSERT INTO eventos (title, description, date, icon, category) VALUES
    ('Bienvenida de Nuevos Alumnos', 'Jornada de acogida para los estudiantes de nuevo ingreso. Conoce la facultad, los servicios y a tus compañeros.', '15 Sep 2026', '🎓', 'Académico'),
    ('Hackathon ESEI 2026', '48 horas de programación intensiva. Forma tu equipo y compite por increíbles premios.', '20 Oct 2026', '💻', 'Tecnología'),
    ('Charla: Inteligencia Artificial', 'Conferencia sobre las últimas tendencias en IA y su aplicación en el mundo laboral.', '5 Nov 2026', '🤖', 'Charla'),
    ('Torneo de Videojuegos', 'Competición de eSports con diferentes juegos. ¡Demuestra tus habilidades gaming!', '15 Nov 2026', '🎮', 'Social'),
    ('Cena de Navidad', 'Celebra el fin del cuatrimestre con todos tus compañeros en nuestra tradicional cena navideña.', '18 Dic 2026', '🎄', 'Social'),
    ('Feria de Empresas', 'Conecta con empresas del sector tecnológico. Oportunidades de prácticas y empleo.', '10 Feb 2027', '🏢', 'Profesional');

-- Documentos
INSERT INTO documentos (name, description, icon, category, display_order) VALUES
    ('Reglamento de la ESEI', 'Normativa general del centro', '📜', 'Normativa Académica', 1),
    ('Normativa de TFG', 'Guía para el Trabajo Fin de Grado', '🎓', 'Normativa Académica', 2),
    ('Normativa de Prácticas', 'Información sobre prácticas externas', '💼', 'Normativa Académica', 3),
    ('Guía del Estudiante', 'Todo lo que necesitas saber', '📖', 'Guías y Manuales', 1),
    ('Manual de Movilidad', 'Erasmus y otros programas', '✈️', 'Guías y Manuales', 2),
    ('Calendario Académico', 'Fechas importantes del curso', '📅', 'Guías y Manuales', 3),
    ('Plantilla TFG LaTeX', 'Formato oficial para el TFG', '📝', 'Plantillas', 1),
    ('Plantilla Presentación', 'Diseño para presentaciones', '🖥️', 'Plantillas', 2),
    ('Modelo de Solicitud', 'Para peticiones oficiales', '📋', 'Plantillas', 3),
    ('Actas Junta de Centro', 'Actas de las reuniones', '📄', 'Actas y Reuniones', 1),
    ('Actas Delegación', 'Reuniones de la delegación', '📑', 'Actas y Reuniones', 2),
    ('Memoria Anual', 'Resumen de actividades', '📊', 'Actas y Reuniones', 3);
