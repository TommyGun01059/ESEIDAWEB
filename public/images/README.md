# Carpeta de Imágenes - ESEIDA

Esta carpeta contiene las imágenes utilizadas en la web de ESEIDA.

## Estructura recomendada

```
images/
├── logo/           # Logos de ESEIDA
├── eventos/        # Fotos de eventos
├── equipo/         # Fotos del equipo/organigrama
├── noticias/       # Imágenes para noticias
└── general/        # Imágenes generales
```

## Cómo usar las imágenes

En Next.js, las imágenes de la carpeta `public` se acceden desde la raíz:

```jsx
// En componentes React
<img src="/images/logo/logo-eseida.png" alt="ESEIDA" />

// Con el componente Image de Next.js (recomendado)
import Image from 'next/image';
<Image src="/images/logo/logo-eseida.png" alt="ESEIDA" width={200} height={100} />
```

## Formatos recomendados

- **Logo**: SVG o PNG con transparencia
- **Fotos**: JPEG o WebP para mejor compresión
- **Iconos**: SVG

## Tamaños sugeridos

- Logo principal: 200x80px
- Fotos de eventos: 800x500px
- Fotos de equipo: 400x400px (cuadradas)
- Banners: 1200x400px
