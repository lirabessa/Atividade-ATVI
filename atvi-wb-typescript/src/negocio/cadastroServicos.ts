import Entrada from "../io/entrada"
import Cadastro from "./cadastro"
import Servico from "../modelo/servico"

export default class CadastroServico extends Cadastro {
    private servicos:  Array<Servico>
    private entrada: Entrada
    constructor(servicos:Array <Servico>){
        super()
        this.servicos = servicos 
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`\nInicio do cadastro do Serviço`);

        let id = this.entrada.receberNumero(`Por favor informe o ID do produto`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do seu produto: `)
        let tipo = this.entrada.receberTexto(`Por favor o tipo do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        

        let servico = new Servico (id, nome, tipo,preco)
    }

}