# Mi Portafolio Personal - Fabian Beltran

Este es el proyecto de mi portafolio web. Lo cree para mostrar lo que voy aprendiendo en mi carrera de Ingenieria de Software.

## 🫟 Los colores que elegi

Para que el sitio se vea tecnico y moderno, use esta combinacion:

- **Fondo Negro:** `#0B0E11` (El color de toda la pagina)
- **Cajas Grises:** `#1E2329` (Para resaltar bloques de contenido)
- **Azul Neon:** `#00D1FF` (Para mi nombre y los botones principales)
- **Verde Lima:** `#C1FF72` (Para avisos de disponibilidad y contacto)

---

## 🗂️ Creacion de las secciones

Asi fue como pense y arme cada parte de la pagina:

### 1. El Inicio (Hero)
Esta es la carta de presentacion. Queria que mi nombre se viera muy grande para que no se olvide. Agregue una descripcion de mis estudios y dos cuadros con luces LED que parpadean: uno verde para decir que estoy disponible y uno azul para mi especialidad. El fondo tiene una rejilla de puntos para que parezca un plano de ingenieria.

### 2. Habilidades (Skills)
Arme esta seccion con dos tarjetas grandes: una para Front-End y otra para Backend. Use iconos de Java, Python y MySQL que guarde en mi carpeta. Lo mas dificil fue que no eran del color que yo queria, asi que programe unos filtros en el codigo para que se vean grises y cambien a azul o verde cuando les pasas el mouse.

### 3. Trayectoria y Formacion
Aqui use un diseño de linea de tiempo. Puse un borde al lado izquierdo y circulos que brillan para marcar mis estudios en el Politecnico Grancolombiano y en Generation Colombia. Queria que se viera ordenado y facil de leer.

### 4. Proyectos
Cree una cuadrícula de 3 columnas. Como todavia estoy armando mis trabajos, use imagenes de prueba (placeholders) y titulos de "Lorem Ipsum" debido a que a un no tengo proyectos. q

### 5. Contacto
Esta parte es para que me escriban. Puse botones grandes para el correo, WhatsApp y LinkedIn. Use los iconos locales y me asegure de que cada uno brille con su color (azul para email, verde para WhatsApp). Tambien agregue un efecto para que el texto se mueva un poquito cuando lo tocas.

### 6. Pie de pagina (Footer)
Al final puse mi logo otra vez y un mensaje de cierre. Tambien agregue un estado de sistema que dice "Abierto a nuevas vacantes" con un LED verde para que sea lo ultimo que la gente vea.

---

## 📅 Diario de Construccion (Paso a paso)

### 27/03/2026 - El primer paso
- Decidi el estilo oscuro con luces neon.
- Cree el archivo principal y puse los colores que iba a usar en todo el sitio.

### 30/03/2026 - Las letras locales
- Descargue los archivos de las letras (fuentes) a mi carpeta de fonts.
- Hice que el codigo las buscara ahi mismo para no depender de paginas externas.

### 31/03/2026 - Los iconos y filtros
- Busque y guarde los iconos de programacion en formato imagen (.svg).
- Cree los filtros en el codigo para que cambien de color al pasar el mouse.

### 01/04/2026 - Mi Marca y luces LED
- Rediseñe el inicio para que mi nombre "Fabian Beltran" fuera el protagonista.
- Programe las luces LED que parpadean (animacion pulse).

### 02/04/2026 - Armado de secciones
- Escribi la informacion de mi carrera y mis habilidades.
- Arme las tarjetas de los proyectos con el efecto de barrido de luz.

### 03/04/2026 - Menu y Celular
- Hice que la barra de navegacion se quedara pegada arriba (fixed).
- Programe el menu para que se abra y se cierre bien en pantallas pequeñas de celular.

### 04/04/2026 - Limpieza y Comentarios
- Hoy revise que todo el codigo estuviera bien escrito y ordenado (semantica).
- Borre estilos que ya no usaba para que el archivo este limpio.
- Le pedi a IA que me organizara los comentarios.
---


## 🗂️ Estructura del Proyecto

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