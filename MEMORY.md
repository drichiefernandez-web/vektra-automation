# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Ecosistema & Tecnologías (#social-proof)**: Doble carrusel infinito en direcciones opuestas (Dual Marquee) con logos en alta definición + etiquetas. Fila superior a 42s hacia la izquierda (12 herramientas: JS, Linear, Notion, Airtable, GitHub, Cloudflare, Mailchimp, Zendesk, Netlify, Make, Gmail, Discord); Fila inferior a 46s hacia la derecha (12 herramientas: Slack, Supabase, AWS, Stripe, Salesforce, n8n oficial, HubSpot, TypeScript, OpenAI, PostgreSQL elefante Slonik, Python serpientes oficiales, WhatsApp Business oficial). Duplicado para ciclo continuo a 60fps sin saltos.
- **Ecosistema & Conectividad (#integrations)**: Carrusel infinito de 2 pistas con tarjetas squircle (72x72px) con los mismos vectores HD oficiales. Pausa al hover y degradados laterales.
- **Sección Especialidades (#services)**: Isotipo oficial n8n en `#EA4B71`, badges sin emojis con iluminación ámbar `#fef08a` al hover y efecto spotlight dinámico.
- **Posicionamiento B2B y B2C**: Textos alineados en FAQ, hero y sección IA SEO.
- **Botones de contacto**: Enlazados a WhatsApp (`https://wa.me/qr/I5IDYKKL3XVNI1`).
- Servidor de previsualización local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Vectores HD oficiales (Simple Icons)**: Reemplazados los SVGs genéricos por geometrías vectoriales oficiales exactas (PostgreSQL Slonik, Python snakes, WhatsApp oficial, Make 3-slanted pillars, n8n official nodes mark, etc.) para máxima definición y profesionalismo.
- **Doble carrusel en #social-proof**: Armoniza la sección post-hero con la identidad dark-tech de PulpSense sin saturar gracias a `opacity` cuidada y micro-interacción al hover.

## Aprendizajes y errores a evitar
- Los elementos `<span>` ignoran `margin-bottom`; siempre usar `display: inline-flex` en badges.
- En PowerShell de Windows, evitar comillas dobles complejas con `node -e`; usar scripts en `scratch/`.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
