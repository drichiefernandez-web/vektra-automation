# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Botones de contacto enlazados a WhatsApp**: Todos los llamados a la acción de la web (cabecera, menú móvil, hero, IA SEO, presencia web y banner de cierre `#cta`) apuntan a `https://wa.me/qr/I5IDYKKL3XVNI1` con apertura segura en nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
- **Tarea T8 completada**: Acordeón interactivo de Preguntas Frecuentes (`#faq`) con 7 respuestas clave y accesibilidad ARIA completa.
- **Detalles del Banner Púrpura (`#cta`)**: Vectorización precisa en SVG `.cta-banner__bg-art` con pistas geométricas translúcidas idénticas a la referencia.
- Siguiente paso: **T9** (Muro de Testimonios / Social Proof) y optimización final mobile-first (**T10**).
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Canal de conversión principal (WhatsApp)**: Se centralizó el flujo de captación de leads directamente hacia el WhatsApp corporativo del cliente para acelerar la conversión y la atención inmediata.
- **Acordeón FAQ con panel único activo**: Transición suave por `scrollHeight` cerrando ítems abiertos para evitar desplazamientos bruscos.
- **Líneas geométricas SVG en `#cta`**: SVG vectorial nativo con trazos `rgba(255, 255, 255, 0.28)`, garantizando nitidez total y funcionamiento offline.

## Aprendizajes y errores a evitar
- Todos los enlaces salientes a mensajería externa deben incluir `rel="noopener noreferrer"` para proteger contra vulnerabilidades de `window.opener`.

## Próximos pasos
- Ejecutar Tarea T9: Muro de Testimonios y valoraciones de clientes.
