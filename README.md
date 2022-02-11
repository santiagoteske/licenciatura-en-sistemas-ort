# Representación interactiva del plan de estudios de la carrera de Licenciatura en Sistemas

Lo siguiente es una representación del plan de estudios de la carrera de Licenciatura en Sístemas (plan 2019) de Universidad ORT Uruguay (**aplicación no oficial**) a modo de llevar un conteo de las materias cursadas y pendientes.

En la aplicación se mostrará el programa de estudio diferenciado en cuatro colores:
- Rojo para materias pendientes (crédito no obtenido).
- Azul para materias que se estén cursando actualmente.
- Amarillo para examenes pendientes (crédito parcial).
- Verde para materias aprobadas (crédito total).

Se podrá llevar además un conteo de la cantidad de créditos parciales, totales y restantes.

Ejemplo:

<a href="https://ibb.co/nkV3HPf"><img src="https://i.ibb.co/9YfwFZ2/licenciaturaensistemas.jpg" alt="licenciaturaensistemas" border="0"></a>

## Descargar el ejecutable:

Para ahorrar los pasos de instalación manual se puede descargar la aplicación cliqueando [acá](https://drive.google.com/drive/folders/1KYBfvtdO3Vw3xTwIfOE_hlTeCJkP4kVt?usp=sharing). Una vez descargado el archivo correspondiente a su SO se podrá encontrar el archivo " **licenciatura-en-sistemas.exe** " dentro de la carpeta contenedora (se recomienda crear un acceso directo).

## Instalación manual desde el repositorio:

### Requerimiento:

Es necesario contar con [Node.js](https://nodejs.org/es/) en el equipo.

### Pasos a seguir:

1. Descargar los archivos del repositorio.
2. Desde el cmd posicionarse en la carpeta local del repositorio.
3. Ejecutar el comando " **npm i nw@0.50.2 nw-builder -D** " donde 0.50.2 coincide con la version de nw.js (debe ser siempre la última), verificable en [este link](https://nwjs.io/). Debería dar una salida similar a la siguiente imágen.

<a href="https://ibb.co/t3QbQGg"><img src="https://i.ibb.co/hCLKL6b/ejemplo1.jpg" alt="ejemplo1" border="0"></a>

4. Si todo salío bien, al ejecutar el comando " **npm run dev** " se debería ejecutar una ventana con la aplicación.
5. El paso final será ejecutar el comando " **npm run prod** ". Esto va a crear una carpeta de nombre " **dist** " en el repositorio. Dentro de esa carpeta aparecerán dos versiones (win32 y win64), elegimos la que corresponda a nuestro SO y desde el archivo **licenciatura-en-sistemas.exe** podremos ejecutar la aplicación.