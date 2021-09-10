interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
  propriedadeOpcional?: string;
};

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'noname'}</strong>
      <p>{props.repository?.description ?? 'nodescription'}</p>
      <a href={props.repository?.html_url ?? ''}>
        Acessar repositorio
      </a>
    </li>
  );
}