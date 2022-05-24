import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de emissão do CPF : ` + cliente.getCpf.getDataEmissao);
            console.log(`Telefone: (` + cliente.getTelefones[0].getDdd + `)` + cliente.getTelefones[0].getNumero)
            console.log(`RG: ` + cliente.getRgs[0].getValor);
            console.log(`Data de emissão do RG : ` + cliente.getRgs[0].getDataEmissao);
            console.log(`Email: ` + cliente.getEmail);
            
            
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}