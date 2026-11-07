# MEMORY.md — VeKtra Automation

Memoria persistente del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- **Repositorio GitHub Creado**: `drichiefernandez-web/vektra-automation` configurado con origin remoto y branch `main` listo para sincronización con historial de commits completo.
- **Proyecto Vercel Creado**: `vektra-automation` (`prj_742je0o9XBZ0VvJYwwzJlcP9qZE5`) configurado en el equipo del usuario para despliegue continuo en producción.
- **Armonización de Espaciados & Distribución**: Corregida la falta de padding en `#services` causada por tokens no definidos (`--space-5`, `--space-20` y `--border-active` en `:root`). Cabecera "Nuestras Especialidades" con 20px de separación y ritmo vertical consistente.
- **Optimización Móvil (375px / 360px)**: Cero desbordamiento horizontal (`scrollWidth === clientWidth`). Header flotante, tipografía fluida `clamp()` y botones táctiles adaptados.
- **Dual Marquees & Prueba Social**: Doble marquesina a 60fps con logos SVG HD oficiales y avatares fotográficos con pill `+93`.
- **Posicionamiento y CTA**: 6 botones CTA apuntan a WhatsApp `https://wa.me/qr/I5IDYKKL3XVNI1`.

## Decisiones (y por qué)
- **Creación en GitHub y Vercel mediante MCP**: Se crearon las entidades en la nube directamente a través de las APIs oficiales para garantizar naming idéntico y propiedad en las cuentas del usuario.
- **Tokens CSS en `:root`**: `--space-5: 1.25rem;` y `--space-20: 5rem;` para prevenir que navegadores descarten declaraciones shorthand de padding.

## Aprendizajes y errores a evitar
- Git Credential Manager en Windows abre ventanas OAuth del navegador que requieren terminal interactivo; la sincronización inicial de credenciales se realiza ejecutando el comando interactivo en la consola del usuario.
- Vincular el repositorio en Vercel Git Settings activa despliegues automáticos con cero configuración en cada push a `main`.

## Próximos pasos
- Ejecutar el empuje interactivo con Git Credential Manager y vincular GitHub en la pestaña Git de Vercel.
