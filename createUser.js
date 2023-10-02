import fetch from "node-fetch"

// Datos del nuevo usuario que deseas crear
const nuevoUsuario = {
    username: "jsone89",
    firstName: "John",
    lastName : "Sone",
    email: "jsone@hotmail.com",
    password: "uuITX45682",
    phone: "46975623"
  };
  
  // URL del servidor donde se creará el usuario
  const url = "https://petstore.swagger.io/#/user/createUser"; 
  const apiKey = 'special-key';
  
  // Configuración de la solicitud POST
  const configuracion = {
    method: "POST",
    headers: {
      "Authorization": "Bearer ${apiKey}",
      "Content-Type": "application/json", // Tipo de contenido JSON
    },
    body: JSON.stringify(nuevoUsuario), // Convierte el objeto a JSON
  };
  
  // Realizar la solicitud POST
  fetch(url, configuracion)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("El usuario no se ha podido crear");
      }
      return respuesta.json(); // Analizar la respuesta JSON
    })
    .then((datos) => {
      console.log("Se ha creado correctamente el usuario:", datos);
    })
    .catch((error) => {
      console.error("Ha ocurrido un error al crear el usuario:", error);
    });
  