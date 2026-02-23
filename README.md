# ESEIDA Web

Web oficial de la Delegación de Alumnos de la ESEI (Escuela Superior de Ingeniería Informática) - Universidad de Vigo.

## 🚀 Características

- **Eventos**: Información sobre actividades y eventos organizados por la delegación
- **Quiénes Somos**: Conoce la misión y valores de ESEIDA
- **Organigrama**: Estructura y miembros de la delegación
- **Noticias**: Últimas novedades y avisos importantes
- **Documentación**: Recursos y documentos útiles para estudiantes
- **Formularios**: Canal de contacto y solicitudes
- **Enlace a ESEI**: Acceso directo a la web oficial de la escuela

## 📋 Requisitos

- Node.js 18.x o superior
- npm o yarn

## 🛠️ Instalación

1. Clona o descarga el proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
ESEIDAWEB/
├── app/
│   ├── layout.js           # Layout principal
│   ├── page.js             # Página de inicio
│   ├── eventos/
│   │   └── page.js         # Página de eventos
│   ├── quienes-somos/
│   │   └── page.js         # Página "Quiénes somos"
│   ├── organigrama/
│   │   └── page.js         # Página del organigrama
│   ├── noticias/
│   │   ├── page.js         # Página de noticias
│   │   └── avisos/
│   │       └── page.js     # Página de avisos
│   ├── documentacion/
│   │   └── page.js         # Página de documentación
│   └── formularios/
│       └── page.js         # Página de formularios
├── components/
│   ├── Header.js           # Componente del header con navegación
│   └── Footer.js           # Componente del footer
├── styles/
│   ├── globals.css         # Estilos globales y sistema de diseño
│   ├── header.css          # Estilos del header
│   ├── footer.css          # Estilos del footer
│   └── pages.css           # Estilos específicos de páginas
├── package.json
├── next.config.js
└── jsconfig.json
```

## 🎨 Sistema de Diseño

El proyecto incluye un sistema de diseño completo con:

- **Paleta de colores** con tema oscuro y acentos en azul/violeta
- **Tipografía** con Google Fonts (Inter y Outfit)
- **Componentes** reutilizables (cards, buttons, etc.)
- **Animaciones** sutiles para mejorar la UX
- **Diseño responsive** para todos los dispositivos

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la build de producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📝 Personalización

### Modificar la información de contacto
Edita los archivos `components/Footer.js` y las páginas correspondientes.

### Añadir eventos/noticias
Modifica los arrays de datos en los archivos de página correspondientes.

### Actualizar el organigrama
Edita el archivo `app/organigrama/page.js` con los datos reales de los miembros.

## 📄 Licencia

Este proyecto es propiedad de ESEIDA - Delegación de Alumnos ESEI.

---

Desarrollado con ❤️ para la comunidad ESEI
