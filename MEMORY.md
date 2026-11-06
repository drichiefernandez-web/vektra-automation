# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Ecosistema & Integraciones (#integrations)**: Carrusel infinito de 2 pistas con tarjetas squircle (72x72px) estilo PulpSense. Pista superior hacia la izquierda y pista inferior hacia la derecha (24 herramientas: n8n oficial, Make, Supabase, OpenAI, Stripe, Salesforce, Slack, WhatsApp Business, etc.). Pausa al hover y degradados laterales de desvanecimiento continuo.
- **Sección Especialidades (#services)**:
  - Isotipo oficial n8n: Vectorizado con la geometría oficial de 4 nodos ramificados en `#EA4B71`.
  - Badges sin emojis con luz ámbar/dorada (`#fef08a`) al hacer hover en la tarjeta.
  - Efecto Spotlight interactivo: Haz de luz que sigue el cursor en tiempo real.
- **Posicionamiento B2B y B2C**: Textos actualizados en FAQ, hero y sección IA SEO.
- **Botones de contacto enlazados a WhatsApp**: Todos los CTA apuntan a `https://wa.me/qr/I5IDYKKL3XVNI1`.
- Servidor de previsualización local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Doble carrusel en direcciones opuestas**: Replica fielmente la experiencia visual de PulpSense aportando dinamismo sin distraer ni ralentizar la navegación (animaciones CSS GPU puras).
- **Tarjetas squircle con inline SVG**: Totalmente offline y sin dependencias externas (compatible con doble clic directo `file://`).
- **Pausa interactiva al hover**: Permite al usuario examinar detenidamente cada integración sin perder el hilo del flujo.

## Aprendizajes y errores a evitar
- Los elementos `<span>` ignoran `margin-bottom`; siempre definir `display: inline-flex` en badges.
- En PowerShell de Windows, evitar ejecutar `node -e` con comillas dobles complejas; usar scripts temporales en `scratch/`.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
