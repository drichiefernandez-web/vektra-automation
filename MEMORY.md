# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Posicionamiento B2B y B2C**: Textos actualizados en la pregunta 2 de FAQ, hero y sección IA SEO para comunicar cobertura integral tanto a empresas B2B como B2C (ecommerce, retail, agencias, servicios y SaaS).
- **Botones de contacto enlazados a WhatsApp**: Todos los CTA apuntan a `https://wa.me/qr/I5IDYKKL3XVNI1` con apertura segura en nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
- **Acordeón FAQ (#faq)**: 7 respuestas estratégicas con animación fluida `scrollHeight` y accesibilidad ARIA completa.
- **Detalles del Banner Púrpura (#cta)**: Vectorización SVG `.cta-banner__bg-art` con pistas geométricas idénticas a la referencia.
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Segmentación B2B y B2C explícita**: Ampliar la propuesta de valor para abarcar tanto operaciones B2B como comercio masivo y retail B2C donde la automatización genera alto retorno.
- **Canal de conversión principal (WhatsApp)**: Centraliza la captación en el WhatsApp corporativo del cliente para acelerar la conversión inmediata.
- **Acordeón FAQ con panel único activo**: Transición suave cerrando ítems abiertos para evitar desplazamientos bruscos.

## Aprendizajes y errores a evitar
- Todos los enlaces salientes a mensajería externa deben incluir `rel="noopener noreferrer"` para proteger contra vulnerabilidades de `window.opener`.

## Próximos pasos
- Ejecutar Tarea T9: Muro de Testimonios y valoraciones de clientes.
