export function RepositoryItem(props) {
  return(
    <li>
      <strong>{props.repository?.name ?? "Sem nome"}</strong>
      <p>{props.repository?.description ?? "Forms in React"}</p>
      <a href="https://google.com">
        Link
      </a>
    </li>
  );
}