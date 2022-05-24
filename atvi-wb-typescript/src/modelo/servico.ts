export default class Servico {
    public nome!: string
    public preco!: number
    public tipo!: string
    private id!: number
    constructor(nome:string, id: number, tipo:string, preco:number){
        this.nome = nome
        this.id = id
        this.tipo = tipo
        this.preco = preco
    }
    public get getId(): number{
        return this.id
    }
}