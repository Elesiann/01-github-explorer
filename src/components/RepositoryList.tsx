import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  // useState é um Hook que te permite adicionar o state do React a um componente de função
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // useEffect dispara quando algo acontecer na aplicação (uma variável que muda, por exemplo)
  // qual funçao executar () => {}, quando quero executar []
  // CUIDADO PARA NAO DEIXAR SEM O SEGUNDO PARAMETRO, VAI ENTRAR EM LOOP AAAAAAAAAAAAAAAAAAAAAAAA
  useEffect(() => {
    fetch("https://api.github.com/users/Elesiann/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, [repositories]);

  // .map() percorre cada um dos reps e pra cada um ele retorna alguma coisa
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
