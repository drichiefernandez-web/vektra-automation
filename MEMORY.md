# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Sección Especialidades (#services)**:
  - Isotipo oficial n8n: Vectorizado con la geometría oficial de 4 nodos ramificados en color corporativo `#EA4B71` tanto en el showcase como en el marquee.
  - Badges sin emojis: Retirados los emoticonos de `Especialidad Principal` y `Soporte & Estrategia`.
  - Resaltado con luz amarilla: Al posicionar el cursor sobre cualquier tarjeta, el letrero `Especialidad Principal` se ilumina con un halo ámbar/dorado (`#fef08a`, `box-shadow` y borde amarillo).
  - Efecto Spotlight interactivo: Haz de luz y borde luminoso que sigue el cursor en tiempo real (`pointermove`).
- **Posicionamiento B2B y B2C**: Textos actualizados en FAQ, hero y sección IA SEO.
- **Botones de contacto enlazados a WhatsApp**: Todos los CTA apuntan a `https://wa.me/qr/I5IDYKKL3XVNI1`.
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Geometría oficial de nodos n8n**: Vectorizada con viewBox `0 48 68 35` idéntica a la imagen de referencia aportada por el cliente.
- **Micro-interacción de luz amarilla en badges**: Brinda contraste cromático inmediato al interactuar con las tarjetas dark-tech sin saturar el diseño en reposo.

## Aprendizajes y errores a evitar
- Los elementos `<span>` son `inline` por defecto e ignoran `margin-bottom`; siempre definir `display: inline-flex` en badges para garantizar separación vertical.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
