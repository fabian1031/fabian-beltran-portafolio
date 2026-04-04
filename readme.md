# Portafolio Profesional - Fabian Beltran

Este proyecto es un portafolio web de alto impacto visual y tecnico, diseñado para un perfil de **Ingenieria de Software**. El enfoque principal ha sido la **localizacion total de recursos**, el rendimiento optimo y una semantica limpia que facilite el mantenimiento.

## 🚀 Caracteristicas Principales

- **Arquitectura Local:** Fuentes e iconos servidos directamente desde el servidor (zero dependencias externas).
- **Diseño Asimetrico:** Estetica moderna basada en interfaces de ingenieria y tableros de control.
- **Semantica HTML5:** Estructura optimizada para accesibilidad y lectura de motores de busqueda.
- **Interactividad:** Animaciones de revelado (Scroll Reveal) y menu movil con transformaciones CSS.

## 🎨 Paleta de Colores (Design Tokens)

| Color | Hex | Uso |
| :--- | :--- | :--- |
| **Deep Black** | `#0B0E11` | Fondo principal (Background) |
| **Carbon** | `#1E2329` | Tarjetas y contenedores secundarios |
| **Neon Blue** | `#00D1FF` | Acento principal, enlaces y luces LED |
| **Electric Purple** | `#7B61FF` | Degradados y acentos secundarios |
| **Lime** | `#C1FF72` | Estado de disponibilidad y detalles de exito |
| **Muted Gray** | `#848E9C` | Textos secundarios y descripciones |
| **White** | `#FFFFFF` | Titulos y texto de alto contraste |

---

## 🛠️ Stack Tecnico

- **HTML5 Semantico:** Marcado estructurado para una mejor jerarquia de datos.
- **Tailwind CSS:** Framework de estilos (Configuracion local inyectada via JavaScript).
- **Vanilla JavaScript:** Logica de UI, observadores de interseccion y manejo del DOM.
- **Fuentes Locales:** Space Grotesk (Sans) e IBM Plex Mono (Codigo).

---

## 📅 Historico de Construccion (Paso a Paso)

### 27/03/2026 - Fase de Cimientos
- Definicion del concepto visual: "Dark Mode" tecnico de alto contraste.
- Creacion de la estructura base en HTML y definicion de variables CSS iniciales en `:root`.
- Implementacion del primer sistema de colores neon y sombras de brillo.

### 30/03/2026 - Localizacion de Tipografia
- Migracion de Google Fonts a archivos locales (`.woff2`) para mejorar la velocidad de carga.
- Configuracion de reglas `@font-face` detalladas por peso (300 a 700).
- Ajuste de jerarquia tipografica: Space Grotesk para titulos, IBM Plex Mono para elementos de sistema.

### 31/03/2026 - Gestion de Assets e Iconografia
- Sustitucion de librerias de iconos externas por archivos `.svg` locales en la carpeta `assets/icons/`.
- Implementacion de **filtros CSS** complejos para permitir que imagenes SVG externas cambien de color (Neon Blue, Lime, White) mediante clases de hover.

### 01/04/2026 - Evolucion del Branding Personal
- Rediseño del Hero: se descarta el estilo centrado por uno asimetrico mas moderno.
- Re-jerarquizacion del nombre: El nombre **Fabian Beltran** toma el protagonismo visual masivo.
- Creacion de los indicadores de estado con efectos LED animados (Disponibilidad y Especialidad).

### 02/04/2026 - Estructuracion de Secciones Tecnicas
- Construccion de la seccion de **Trayectoria** dividida en Formacion y Experiencia.
- Diseño de la seccion de **Proyectos** utilizando placeholders y textos Lorem Ipsum.
- Implementacion del efecto `card-scan` (barrido de luz) para las tarjetas de proyectos.

### 03/04/2026 - Optimizacion de Navegacion
- Configuracion del **Nav fijo** con efecto de desenfoque de fondo (backdrop-blur).
- Desarrollo de la logica del menu movil con animacion de icono hamburguesa a "X".
- Ajustes de espaciado en el footer para evitar colisiones visuales con la navegacion fija.

### 04/04/2026 - Semantica Final y Limpieza
- Reestructuracion total del HTML usando etiquetas semanticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Limpieza profunda del CSS: organizacion por bloques logicos y eliminacion de reglas redundantes.
- Modularizacion del JavaScript: Separacion de la logica de revelado y el menu en funciones independientes.
- Creacion de la documentacion tecnica final (README).

---

## 📂 Estructura del Proyecto

```text
/
├── index.html          # Estructura semantica principal
├── css/
│   └── style.css       # Variables, fuentes y efectos de filtros
├── js/
│   ├── script.js       # Logica de UI y configuracion de Tailwind
│   └── tailwind.min.js # Motor de estilos local (Opcional)
├── fonts/              # Archivos de fuentes locales .woff2
├── assets/
│   ├── icons/          # Iconos .svg locales (Linkedin, Github, etc.)
│   └── fondo.png       # Imagenes de fondo del sitio
└── favicon/            # Recursos de identidad del sitio