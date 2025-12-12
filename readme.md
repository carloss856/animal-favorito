# Ejercicio 1 – Aplicación Node.js con dos vistas HTML

## Descripción
Este proyecto solicita al usuario el nombre de su animal favorito, envía los datos a un servidor Node.js mediante POST y luego redirige a otra vista HTML donde se muestra el resultado.

## Requisitos
- Node.js 18+
- npm

## Instalación

npm init -y
npm install express

## Estructura

animal-favorito/
│
├── server.js
└── public/
    ├── index.html
    └── resultado.html

## Ejecución
node server.js

Abrir en navegador:
http://localhost:3000

## Bibliografía
- Express.js. (2024). *Express - Node.js web application framework*. https://expressjs.com/
- Node.js Foundation. (2024). *Node.js documentation*. https://nodejs.org/en/docs
- Mozilla Developer Network. (2024). *Using HTML forms*. https://developer.mozilla.org/en-US/docs/Learn/Forms
- Mozilla Developer Network. (2024). *URLSearchParams*. https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams