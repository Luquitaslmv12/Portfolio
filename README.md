# Lucas Viollaz — Portfolio

Portfolio personal de **Lucas Viollaz**, Full Stack Developer (React, Node.js, Firebase).

React 19 · Vite 6 · Tailwind CSS v4 · Framer Motion · Lenis

---

## Puesta en marcha

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # bundle de producción en dist/
npm run preview    # previsualiza el build
npm run lint       # ESLint
```

## Variables de entorno

Copiá `.env.example` a `.env` y completá tus credenciales. Sin `.env` la app
funciona igual: el formulario cae en los IDs de EmailJS por defecto.

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Estructura

```
src/
├── Components/          Secciones de la página
│   └── ui/              Primitivas reutilizables
├── data/profile.js      TODO el contenido editable del sitio
├── hooks/               useMediaQuery, useScrollSpy, useUi
├── lib/gradients.js     Registro central de gradientes
└── index.css            Design system (tokens, componentes, animaciones)
```

### Editar contenido

Todo el texto, proyectos, servicios, estudios y datos de contacto viven en
`src/data/profile.js`. Los componentes son presentacionales: para cambiar copy
o agregar un proyecto no hace falta tocar JSX.

### Design system

Los tokens están en el bloque `@theme` de `src/index.css` y existen tres
capas:

- **Tokens** — `--color-ink-*`, `--color-brand-*`, `--color-grape-*`,
  `--color-mint-*`. Usá estos colores, no los de Tailwind por defecto.
- **Componentes** — `.panel`, `.panel-lit`, `.spotlight`, `.btn`, `.field`,
  `.chip`, `.eyebrow`, `.display-1`, `.shell`, `.anchor`.
- **Utilidades** — `.gradient-text`, `.mask-fade-x`, `.dot-grid`, `.noise`.

Para registrar un gradiente nuevo agregalo a `src/lib/gradients.js`. Las clases
deben escribirse completas porque Tailwind las detecta estáticamente: no
construyas nombres de clase dinámicamente.

## Accesibilidad

- Skip link al contenido y `:focus-visible` con anillo visible en todo el sitio.
- Drawer de navegación móvil con bloqueo de scroll, foco atrapado, `Escape`
  para cerrar y devolución del foco al botón que lo abrió.
- Lightbox de imágenes con `role="dialog"`, `aria-modal`, foco atrapado y
  `Escape`.
- Formulario de contacto con validación por campo, `aria-invalid`,
  `aria-describedby`, región `aria-live` y foco al primer campo con error.
- Todo el sitio respeta `prefers-reduced-motion`.

## Despliegue

`npm run build` genera `dist/`. Es un build estático: sirve en Netlify, Vercel,
Cloudflare Pages, GitHub Pages o cualquier servidor de archivos.

Si publicás en un subdirectorio (por ejemplo `usuario.dev/portfolio/`), ajustá el
`base` en `vite.config.js`.

## Notas

- `og:image` e `og:image:alt` apuntan a `/icon-lv.svg`. La mayoría de las
  plataformas no aceptan SVG para Open Graph: reemplacé esas URLs por un PNG de
  1200×630 cuando tengas uno.
- El favicon usa `/icon-lv.svg`. Las referencias anteriores a
  `favicon-16x16.png`, `apple-touch-icon.png` y `site.webmanifest`Apuntaban a
  archivos inexistentes y se eliminaron.