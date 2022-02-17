import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

//https://api.github.com/users/uitalorss/repos

/*const repository = {
  name: "unform",
  description: "Thread para proteger os seus dados",
  link: "https://google.com"
}*/

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]); //IMPORTANTE: Sempre começar o estado com uma variável com o mesmo tipo de dado que eu quero armazenar.

  useEffect(() =>{
    fetch('https://api.github.com/users/uitalorss/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem repository={repository} />)}
      </ul>
    </section>
  );
}