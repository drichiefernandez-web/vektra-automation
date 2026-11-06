# Plan Técnico — Spec 001: Landing Page Corporativa VeKtra Automation

## 1. Arquitectura de Archivos y Responsabilidades

```
Vektra/
├── index.html              # Estructura semántica completa (13 secciones)
├── css/
│   ├── styles.css          # Variables (:root), reset, layout, componentes (BEM)
│   ├── animations.css      # Animación Marquee continua, hover glow, keyframes
│   └── responsive.css      # Media queries mobile-first (375px, 768px, 1024px, 1280px)
├── js/
│   ├── navigation.js       # Menú móvil hamburguesa y scroll suave
│   ├── animations.js       # Revelación de secciones con IntersectionObserver
│   └── main.js             # Lógica interactiva de Acordeón FAQ y año dinámico
└── assets/
    └── icons/              # SVGs vectoriales integrados
```

## 2. Tokens de Diseño y Estética Dark Tech (Magic UI / PulpSense)

Definidos en `:root` dentro de `css/styles.css`:
- **Fondos:**
  - `--bg-primary: #090d16;` (Negro azulado profundo de fondo)
  - `--bg-secondary: #0f172a;` (Azul pizarra oscuro para contrastes)
  - `--bg-card: rgba(15, 23, 42, 0.75);` (Superficie cristal traslúcida)
  - `--bg-card-hover: rgba(30, 41, 59, 0.85);`
- **Acentos & Glow:**
  - `--accent-cyan: #38bdf8;` (Cian tecnológico)
  - `--accent-indigo: #6366f1;` (Índigo para gradientes)
  - `--glow-radial: radial-gradient(125% 125% at 50% 10%, #090d16 40%, #0284c7 100%);`
- **Bordes y Sombras:**
  - `--border-subtle: rgba(255, 255, 255, 0.08);`
  - `--border-active: rgba(56, 189, 248, 0.35);`
  - `--shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);`
- **Tipografía:**
  - `--font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
  - `--text-main: #f8fafc;` (Blanco suave para máxima legibilidad)
  - `--text-muted: #94a3b8;` (Gris slate para subtítulos y metadatos)

## 3. Asignación de Requisitos Funcionales por Módulo

| Módulo / Sección | Requisitos Cubiertos | Descripción Técnica |
| :--- | :--- | :--- |
| **Header / Nav** | RF-1, RF-2, RF-3, RF-4, RF-4b | Barra sticky flotante con `backdrop-filter: blur(12px)`. Botón CTA, botón selector de tema día/noche con persistencia `localStorage`, y menú hamburguesa en móvil. |
| **Hero Section** | RF-5, RF-6, RF-7 | Gradiente radial de fondo, píldora con badge animado, H1 con degradado de texto, botones duales y avatares de prueba social. |
| **Social Proof / Tech Marquee** | RF-8, RF-9 | Carrusel continuo con `@keyframes marquee` CSS puro (40s), duplicación de lista para bucle sin saltos y pausa en hover. |
| **Bento Grid de Servicios** | RF-10, RF-11 | Mosaico asimétrico CSS Grid: tarjetas grandes para Automatización de Procesos y Desarrollo Web, tarjeta complementaria para Consultoría. Efecto glow perimetral al pasar cursor. |
| **Presencia Web & Arquitectura** | RF-12 | Bloque visual destacando velocidad de carga, diseño moderno y optimización técnica para Google y motores IA. |
| **Casos de Éxito / Métricas** | RF-13 | Tarjetas estadísticas destacadas (67% reducción manual, +400h/semana, etc.). |
| **Proceso en 4 Pasos** | RF-14 | Flujo cronológico numerado (Estrategia, Plan, Construcción, Escala) con conectores visuales. |
| **Integraciones** | RF-8 | Cuadrícula con tecnologías clave (n8n, Make, OpenAI, Claude, Supabase, Airtable, etc.). |
| **Acordeón FAQ** | RF-15, RF-16, RF-17 | Componente colapsable interactivo en JS puro con transiciones fluidas de altura (`max-height` / `grid-template-rows`) y rotación de chevrons. |
| **Testimonios** | RF-5, RF-13 | Muro de opiniones de clientes con fotos, nombres, roles y valoraciones de 5 estrellas. |
| **CTA Final & Reserva** | RF-18 | Tarjeta pre-footer destacada con iluminación periférica y botón de contacto/reserva directa. |
| **Footer** | RF-19 | Navegación secundaria, redes sociales, aviso legal y copyright dinámico. |

## 4. Decisiones Técnicas Justificadas

1. **Carrusel Marquee en CSS Puro vs. Librería JS:**
   - *Decisión:* Usar CSS `@keyframes marquee` con dos contenedores duplicados al 100% de ancho.
   - *Alternativa descartada:* Librerías como Swiper o Slick (pesadas, añaden dependencias y complican el modo `file://`).
2. **Acordeón FAQ en Vanilla JS vs. Componente Radix/React:**
   - *Decisión:* Controlar atributos `aria-expanded` y clases CSS con JavaScript nativo.
   - *Alternativa descartada:* Frameworks de componentes (inviables bajo la Constitución sin build).
3. **SVGs inline vs. Icon Fonts:**
   - *Decisión:* Iconos vectoriales SVG incrustados directamente.
   - *Alternativa descartada:* FontAwesome o paquetes externos (eliminan solicitudes HTTP y renderizan al instante en `file://`).

## 5. Estrategia de Verificación
- Verificación visual directa en navegador con doble clic sobre `index.html`.
- Comprobación en viewport móvil de 375px (iPhone SE / estándar móvil) y escritorio (1200px+).
- Validación de navegación interna (todos los enlaces ancla dirigen a sus respectivas secciones).
- Inspección de consola de desarrollador para garantizar cero advertencias o errores JS.

