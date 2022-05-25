export default class Servico {
    public nome!: string
    public preco!: number
    public tipo!: string
    private id!: number
    constructor(id: number, nome:string, tipo:string, preco:number){
        this.id = id
        this.nome = nome
        this.tipo = tipo
        this.preco = preco
    }
    public get getId(): number{
        return this.id
    }
}