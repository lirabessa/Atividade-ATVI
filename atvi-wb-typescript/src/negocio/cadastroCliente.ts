import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";


export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        
        let valorRg = this.entrada.receberTexto(`Por favor infome seu RG: `)
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
        let partesRG = dataRg.split('/')
        let anoRg = new Number(partesRG[2].valueOf()).valueOf()
        let mesRg = new Number(partesRG[1].valueOf()).valueOf()
        let diaRg = new Number(partesRG[0].valueOf()).valueOf()

        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do cliente: `)
        let tel = this.entrada.receberTexto(`Por favor informe Telefone do cliente: `)

        let email = this.entrada.receberTexto(`Por favor informe seu Email: `)
        
        
        
        
        // RG e data de emissão
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rg = new RG (valorRg, dataEmissaoRg)

        // CPF, data de emissão
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        //Telefone
        let telCompleto = new Telefone (ddd, tel)

        //informações cliente nome nome Social cpd e email
        let cliente = new Cliente(nome, nomeSocial, cpf, email);

        cliente.getTelefones.push(telCompleto)
        cliente.getRgs.push(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}