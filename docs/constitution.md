# Constitución — VeKtra Automation

Principios innegociables del proyecto. Toda especificación, plan y tarea debe cumplirlos estrictamente.

1. **Simplicidad de stack (Cero dependencias)**: HTML5, CSS3 y JavaScript vanilla puros. Sin frameworks, sin librerías externas pesadas, sin npm ni pasos de compilación/build. Debe abrir y funcionar al 100% con doble clic en `index.html` sobre el protocolo `file://`.
2. **La spec manda (Spec-Driven Development)**: Nada se implementa en el código si no fue especificado y aprobado previamente en `specs/`. Si surge una duda o caso ambiguo, se detiene el trabajo y se consulta al usuario.
3. **Estructura y modularidad limpia**: Estructura semántica en HTML, estilos CSS organizados con metodología BEM y variables en `:root`, y lógica JavaScript modular separando navegación, interactividad y animaciones.
4. **Mobile-First y Accesibilidad**: Diseño concebido primero para móviles (375px) y adaptado progresivamente a desktop. Textos legibles, contrastes adecuados, etiquetas semánticas y atributos `alt` descriptivos en imágenes.
5. **Rendimiento e Integridad visual**: Animaciones suaves mediante transiciones CSS aceleradas por GPU, lazy loading en recursos multimedia y paleta corporativa coherente con la industria de automatización.
6. **Idioma**: Contenido de la interfaz, textos para el cliente y documentación en español; nombres de variables, funciones y comentarios técnicos en inglés.

