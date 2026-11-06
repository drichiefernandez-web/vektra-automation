---
name: sdd
description: Úsala siempre que trabajes con Spec-Driven Development en este proyecto (docs/constitution.md o cualquier archivo dentro de specs/) - redactar, revisar o cambiar specs, planes y tareas, o implementar y validar tareas de una spec.
---

# Spec-Driven Development (SDD)

## Flujo
Constitución → Spec → Clarificación → Plan → Tareas → Implementación → Validación → Cambio.

- Nunca pases a la siguiente fase sin la aprobación explícita del usuario.
- La spec manda: si algo no está en la spec, no se implementa. Si falta una decisión, para y pregunta.
- Un cambio de requisitos se hace primero en la spec, luego en el plan y las tareas, y por último en el código.
- Cada spec vive en su carpeta: `specs/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`.
- Al terminar cada fase, actualiza `MEMORY.md`.

## Plantilla de spec (spec.md)
```markdown
# Spec NNN — <Nombre>
Estado: borrador | aprobada | implementada

## Contexto y objetivo
<Qué problema resuelve y por qué merece la pena. Un párrafo.>

## Usuarios
<Quién lo usa.>

## Historias de usuario
- HU-1. Como <rol>, quiero <acción> para <beneficio>.

## Definiciones (solo si hay términos que puedan interpretarse de varias formas)

## Requisitos funcionales (criterios de aceptación en EARS)
- RF-x: CUANDO <evento>, EL SISTEMA <respuesta>.
- RF-x: SI <condición no deseada>, ENTONCES EL SISTEMA <respuesta>.
- RF-x: MIENTRAS <estado>, EL SISTEMA <respuesta>.
- RF-x: EL SISTEMA <comportamiento permanente>.

## Requisitos no funcionales
<Rendimiento, accesibilidad, compatibilidad con navegadores, responsive, etc.>

## Casos límite
<Pantallas ultra anchas, móviles pequeños (375px), fuentes faltantes, etc.>

## Fuera de alcance
<Lo que explícitamente NO se hace en esta iteración.>

## Criterios de finalización
<Ej.: Todas las secciones maquetadas fielmente, responsive probado, navegación fluida.>

## Dudas abiertas
- [NECESITA ACLARACIÓN] <duda>
```

## Plan (plan.md)
Archivos y responsabilidades · Estructura HTML · Clases BEM y tokens CSS · Interactividad JS · Decisiones técnicas justificadas.

## Tareas (tasks.md)
```markdown
- [ ] **Tn. <Descripción>.** RF-x, RF-y
  - Hecho cuando: <comprobación verificable>.
```
Máximo 20-30 min por tarea, en orden de dependencia.

## Implementación
Una sola tarea cada vez: implementar, verificar visualmente (móvil y desktop), marcar tarea como completada y reportar.

