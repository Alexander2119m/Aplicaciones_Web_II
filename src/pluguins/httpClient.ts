const url = 'https://pokeapi.co/api/v2/pokemon/75/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    let element = document.getElementById('elem');
    if (element) {
      element.innerHTML = `
        <p>${data.name}</p>
        <p>${data.order}</p>
        <img src='${data.sprites.front_default}'/>
      `;
      console.log(data);
    } else {
      console.error('Element with ID "elem" not found.');
    }
  })
  .catch(err => console.error(err));
