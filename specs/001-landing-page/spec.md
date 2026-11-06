# Spec 001 — Landing Page Corporativa VeKtra Automation
Estado: aprobada

## Contexto y objetivo
VeKtra Automation requiere una landing page corporativa de alto impacto para presentar sus servicios principales: **Automatización Inteligente de Procesos (con IA y flujos de trabajo)** y **Desarrollo de Páginas Web y Landing Pages de Alta Conversión**. El objetivo es posicionar a la empresa como un referente tecnológico confiable (inspirado en la arquitectura y estética moderna de PulpSense), captar clientes potenciales (leads B2B) y demostrar con métricas y casos de éxito cómo VeKtra ahorra cientos de horas operativas y potencia la presencia digital de sus clientes.

## Usuarios
- **Directores y Fundadores de Empresas B2B / Pymes**: Buscan automatizar tareas repetitivas y tener una presencia web moderna de alto impacto que convierta visitantes en clientes.
- **Líderes de Operaciones, Marketing y TI**: Evalúan la capacidad técnica, estética de diseño web y arquitectura de automatización antes de contratar.
- **Visitantes móviles**: Acceden desde campañas o redes sociales esperando una experiencia visual fluida, rápida y sin fricción.

## Historias de usuario
- **HU-1**: Como tomador de decisiones empresarial, quiero entender la propuesta de valor en los primeros 5 segundos del Hero para ver que VeKtra cubre tanto automatización operativa como desarrollo web profesional.
- **HU-2**: Como cliente interesado, quiero explorar los servicios en un Bento Grid donde resalten con máxima prioridad la Automatización de Procesos y el Desarrollo Web de Vanguardia.
- **HU-3**: Como potencial cliente escéptico, quiero ver casos reales de éxito con métricas tangibles (horas ahorradas, webs desplegadas, conversiones mejoradas) para validar la efectividad de las soluciones.
- **HU-4**: Como usuario con dudas técnicas o de contratación, quiero consultar un acordeón interactivo de preguntas frecuentes para resolver objeciones rápidamente.
- **HU-5**: Como usuario decidido a contratar, quiero tener acceso directo y visible a un botón de llamada a la acción para agendar una sesión estratégica sin rodeos.

## Definiciones
- **Bento Grid**: Disposición visual modular en bloques asimétricos que agrupa información y servicios con jerarquía moderna y atractiva.
- **Marquee**: Cinta de desplazamiento continuo que muestra logos de tecnologías y partners en movimiento suave.
- **EARS**: Sintaxis estandarizada de requisitos para evitar ambigüedades funcionales.

## Requisitos funcionales (criterios de aceptación en EARS)

### Navegación y Cabecera
- **RF-1**: EL SISTEMA mantendrá la cabecera fija o flotante visible en la parte superior durante todo el desplazamiento vertical de la página.
- **RF-2**: CUANDO el usuario hace clic en un enlace del menú de navegación, EL SISTEMA se desplazará de manera fluida y precisa hacia la sección correspondiente identificada con su ID.
- **RF-3**: EN pantallas móviles (ancho inferior a 768px), CUANDO el usuario pulse el botón de menú hamburguesa, EL SISTEMA desplegará u ocultará el menú de navegación actualizando el estado de accesibilidad `aria-expanded`.
- **RF-4**: CUANDO el usuario hace clic en cualquier enlace del menú móvil desplegado, EL SISTEMA cerrará el menú automáticamente tras iniciar la navegación.
- **RF-4b**: EL SISTEMA incluirá un botón selector de modo nocturno / modo día en la cabecera flotante; CUANDO el usuario pulsa el botón, EL SISTEMA alternará suavemente entre el tema oscuro y claro, actualizando los iconos (sol/luna) y persistiendo la selección en `localStorage`.

### Sección Hero
- **RF-5**: EL SISTEMA mostrará un badge superior de alta tecnología ("⚡ Automatización de Procesos & Desarrollo Web"), un titular principal persuasivo enfocado en escalar operaciones y captar clientes con plataformas de alto impacto, un subtítulo descriptivo y una fila de validación social con calificación de 5 estrellas.
- **RF-6**: CUANDO el usuario pulsa el botón principal de llamada a la acción ("Agendar llamada"), EL SISTEMA lo dirigirá hacia la sección de reserva estratégica.
- **RF-7**: CUANDO el usuario pulsa el botón secundario ("Ver servicios"), EL SISTEMA lo desplazará directamente a la cuadrícula de servicios.

### Carrusel de Logos e Integraciones (Social Proof & Tech Stack)
- **RF-8**: EL SISTEMA animará continuamente una cinta horizontal de logos tecnológicos (n8n, Make, OpenAI, Claude, Supabase, Airtable, HubSpot, Python, etc.) en un bucle infinito.
- **RF-9**: MIENTRAS el cursor del usuario permanezca sobre la cinta de logos, EL SISTEMA pausará la animación para facilitar su lectura.

### Mosaico de Servicios (Bento Grid Protagonista)
- **RF-10**: EL SISTEMA presentará los pilares de servicios jerarquizados dando protagonismo visual a:
  1. *Automatización de Procesos & Agentes de IA* (Flujos de trabajo autónomos, integración de CRM, bots de atención y eliminación de tareas manuales repetitivas).
  2. *Desarrollo Web & Landing Pages de Alta Conversión* (Sitios web estéticos, ultra rápidos, optimizados para ventas, diseño Dark Tech moderno y responsive impecable).
  3. *Consultoría Estratégica, Integraciones & Optimización Continua* (Auditoría operativa, arquitecturas a medida y soporte).
- **RF-11**: MIENTRAS el usuario sitúe el cursor sobre una tarjeta de servicio, EL SISTEMA resaltará sus bordes y superficie con una sutil iluminación tecnológica interactiva.

### Sección de Arquitectura Digital & Presencia Web
- **RF-12**: EL SISTEMA exhibirá una sección dedicada a cómo VeKtra construye la presencia digital de las empresas: sitios web diseñados para convertir, con rendimiento extremo, arquitectura limpia e indexación natural para motores de búsqueda tradicionales y respuestas de IA (como valor agregado incluido en cada proyecto).

### Casos de Éxito y Métricas (Success Stories)
- **RF-13**: EL SISTEMA mostrará tarjetas de casos de éxito con métricas cuantitativas verificables (ej. 67% de reducción en tareas manuales, +400 horas ahorradas por semana, $600K+ en oportunidades procesadas).

### Proceso de Trabajo en 4 Pasos
- **RF-14**: EL SISTEMA exhibirá la metodología cronológica numerada:
  1. *Llamada Estratégica (Diagnóstico)*
  2. *Plan y Arquitectura a Medida*
  3. *Implementación Ágil y Pruebas*
  4. *Escalamiento y Optimización Continua*

### Acordeón Interactivo de Preguntas Frecuentes (FAQ)
- **RF-15**: EL SISTEMA organizará las 15 preguntas frecuentes en elementos colapsables individuales.
- **RF-16**: CUANDO el usuario hace clic sobre una pregunta cerrada, EL SISTEMA desplegará suavemente su respuesta y rotará el indicador visual (flecha/chevron) a su posición activa.
- **RF-17**: CUANDO el usuario hace clic sobre una pregunta ya abierta, EL SISTEMA contraerá su respuesta cerrando el panel de forma animada.

### Sección de Cierre, Reserva y Pie de Página
- **RF-18**: EL SISTEMA incluirá una tarjeta destacada de conversión antes del pie de página con llamado directo a agendar una llamada.
- **RF-19**: EL SISTEMA mostrará un pie de página con la identidad corporativa de VeKtra Automation, enlaces rápidos de navegación, canales de contacto y el año en curso actualizado dinámicamente.

## Requisitos no funcionales
- **RNF-1 (Portabilidad y Cero Build)**: El sitio debe funcionar de forma autónoma al abrir `index.html` con doble clic sobre el protocolo `file://`, sin requerir Node.js, librerías externas por CDN ni servidores locales.
- **RNF-2 (Responsive Design)**: Visualización impecable en móviles desde 375px de ancho hasta pantallas 4K (2560px), sin desbordamientos horizontales.
- **RNF-3 (Rendimiento)**: Carga instantánea con animaciones aceleradas por hardware (transform y opacity) a 60 fps estables.
- **RNF-4 (Accesibilidad)**: Cumplimiento de contrastes legibles según WCAG AA, textos con etiquetas semánticas y soporte para `prefers-reduced-motion`.
- **RNF-5 (Idioma y Tono)**: Toda la interfaz, títulos, explicaciones y preguntas redactados en español profesional, directo y orientado a negocios.

## Casos límite
- **Pantallas móviles muy estrechas (320px - 375px)**: El texto del Hero debe ajustarse sin saltos de línea antiestéticos y los botones deben apilarse verticalmente si el ancho no es suficiente.
- **Navegadores con JavaScript deshabilitado**: La estructura semántica del sitio debe permanecer 100% legible y navegable mediante enlaces ancla tradicionales.
- **Usuarios con preferencia de movimiento reducido**: Las animaciones del carrusel y transiciones del acordeón se desactivarán o simplificarán a cambios de opacidad inmediatos.

## Fuera de alcance
- Sistema de reservas con pasarela de pago (se enlaza a calendario o formulario directo).
- Módulos de autenticación o panel de clientes privado.
- Backend dinámico o bases de datos en servidor en esta iteración.

## Criterios de finalización
- [ ] Las 13 secciones maquetadas fielmente con diseño Dark Tech estilo Magic UI / PulpSense.
- [ ] Acordeón FAQ y menú móvil funcionando con JavaScript puro.
- [ ] Carrusel infinito (Marquee) funcionando con CSS puro.
- [ ] Verificación completa en vista móvil (375px) y escritorio (1200px+).
- [ ] Apertura exitosa mediante `file://` con doble clic en `index.html`.

## Dudas abiertas
- Ninguna por el momento. Toda la estructura y contenido base han sido mapeados del código de referencia provisto.

