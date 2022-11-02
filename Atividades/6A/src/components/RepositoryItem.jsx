export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository?.name ?? 'Repositório Padão'}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.link}>Acesso ao Repositório</a>
        </li>
    )
}