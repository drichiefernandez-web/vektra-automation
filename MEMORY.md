# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- Fase: Sección **IA SEO (Google & ChatGPT)** añadida con fidelidad milimétrica de la página de referencia.
- Incluye mockup interactivo (`.visibility-scene`) con mapa radar SVG (patrón de manzanas, vías curvas y pulsos concéntricos), tarjeta flotante de búsqueda local con estrellas y check, pin central palpitante, tarjeta de descubrimiento por IA con chips de fuentes y barra inferior de pestañas (*Maps*, *Búsqueda*, *IA*).
- 4 pilares estratégicos de visibilidad incorporados en la base de la sección.
- Enlace "IA SEO" añadido a la barra de navegación flotante y al cajón móvil con ScrollSpy sincronizado.
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Sección IA SEO (`#ai-seo`)**: Añadida entre `#social-proof` y `#services`, calcando la secuencia original de PulpSense.
- **Gráfico de Radar SVG nativo**: Recreado con código SVG ligero y variables CSS (`--color-secondary`), garantizando máxima nitidez vectorial sin imágenes externas pesadas.
- **Botón de Alto Contraste (`.btn--white`)**: Botón blanco con texto oscuro y flecha diagonal (`↗`) para resaltar el llamado a la acción específico de SEO con IA.

## Aprendizajes y errores a evitar
- Los contenedores flotantes con animaciones sutiles (`@keyframes floatSubtle`) aportan vida a las tarjetas sin afectar el rendimiento de repintado.
- En resoluciones móviles (< 480px), reducir el padding interno y limitar el ancho máximo de las tarjetas flotantes para evitar desbordes horizontales.

## Próximos pasos
- Continuar con Tarea T8: Acordeón interactivo de Preguntas Frecuentes (FAQ).
