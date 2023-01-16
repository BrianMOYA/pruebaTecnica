# Proceso de Instalación
Después de clonar el repositorio de GitHub, procedemos abrir en el proyecto con Visual Studio Code, una vez dentro del proyecto ingresamos el siguiente código en la terminal de Visual Studio para instalar el node
**npm install** o de lo contrario **npm install --force**
# Base de datos
Luego de instalar node dentro del proyecto, procedemos a instalar el servidor de la base datos para que los registros se agreguen en la base del Json
**npm install -g json-server (instalar el servidor de la base datos)**  o de lo contrario **npm install -g json-server --force
**json-server --watch data.json (Ejecutar e iniciar el servidor)**  o de lo contrario **json-server --watch data.json --force
# Ejecución y funcionamiento del  Webapp
Para ejecutar el proyecto ingresa en la terminal de Visual Code y ejecuta el siguiente código para iniciar el servidor de angular
**ng s -o**
1.	Luego de que inicie el servidor, se podrá evidenciar la ejecución del proyecto, donde se encontrará el Header (Encabezado) con el título del proyecto “Prueba Técnica”
2.	Debajo del Header (Encabezado), se muestra un título “Ingrese el archivo CSV para visualizarlo antes de registrarlo”, el cual especifica que en la parte inferior se encuentra un botón donde le permitirá subir un archivo CSV y poder visualizarlo.
3.	A continuación, se muestra un título “Agrega, consulta, modifica y elimina los archivos registrados”, el cual especifica, que en la parte inferior se encuentra un apartado donde se evidencian los registros realizados, un espacio para realizar consultas, y dos botones con la función de eliminar y otro de editar. Por último, en la tabla podremos cambiar de paginación dependiendo de los registros que tengamos almacenados.
4.	Para finalizar, se evidencian dos botones de “Exporta Historial” y “Añadir nuevo archivo”, en donde se podrá exportar en formato CSV todos los registros realizados y en el segundo botón se podrá crear un nuevo registro
Nota: Todos los campos para añadir un nuevo registro son obligatorios
# Breve descripción  del desarrollo
Para el proceso de elaboración del proyecto utilice Visual Studio Code para el manejo de programación, Node js, Angular, TypeScript, la librería de angular material y Json. Por otro lado, elabore un servicio para alojar algunas funciones y realizar la conexión de la base de datos Json, implemente 2 componentes aparte del app.component donde tiene diferentes funcionalidades como visualizar el archivo seleccionado y el otro componente para agregar los registros.
