// URL del servidor que proporciona el archivo JSON
const url = 'https://d3e6htiiul5ek9.cloudfront.net/prod/productos?&id_categoria=01&array_sucursales=13-1-141,13-1-143,10-1-292,13-1-142,13-1-145,13-1-139,2-1-159,2-1-025,13-1-140,2-1-024,11-5-1057,2-1-023,2-1-021,19-1-01554,11-5-1093,9-3-5277,10-1-128,2-1-022,13-1-144,2-1-218,2-1-179,13-1-138,2-1-217,10-1-63,2-1-032,2-1-031,2-1-104,2-1-186,2-1-145,2-1-160&offset=0&limit=50&sort=-cant_sucursales_disponible';

// Realizar la solicitud utilizando fetch
fetch(url)
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then(data => {
    // Imprimir los datos en la consola
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error:', error);
  });
