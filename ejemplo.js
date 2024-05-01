// Creamos los elementos HTML
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const destacadasSection = document.createElement('section');
const marcasSection = document.createElement('section');
const ofertasSection = document.createElement('section');
const contactoSection = document.createElement('section');
const formularioContacto = document.createElement('form');
const footer = document.createElement('footer');
const h1 = document.createElement('h1');
const h2Destacadas = document.createElement('h2');
const h2Marcas = document.createElement('h2');
const h2Ofertas = document.createElement('h2');
const h2Contacto = document.createElement('h2');
const pFooter = document.createElement('p');
const liDestacadas = document.createElement('li');
const liMarcas = document.createElement('li');
const liOfertas = document.createElement('li');
const liContacto = document.createElement('li');
const aDestacadas = document.createElement('a');
const aMarcas = document.createElement('a');
const aOfertas = document.createElement('a');
const aContacto = document.createElement('a');

// Establecemos los atributos y el contenido
h1.textContent = 'Impresoras 3D';
h2Destacadas.textContent = 'Impresoras 3D destacadas';
h2Marcas.textContent = 'Marcas de Impresoras 3D';
h2Ofertas.textContent = 'Ofertas de Impresoras 3D';
h2Contacto.textContent = 'Contacto';
pFooter.textContent = '© 2024 Impresoras3D.com';
aDestacadas.textContent = 'Impresoras destacadas';
aDestacadas.setAttribute('href', '#destacadas');
aMarcas.textContent = 'Marcas';
aMarcas.setAttribute('href', '#marcas');
aOfertas.textContent = 'Ofertas';
aOfertas.setAttribute('href', '#ofertas');
aContacto.textContent = 'Contacto';
aContacto.setAttribute('href', '#contacto');

// Construimos la estructura del documento
header.appendChild(h1);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(liDestacadas);
ul.appendChild(liMarcas);
ul.appendChild(liOfertas);
ul.appendChild(liContacto);
liDestacadas.appendChild(aDestacadas);
liMarcas.appendChild(aMarcas);
liOfertas.appendChild(aOfertas);
liContacto.appendChild(aContacto);
destacadasSection.appendChild(h2Destacadas);
marcasSection.appendChild(h2Marcas);
ofertasSection.appendChild(h2Ofertas);
contactoSection.appendChild(h2Contacto);
footer.appendChild(pFooter);

// Agregamos la estructura al documento HTML
document.body.appendChild(header);
document.body.appendChild(destacadasSection);
document.body.appendChild(marcasSection);
document.body.appendChild(ofertasSection);
document.body.appendChild(contactoSection);
document.body.appendChild(footer);
