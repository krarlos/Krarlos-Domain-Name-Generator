/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let finale = [".com", ".cl"];

let pronounIndice = Math.floor(Math.random() * pronoun.length);
let adjIndice = Math.floor(Math.random() * adj.length);
let nounIndice = Math.floor(Math.random() * noun.length);
let finaleIndice = Math.floor(Math.random() * finale.length);

for (let pronounIndice of pronoun) {
  for (let adjIndice of adj) {
    for (let nounIndice of noun) {
      for (let finaleIndice of finale) {
        // console.log( este console log me genera undefined al correr el codigo
        //   pronoun[pronounIndice] +
        //     " " +
        //     adj[adjIndice] +
        //     " " +
        //     noun[nounIndice] +
        //     " " +
        //     finale[finaleIndice]
        // );
        console.log(`${pronounIndice}${adjIndice}${nounIndice}${finaleIndice}`);
      }
    }
  }
}
