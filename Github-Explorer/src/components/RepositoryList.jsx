import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
  name: "unform",
  description: "Thread para proteger os seus dados",
  link: "https://google.com"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}