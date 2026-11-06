# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Sección Especialidades (#services) mejorada**:
  - Armonía y espaciado corregidos: Badges `ESPECIALIDAD PRINCIPAL` convertidos a `inline-flex` con separación vertical holgada (`1.35rem`) respecto a los títulos.
  - Efecto Spotlight Cursor: Luz interactiva radial y borde luminoso dinámico que sigue el cursor en tiempo real (`pointermove`) con acentos temáticos (cyan, violeta, índigo).
  - Sustitución de flujo confuso: Retirado el diagrama de 4 pasos e incorporado el showcase oficial con el isotipo n8n, color `#EA4B71` y badge de estado `Activo 24/7`.
  - Aura de fondo ambiental para hacer destacar la sección con elegancia sobre el fondo oscuro.
- **Posicionamiento B2B y B2C**: Textos actualizados en FAQ, hero y sección IA SEO.
- **Botones de contacto enlazados a WhatsApp**: Todos los CTA apuntan a `https://wa.me/qr/I5IDYKKL3XVNI1`.
- Servidor local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Efecto Spotlight nativo sin librerías**: Implementado mediante CSS Custom Properties (`--mouse-x`, `--mouse-y`) y `-webkit-mask-composite: xor` para trazar el borde exacto sin librerías pesadas.
- **Showcase n8n**: Reemplaza el diagrama paso a paso por un bloque tecnológico que resalta la autoridad técnica de la empresa y la infraestructura n8n en producción.

## Aprendizajes y errores a evitar
- Los elementos `<span>` son `inline` por defecto e ignoran `margin-bottom`; siempre definir `display: inline-flex` en badges y píldoras para garantizar separación vertical.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
