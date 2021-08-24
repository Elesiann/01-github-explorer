//hook, gancho.
import { useState } from "react";

// imutabilidade - nunca vai receber um novo valor, nao se pode alterar diretamente o conteúdo e sim dar um novo valor.
// usuarios ['elesian', 'giovani']
// usuarios.push ['maluco'] - mutação do valor original da variável, realocação de memória

// se quero adicionar uma informação nova no fim do array, preciso criar um novo array copiando as informaçoes que ja existem dentro de usuários
// usando spread operator (...) e adiciono no final novoUsuarios = [...usuarios, 'maluco']
export function Counter() {
  //desestruturando um array
  const [counter, setCounter] = useState(0);

  // isso acontece tambem com o setCounter, por ser imutável, preciso criar uma nova variável que define um novo valor para o Counter
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Incrementar 
      </button>
    </div>
  );
}
