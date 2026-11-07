# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Armonización de Espaciados & Distribución**: Corregida la falta de padding en `#services` causada por tokens no definidos (`--space-5`, `--space-20` y `--border-active` ahora presentes en `:root`). La cabecera "Nuestras Especialidades" cuenta con 20px de separación armónica con el badge y 56px/80px respecto a la sección anterior.
- **Normalización de Voids entre Secciones**: Reducido el vacío de casi 200px entre `#web-presence` y `#case-studies` a un ritmo vertical uniforme (52px en móvil, 72px en escritorio).
- **Optimización Móvil (375px / 360px)**: Cero desbordamiento horizontal (`scrollWidth === clientWidth`). Header flotante optimizado, tipografía fluida con `clamp()`, botones táctiles de 46-48px de alto y paddings reducidos en cards, Bento grid y acordeón FAQ.
- **Hero & Prueba Social (#hero)**: 7 avatares fotográficos reales de fundadores locales, píldora frosted `+93`, 5 estrellas doradas y espaciado armónico.
- **Dual Marquees (#social-proof & #integrations)**: Logos SVG HD oficiales con máscaras laterales adaptadas para pantallas pequeñas (60fps continuos sin cortes).
- **Posicionamiento y Contacto**: Textos B2B y B2C unificados; 6 botones CTA apuntan al WhatsApp `https://wa.me/qr/I5IDYKKL3XVNI1`.
- Servidor de previsualización local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Eliminación de estilos inline en badges**: Reemplazados los `style="margin: 0 auto var(--space-4);"` por la clase reutilizable `.section-header__badge` para control centralizado del espaciado vertical.
- **Definición de tokens `--space-5: 1.25rem;` y `--space-20: 5rem;`**: Previene que navegadores descarten declaraciones shorthand de padding/margin por variables no resueltas.

## Aprendizajes y errores a evitar
- Cuando una variable CSS no está en `:root`, cualquier shorthand (como `padding: var(--space-20) 0;`) se invalida por completo, colapsando a 0px.
- Usar siempre fallback `overflow-x: hidden;` antes de `overflow-x: clip;` para compatibilidad móvil multiplataforma.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
