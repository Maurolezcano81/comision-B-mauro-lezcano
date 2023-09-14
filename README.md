# Proyecto de Entrega - Lenguajes de Programación I | Comisión 21646 B

Este repositorio contiene la entrega final del proyecto realizado como parte del curso Lenguajes de Programacion I. A continuación, encontrarás información importante sobre el proyecto, instrucciones de instalación y algunas capturas de pantalla para ilustrar el trabajo realizado.

## Descripción del Proyecto

Este proyecto tiene como objetivo la creación de un foro personalizado en el que los usuarios puedan crear y compartir publicaciones sobre diversos temas en una página web personal. Cada publicación contendrá un título descriptivo, contenido informativo, una fecha de creación y la opción de adjuntar un enlace (URL) a una imagen relacionada con el contenido.

## Características Clave
- Creación de Publicaciones: Los usuarios pueden crear publicaciones con títulos, contenido, fechas y enlaces de imágenes.
- Interfaz Intuitiva: La interfaz será intuitiva y atractiva, con un diseño responsivo para adaptarse a diferentes dispositivos.
- Tecnologías Utilizadas: Se emplearán tecnologías web como Node.js, EJS, MySQL y Sequelize para desarrollar la aplicación.
- Estilo Personalizable: Se permitirá la personalización del estilo y la apariencia del foro utilizando Bootstrap y CSS personalizado.
- Carga y Visualización de Imágenes: Se implementará la carga y visualización óptima de imágenes relacionadas con las publicaciones.
- Almacenamiento en Base de Datos: Se guardará la información de las publicaciones en una base de datos individual.
- Presentación de Publicaciones: Las publicaciones se presentarán de manera efectiva y atractiva en la página.

Este proyecto proporcionará a los estudiantes habilidades esenciales en diseño de interfaces, gestión de bases de datos y programación web. Les permitirá crear una solución personalizada para satisfacer las necesidades de los usuarios que deseen publicar contenido diverso en un foro personal.

## Instrucciones de Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando el siguiente comando:
   ```bash
   git clone https://github.com/Maurolezcano81/comision-B-mauro-lezcano.git
2. Navega hacia el repositorio
    ```bash 
    cd comision-B-mauro-lezcano
3. Crea una base de datos en MySQL con la siguiente tabla:
    ```bash 
    create table Posts(
	id int not null primary key auto_increment,
	titulo varchar(30) not null,
	contenido varchar(200) not null,
	enlace_imagen text,
	fecha_creado date not null);
4. Instala las dependencias:
    ```bash
    npm install
5. Configura el archivo .env:
    ```bash
    DB_HOST=localhost
    DB_USER=tu_usuario_de_mysql
    DB_PASSWORD=tu_contraseña_de_mysql
    DB_DATABASE=nombre_de_tu_base_de_datos
    DB_PORT = puerto_de_tu_base_de_datos
6. Ejecuta la aplicacion:
    ```bash
    node index.js
La aplicación estará disponible en http://localhost:3000 en tu navegador.

## Capturas de Pantalla
### Inicio
![Imagen del Inicio](/public/images/repositorio/Index.png)

### Formulario de creacion de posts
![Imagen del Formulario de creacion de posts](/public/images/repositorio/crear_post.png)

### Inicio con post creado
![Imagen del Inicio con post creado](/public/images/repositorio/Index-post.png)

## Creditos
Este proyecto fue creado por Mauro Lezcano, para el curso de Lenguajes de Programación I impartido por EPICA.

## Contacto
En caso de querer contactarse conmigo, dejo mi direccion de correo electronico.
- Email: maurolezcano111@gmail.com