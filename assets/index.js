async function getPosts() {
    try {
      // Realizar la solicitud a la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      // Verificar si la solicitud es exitosa
    if (!response.ok) {
        throw new Error('Error al obtener los posts');
    }

      // Obtener los datos de la respuesta en formato JSON
    const posts = await response.json();

      // Obtener el contenedor donde se mostrarán los posts
    const postContainer = document.getElementById('post-data');

      // Limpiar el contenido anterior del contenedor
    postContainer.innerHTML = '';
      // Crear una lista desordenada para mostrar los posts
    const ul = document.createElement('ul');

      // Iterar sobre los posts y agregarlos a la lista en HTML
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.id}: ${post.title}`;
        ul.appendChild(li);
    });

      // Agregar la lista al contenedor
    postContainer.appendChild(ul);
    } catch (error) {
      // Manejar errores
    console.error('Error:', error.message);
    }
}

