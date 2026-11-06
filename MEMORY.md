# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Tarea T8 completada**: Acordeón interactivo de Preguntas Frecuentes (`#faq`) con 7 respuestas clave sobre automatizaciones, ROI, seguridad y herramientas, animación fluida en `js/main.js` y accesibilidad ARIA completa.
- **Detalles del Banner Púrpura (`#cta`)**: Vectorización precisa de las líneas arquitectónicas y pistas geométricas translúcidas (SVG integrado `.cta-banner__bg-art` con esquinas redondeadas, divisores y diagonales a 45°) recreando con total fidelidad la tarjeta de referencia.
- Siguiente paso: **T9** (Muro de Testimonios / Social Proof) y optimización final mobile-first (**T10**).
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Acordeón FAQ con panel único activo**: Al abrir una pregunta se repliegan automáticamente las demás con transición basada en `scrollHeight`, evitando saltos visuales bruscos y manteniendo la página limpia.
- **Líneas geométricas SVG en `#cta`**: En lugar de depender de una imagen estática externa pesada (`agent-cta-background.png`), se modelaron directamente en SVG vectorial nativo con trazos `rgba(255, 255, 255, 0.28)`, garantizando nitidez perfecta en cualquier resolución de pantalla y funcionamiento offline (`file://`).
- **Botón CTA blanco puro en píldora**: `Reserva tu llamada estratégica` en blanco sólido `#ffffff` con tipografía oscura y bordes redondeados completos, tal como se muestra en la captura de referencia.

## Aprendizajes y errores a evitar
- Para acordeones accesibles, sincronizar siempre `aria-expanded` y el atributo `hidden` gestionado con temporizador para permitir la animación CSS de repliegue.
- Para trazados vectoriales sobre fondos con gradientes o colores corporativos, usar coordenadas normalizadas en `viewBox` con `preserveAspectRatio="none"` para adaptarse a diferentes relaciones de aspecto.

## Próximos pasos
- Ejecutar Tarea T9: Muro de Testimonios y valoraciones de clientes.
