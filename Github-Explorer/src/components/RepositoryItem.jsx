export function RepositoryItem(props) {
  return(
    <li>
      <strong>{props.repository.name}</strong>
      
      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}