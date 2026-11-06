# AGENTS.md — VeKtra Automation

Landing page corporativa para VeKtra Automation, empresa de automatización.
Sitio estático profesional diseñado para presentar la empresa, sus servicios
y captar clientes potenciales.

## Stack y estructura

- HTML, CSS y JavaScript puros: sin frameworks, librerías, npm ni build.
- `index.html` (estructura), `css/` (estilos), `js/` (lógica), `assets/` (imágenes/iconos).
- Debe funcionar abriendo `index.html` con doble clic (`file://`).

## Estructura de carpetas

```
Vektra/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principales
│   ├── responsive.css      # Media queries y diseño adaptable
│   └── animations.css      # Animaciones y transiciones
├── js/
│   ├── main.js             # Lógica principal e inicialización
│   ├── animations.js       # Scroll animations y efectos visuales
│   └── navigation.js       # Menú hamburguesa y navegación
├── assets/
│   ├── images/             # Imágenes del sitio
│   ├── icons/              # Iconos SVG
│   └── fonts/              # Fuentes locales (si aplica)
├── docs/
│   └── constitution.md     # Principios innegociables del proyecto
├── specs/                  # Especificaciones SDD
├── AGENTS.md               # Este archivo
└── MEMORY.md               # Memoria del proyecto entre sesiones
```

## Convenciones

- Textos de la interfaz en español.
- Código (variables, funciones, comentarios técnicos) en inglés.
- Diseño mobile-first, limpio y profesional.
- Nombres de archivo en kebab-case.
- Clases CSS con metodología BEM (Block__Element--Modifier).
- Comentarios solo donde aporten valor real.

## Comandos

- Abrir: doble clic en `index.html` o Live Server.
- No hay build, lint ni tests automatizados por ahora.

## Reglas de dominio

- Los colores corporativos de VeKtra deben definirse como CSS custom properties en `:root`.
- Todas las secciones deben tener un `id` único para navegación interna.
- Las imágenes deben tener `alt` descriptivo para accesibilidad.
- Lazy loading en imágenes que no estén en el viewport inicial.

## Forma de trabajar

- Haz solo lo que se pide: no añadas funcionalidades por tu cuenta.
- Cambios pequeños y enfocados; no reescribas lo que ya funciona.
- Lee `docs/constitution.md` y la spec activa (`specs/NNN-*/`) antes de tocar código.
- Al terminar, resume qué has cambiado y cualquier decisión que deba revisar.

## Memoria

- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- No guardes nunca datos sensibles (claves, tokens, datos personales).

## Límites

- ✅ Siempre: respetar la constitución, mantener los textos en español, actualizar `MEMORY.md` al terminar cada tarea.
- ⚠ Pregunta antes: crear archivos nuevos, añadir secciones, cambiar la paleta de colores.
- 🚫 Nunca: añadir dependencias, frameworks o un paso de build.

## Verificación

- No hay tests automáticos. Probar abriendo `index.html` en el navegador.
- Verificar vista desktop y móvil (375px).
- Comprobar que todos los enlaces internos funcionan.

