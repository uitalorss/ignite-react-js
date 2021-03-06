import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

//https://api.github.com/users/uitalorss/repos

/*const repository = {
  name: "unform",
  description: "Thread para proteger os seus dados",
  link: "https://google.com"
}*/

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); //IMPORTANTE: Sempre começar o estado com uma variável com o mesmo tipo de dado que eu quero armazenar.

  useEffect(() =>{
    fetch('https://api.github.com/users/uitalorss/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  );
}