---
name: web-quality
description: Guías de calidad para cualquier sitio web de Alberto (colorimetría, responsividad en celular/tablet/laptop/escritorio, legibilidad, escalabilidad, imágenes WebP con srcset y metas de Lighthouse) y el proceso para agregar un proyecto real al portafolio con capturas optimizadas. Usar al crear o revisar páginas, al agregar imágenes o al sumar un proyecto a src/data/projects.js.
---

# Guías de calidad web

Aplican a todos los sitios, no solo al portafolio. La copia para leer está en Obsidian:
`C:\Users\alzel\OneDrive\Documentos\Obsidian\Guias Web - Calidad y Proyectos.md`. Si cambias una, cambia la otra.

## 1. Colorimetría

- Paleta corta: 1 color de marca, 1 de acento y neutros (fondo, superficie, borde, texto, texto secundario).
- Colores como variables (`:root { --color-... }`), nunca hex sueltos en los componentes.
- Contraste WCAG AA: **4.5:1** en texto normal y **3:1** en texto grande (≥ 24 px, o ≥ 18.66 px en negrita) y en íconos o bordes que comunican algo.
- Colores de estado consistentes: éxito, error, advertencia e información, y cada uno con texto o ícono, no solo color.
- Si hay modo oscuro, se definen los mismos tokens para ambos modos; nada de invertir colores con filtros.

## 2. Responsividad y dispositivos

Diseña primero para móvil y prueba siempre en estos anchos:

| Dispositivo | Ancho de prueba |
| --- | --- |
| Celular | 360 y 414 px |
| Tablet | 768 y 1024 px |
| Laptop | 1280 y 1366 px |
| Escritorio grande | 1440 y 1920 px |

- Sin scroll horizontal en ningún ancho. Margen lateral mínimo de 16 px en móvil.
- Contenido con ancho máximo (≈ 1200–1280 px) centrado en pantallas grandes.
- Objetivos táctiles de al menos 44 × 44 px.
- Layouts con `flex`/`grid`, `clamp()` para tamaños de texto y espacios; medidas en `rem`.
- Las tablas y galerías cambian de forma en móvil (apiladas o con scroll interno), no se encogen hasta ser ilegibles.

## 3. Fácil de ver y leer

- Texto base de 16 px como mínimo, interlineado 1.5, líneas de 60–75 caracteres (`max-width: 65ch`).
- Jerarquía clara: un solo `h1` por página y títulos en orden (`h2`, `h3`).
- Espacio en blanco generoso entre secciones; una idea por bloque.
- Foco visible al navegar con teclado; textos alternativos útiles en las imágenes.

## 4. Escalable y optimizado

- Componentes pequeños y reutilizables; los datos (textos, proyectos, experiencia) van en `src/data`, no dentro del JSX.
- Estilos encapsulados (CSS Modules o el sistema del proyecto) y tokens compartidos.
- Cargar diferido lo que no se ve al inicio: `React.lazy`/`import()` para modales y secciones pesadas.
- Sin dependencias grandes para cosas pequeñas; revisa el tamaño del bundle en `pnpm build`.
- Fuentes autohospedadas (`@fontsource`) con `font-display: swap` y solo los pesos que se usan.
- **Llamadas a la API**: mientras una petición está pendiente (`loading`/`pending`/`isSubmitting`), el botón u opción que la dispara se **deshabilita** (`disabled` + `aria-busy="true"`) y muestra que está cargando (spinner o texto "Guardando…"). Así se evitan dobles clics y peticiones duplicadas. Se vuelve a habilitar al terminar, tanto en éxito como en error, y el error se muestra al usuario.

  ```jsx
  <button type="submit" disabled={isLoading} aria-busy={isLoading}>
    {isLoading ? "Guardando…" : "Guardar"}
  </button>
  ```
  Con RTK Query usa `isLoading`/`isFetching` de la mutación; con React Hook Form, `formState.isSubmitting`.

## 5. Imágenes

- **Formato WebP** siempre (AVIF opcional si el proyecto lo soporta). Nada de PNG o JPG en producción, salvo logos en SVG.
- **Tamaños máximos por uso**:

| Uso | Ancho | Peso objetivo |
| --- | --- | --- |
| Portada de tarjeta | 1200 px | ≤ 150 KB |
| Galería o captura completa | 1600 px | ≤ 200 KB |
| Miniatura o avatar | 400–600 px | ≤ 50 KB |

- Calidad 75–80. Nunca agrandar una imagen pequeña.
- **Distinta resolución según la pantalla** con `srcset` y `sizes`, para que el celular no descargue la versión de escritorio:

  ```html
  <img
    src="/img/cover-1200.webp"
    srcset="/img/cover-480.webp 480w, /img/cover-768.webp 768w, /img/cover-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw, 600px"
    width="1200" height="750" alt="..." loading="lazy" decoding="async" />
  ```
- Siempre `width` y `height` (o `aspect-ratio`) para evitar saltos de diseño (CLS).
- `loading="lazy"` en todo lo que está fuera de la primera pantalla. La imagen principal (LCP) va sin lazy y con `fetchpriority="high"`.
- Conversión en este repo: `pnpm images <archivo o carpeta> <carpeta destino> --width 1600 --sizes 480,768,1200`.
  En otro proyecto: copia `scripts/optimize-images.mjs` y agrega `sharp` como devDependency.

## 6. Lighthouse

Metas en **móvil** (el modo más exigente) y escritorio:

- Performance, Accessibility, Best Practices y SEO: **≥ 90** (ideal 100 en las tres últimas).
- LCP < 2.5 s · CLS < 0.1 · INP < 200 ms · TBT < 200 ms.

Cómo medir: `pnpm build && pnpm preview` y Lighthouse en DevTools (ventana de incógnito), o
`npx lighthouse <url> --view` y `npx lighthouse <url> --preset=desktop --view`. Medir el build, nunca el servidor de desarrollo.
Anota los resultados (antes y después) en la nota del proyecto en Obsidian.

## 7. Agregar un proyecto real al portafolio

1. **Información**: qué es, para quién, tu rol y cifras verificables (commits, PRs, pantallas, tiempos, pesos). Si no hay cifra real, no se inventa.
2. **Capturas**:
   - Navegador maximizado, ventana de 1440 × 900 (16:10), zoom al 100 %.
   - Solo datos de prueba. Nada de nombres, números de identidad, cuentas o correos reales.
   - Una portada y 3–5 capturas de la galería que cuenten el flujo en orden.
   - Nombres en kebab-case que digan qué muestran (`identity-check.png`, `products.png`).
3. **Optimizar**:
   - Portada: `pnpm images portada.png src/assets/projects --width 1200 --name <slug>` → `src/assets/projects/<slug>.webp`
   - Galería: `pnpm images <carpeta capturas> src/assets/projects/<slug> --width 1600`
   - Revisa que cada archivo quede dentro de los pesos de la tabla de la sección 5.
4. **Datos**: agrega la entrada en `src/data/projects.js` con el mismo formato que AgriTech:
   `title`, `imageSrc`, `description`, `skills`, `demo`, `source` y `details` (`eyebrow`, `subtitle`, `meta`, `stats`, `overview`, `highlights`, `role`, `stack`, `gallery`). Todo texto visible va en `{ en, es }`.
5. **Revisar**: `pnpm lint`, abrir el modal en 360, 768 y 1440 px, y pasar Lighthouse.

## Checklist antes de publicar

- [ ] Contraste AA en textos y botones
- [ ] Sin scroll horizontal en 360, 768, 1024, 1440 y 1920 px
- [ ] Texto base ≥ 16 px y líneas ≤ 75 caracteres
- [ ] Todas las imágenes en WebP, dentro del peso objetivo, con `width`/`height`
- [ ] `srcset`/`sizes` en imágenes grandes; `lazy` fuera de la primera pantalla
- [ ] Lighthouse ≥ 90 en móvil en las cuatro categorías
- [ ] Botones que llaman a la API deshabilitados mientras la petición está pendiente
- [ ] Textos en inglés y español
- [ ] Sin datos reales de clientes en las capturas
