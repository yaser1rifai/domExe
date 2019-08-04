import "../scss/styles.scss";
import logo from "../img/logo.png";

import 'bootstrap';

import "@scss/styles.scss";
import logoImg from "@img/logo.png";

let filename = logoImg.substring(logoImg.lastIndexOf('/') + 1);
logo.src = `assets/img/${filename}`;

document.querySelector("#logo").src = logo

let message = "Hello Webpack";
console.log(` Message is: ${message}`);