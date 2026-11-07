# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Hero & Prueba Social (#hero)**: Corregido el colapso vertical entre botones CTA y avatares (añadido token CSS `--space-10: 2.5rem;` y `margin-bottom: 3rem;` en desktop). Reemplazados los 4 iconos vectoriales genéricos por 7 avatares fotográficos reales de fundadores/ejecutivos alojados localmente en `assets/images/avatars/`, píldora frosted `+93`, 5 estrellas doradas y espaciado armónico idéntico a PulpSense.
- **Ecosistema & Tecnologías (#social-proof)**: Doble carrusel infinito en direcciones opuestas (Dual Marquee) con logos HD oficiales + etiquetas. Fila superior a 42s hacia la izquierda; Fila inferior a 46s hacia la derecha. Duplicado para ciclo continuo a 60fps sin saltos.
- **Ecosistema & Conectividad (#integrations)**: Carrusel de 2 pistas con tarjetas squircle (72x72px) con los mismos vectores HD oficiales.
- **Sección Especialidades (#services)**: Isotipo oficial n8n en `#EA4B71`, badges sin emojis con iluminación ámbar `#fef08a` al hover y efecto spotlight dinámico.
- **Posicionamiento B2B y B2C**: Textos alineados en FAQ, hero y sección IA SEO.
- **Botones de contacto**: Enlazados a WhatsApp (`https://wa.me/qr/I5IDYKKL3XVNI1`).
- Servidor de previsualización local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Avatares fotográficos reales locales**: Transmiten credibilidad y autoridad inmediata frente a siluetas vectoriales genéricas, almacenados localmente para funcionamiento 100% offline (`file://`).
- **Definición de `--space-10` en `:root`**: Resuelve la causa raíz del solapamiento donde `margin-bottom: var(--space-10)` era tratado como 0 por el navegador.

## Aprendizajes y errores a evitar
- Verificar siempre que cualquier variable CSS usada (`--space-XX`) esté declarada en `:root`.
- Los elementos `<span>` ignoran `margin-bottom`; siempre usar `display: inline-flex` en badges.
- En PowerShell de Windows, evitar comillas dobles complejas con `node -e`; usar scripts en `scratch/`.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
