import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/F3RREIRA/DW2A4/tree/main/Atividades/6A"
}

export function RepositoryList(){
    return(
        <> 
        <RepositoryItem repository={repository}/>
        <Counter />
        </>
    )
}