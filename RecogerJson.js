import fetch from "node-fetch"

// Realizar una solicitud HTTP GET para obtener el JSON
fetch('https://petstore.swagger.io/#/pet/findPetsByStatus')
  .then(response => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud HTTP: ' + response.status);
    }
    // Analizar la respuesta como JSON
    return response.json();
  })
  .then(data => {
    //Recorrer el array de los elementos de las mascotas
    if(Array.isArray(data)){
        const mascotas = data.map(item =>({
            id: item.id,
            name: item.name
    }));
    
    console.log(data);
    } else {
    console.error('El JSON no es un arreglo válido.')
    
    }
  })
  .catch(error => {
    console.error('Se produjo un error:', error);
  });
