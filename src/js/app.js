/**
 * Entry point of app: don't change this
 */
import Cards from "./cards";
import InnFormWidget from "./widget";
import "../css/style.css";
// don't write your code here
const container = document.querySelector(".container");
const ul = document.querySelector("ul");

const cards = new Cards(ul);
cards.bindToDOM();
const vidget = new InnFormWidget(container);
vidget.bindToDOM();
