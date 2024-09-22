#  Contribuir a  Darfrontend

¡Gracias por tu interés en contribuir a Darfrontend! Valoramos y apreciamos la contribución de la comunidad. Antes de comenzar, por favor toma un momento para revisar las siguientes pautas y recomendaciones.

Teconologias :
- React
- TypeScript
- Vite

[![flujo-de-trabajo-P-gina-2.png](https://i.postimg.cc/SK2BrVQk/flujo-de-trabajo-P-gina-2.png)](https://postimg.cc/FfvCFyJB)

## Cómo Contribuir

1. **Forkea el Repositorio:** Haz clic en el botón "Fork" en la parte superior de esta página para crear una copia de este repositorio en tu cuenta de GitHub.

2. **Clona tu Repositorio Forkeado:** Clona el repositorio que forkeaste a tu máquina local.
3. **Instalar Dependencias:** Instala las dependencias del proyecto definidas en el archivo package.json.
     ```bash
     npm install
     ```
4. **Ejecutar la Aplicación:** Una vez que se hayan instalado las dependencias, ejecuta la aplicación utilizando el comando definido en el archivo package.json.
      ```bash
      npm run dev
      ```
Esto ejecutará la aplicación Node.js. Abre tu navegador web y navega a la dirección en la que se ejecuta la aplicación (http://localhost:5173/). 

## Cómo evitar conlictos
1. Primero actualizar las ramas romtas, puedes estar en 'x' rama, no importa
      ```bash
      git fetch -p
      ```
2. Bajar cambios de la rama develop, ya que este comando no hace merge automáticamente.
      ```bash
      git pull origin develop
      ```

## Ejecutar en Docker
1. Construye la imagen Docker, Ejecuta el siguiente comando para construir la imagen
      ```bash
      docker build -t dar-client-webapp .
      ```
2. Ejecuta la imagen Docker, Una vez que la imagen se ha construido con éxito, ejecuta el siguiente comando para iniciar un contenedor a partir de la imagen. Esto expondrá la aplicación en el puerto por defecto (normalmente 5173 o el que definas en tu aplicación).
      ```bash
      docker run -d --name dar-client-webapp-container -p 5173:5173 dar-client-webapp
      ```

3. Ingresa a la url.
 
      http://localhost:5173

## Vista de la Aplicación

Esta es la interfaz principal de la aplicación, donde los usuarios pueden navegar y acceder a las funcionalidades disponibles.
[![landing.jpg](https://i.postimg.cc/sXSKKSjh/landing.jpg)](https://postimg.cc/BLSxnj1S)

Esta parte de la sesion.
[![login.jpg](https://i.postimg.cc/LsGNzvpS/login.jpg)](https://postimg.cc/FfgyvyzC)



## Derechos de Autor

© 2024 gnius-pe. Todos los derechos reservados.

Este proyecto está alojado en el repositorio [dar-client-webapp](https://github.com/gnius-pe/Darfrontend). El uso del código y los recursos de este proyecto están sujetos a los términos de la licencia [Licencia MIT](./LICENSE).