# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Optimización Móvil (375px / 360px)**: Adaptación completa y fluida sin desbordamiento horizontal (`scrollWidth === clientWidth`). Header flotante optimizado (oculta CTA redundante en móviles `<640px` priorizando el menú y drawer), tipografía fluida con `clamp()`, botones táctiles de 46-48px de alto y paddings reducidos en cards, Bento grid y acordeón FAQ.
- **Hero & Prueba Social (#hero)**: 7 avatares fotográficos reales de fundadores locales, píldora frosted `+93`, 5 estrellas doradas y espaciado armónico. Botones CTA apilados verticalmente en móvil a ancho completo.
- **Dual Marquees (#social-proof & #integrations)**: Logos SVG HD oficiales con máscaras laterales adaptadas para pantallas pequeñas (60fps continuos sin cortes).
- **Especialidades (#services)**: Isotipo oficial n8n en `#EA4B71`, badges sin emojis con iluminación ámbar `#fef08a` al hover y spotlight cursor.
- **Posicionamiento y Contacto**: Textos B2B y B2C unificados; 6 botones CTA apuntan al WhatsApp `https://wa.me/qr/I5IDYKKL3XVNI1`.
- Servidor de previsualización local activo en `http://localhost:3000/`.

## Decisiones (y por qué)
- **Header móvil simplificado**: En pantallas `< 640px` se oculta el botón "Agendar Llamada" de la barra fija para evitar comprimir el logotipo y los controles. El usuario dispone de dicho CTA en el menú hamburguesa desplegable y en el Hero.
- **Dimensionamiento seguro en Canvas dot-matrix**: Fórmula dinámica `Math.max(16, Math.min(width / 21, 72))` que previene cortes o desbordamientos del texto en el footer en pantallas de 320px–375px.

## Aprendizajes y errores a evitar
- Usar siempre fallback `overflow-x: hidden;` antes de `overflow-x: clip;` para compatibilidad móvil multiplataforma.
- Los elementos de acción táctil en móvil deben tener un objetivo mínimo de 44x44px.
- En PowerShell, evitar cadenas `&&`; usar `;` o comandos independientes.

## Próximos pasos
- Tarea T9: Muro de Testimonios y valoraciones de clientes.
