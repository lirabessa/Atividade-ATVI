import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListar todos os produtos`);
        this.produtos.forEach(produto =>{
            console.log(`Nome do produto: ` + produto.nome);
            console.log(`Descrição do produto: ` + produto.descricao);
            console.log(`ID do produto: ` + produto.getId);
            console.log(`Tipo do produto: ` + produto.tipo);
            console.log(`Preço do produto: ` + produto.preco);
            
            
            
                        
        })
        
    }
}