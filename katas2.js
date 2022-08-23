// comece a criar a sua função add na linha abaixo

function add(addV1, addV2) {
  return addV1 + addV2;
}

// console.log(add(2, 4));
// descomente a linha seguinte para testar sua função
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado"
);

// comece a criar a sua função multiply na linha abaixo
function multiply(multV1, multV2) {
  let resultado = 0;
  for (let i = 1; i <= multV1; i++) {
    // 2 * 4 ou 4+4 ou 2+2+2+2
    console.log(resultado[i]);
    resultado = add(resultado, multV2);
  }
  return resultado;
}

console.log(multiply(2, 4));
// descomente a linha seguinte para testar sua função
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// comece a criar a sua função power na linha abaixo
function power(powerV1, powerV2) {
  let elevado = 1;
  for (let i = 0; i < powerV2; i++) {
    elevado = multiply(powerV1, elevado);
  }
  return elevado;
}

// descomente a linha seguinte para testar sua função
console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// comece a criar a sua função factorial na linha abaixo
function factorial(factorValue) {
  let result = 1;

  for (let i = 1; i <= factorValue; i++) {
    result = multiply(i, result);
  }

  return result;
}
// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
