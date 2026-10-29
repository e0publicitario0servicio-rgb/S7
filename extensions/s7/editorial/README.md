# Editorial S7

El marco `s7-editorial` comparte cabecera, navegación, tipografía, colores y estilos de lectura entre las páginas de contenido, carpetas, etiquetas, canvas y bases.

## Portada

`content/index.md` utiliza la portada Editorial. Su texto se configura en Obsidian:

```yaml
title: Sistema S7
heroTitle: Un sistema para tu mundo
heroDescription: Aprende el sistema, crea tu personaje y encuentra las reglas de tu próxima partida.
```

## Índices de sección

Para presentar una nota como índice de dos columnas, añade:

```yaml
editorial: indice
```

Cada encabezado de nivel 2 (`##`) inicia una sección. Los párrafos y enlaces que lo siguen forman su contenido. En móvil las secciones se apilan.

## Artículos

Las demás notas usan el formato de lectura automáticamente. Se conservan los enlaces de Obsidian, las previsualizaciones, la búsqueda de Quartz, los retroenlaces y la tabla de contenidos.

## Implementación

- `Frame.tsx`: estructura compartida y presentación de índices; se importa desde `quartz.ts` y se compila con Quartz.
- `editorial.scss`: estilos importados desde `quartz/styles/custom.scss`.
- `content/assets/brand/`: logotipos locales publicados por Quartz.
- `quartz.config.yaml`: paleta y selección del marco por tipo de página.

Cloudflare Pages sirve los archivos generados en `public/` por la compilación de Quartz.
