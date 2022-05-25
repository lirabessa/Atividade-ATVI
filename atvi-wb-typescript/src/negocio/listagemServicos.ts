
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\n Listar todos os serviços`);
        this.servicos.forEach(servicos => {
            console.log(`Id do serviço: ` + servicos.getId);
            console.log(`Nome do produto: ` + servicos.nome);
            console.log(`Tipo do produto: ` + servicos.tipo);
            console.log(`Preço do serviço: ` + servicos.preco);
            
            
        })
        
    }


}