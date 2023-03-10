interface RepositoryItemProps{
    repository:{
        name: string;
        description:string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Repositorio Padrão'}</strong>
            <p>{props.repository?.description}</p>
            <a href="{props.repository?.html_url}">Acesso ao repositorio do Raphael</a>
        </li>
    )
}