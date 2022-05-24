import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super( ) //perguntar o que é isso ?
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInicio do cadastro de produtos`);

        let id = this.entrada.receberNumero(`Por favor informe o ID do produto: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `)

        //construtor
        let produto = new Produto (id,nome, descricao ,tipo, preco)
        this.produtos.push(produto)        

    }

}