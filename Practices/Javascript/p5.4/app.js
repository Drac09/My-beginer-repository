/*
 *  Crea una función que muestre un menu
*/

//  Analiza valor de prompt() para convertirlo en entero
function promptInt(string) {
  let input = prompt(string);
  return parseInt(input);
}

function printDoc(element, string, extra)
{
  if (extra !== null)
  {
    let p = document.createElement(element);
    p.textContent = string + extra;
    document.body.appendChild(p);
  } else {
    let p = document.createElement(element);
    p.textContent = string;
    document.body.appendChild(p);
  }
}

function cuadraticEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return "No existen soluciones reales"
  } else {
    let res1 = (-b + Math.sqrt(discriminant)) / 2*a;
    let res2 = (-b - Math.sqrt(discriminant)) / 2*a;
    return `x1 = ${res1}, x2 = ${res2}`
  }

  
}

let x = promptInt("Introduce el valor de x: ");
let y = promptInt("Introduce el valor de y: ");
let z = promptInt("Introduce el valor de z: ");

let res = cuadraticEquation(x, y, z);

console.log(res);
document.writeln("Resultado: ", res);
