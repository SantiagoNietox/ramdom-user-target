

const btn = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edad');
const nacimiento = document.querySelector('#fecha_nac');
const ubicacion = document.querySelector('#ubicacion');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');




const generarUsuario = async() => {
  try {
    const url = 'https://randomuser.me/api/';
    const resp = await fetch(url);
    const {results} = await resp.json();
    const datos = results[0];
    foto.src = datos.picture.large;
    console.log(datos);
    nombre.textContent = `${datos.name.title}, ${datos.name.first} ${datos.name.last}`;
    edad.textContent = `${datos.dob.age} años`;
    ubicacion.textContent = `${datos.location.street.name}, ${datos.location.street.number}, ${datos.location.city}, 
    ${datos.location.country}, ${datos.location.postcode}`;
    email.textContent = `${datos.email}`;
    nacimiento.textContent = `${datos.dob.date.substring(0,10)}`;
    telefono.textContent = `${datos.phone}`;
  } catch (error) {
    console.log('Ha ocurrido un error:', error);
  }
}




document.addEventListener("DOMContentLoaded", async () => {
    await generarUsuario();
    
  });

btn.addEventListener ('click', generarUsuario);