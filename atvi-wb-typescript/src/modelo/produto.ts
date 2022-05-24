export default class Produto {
    private id!: number
    public nome!: string
    public descricao!: string
    public tipo!: string
    public preco!: number
    constructor(id: number, nome:string, descricao:string, tipo:string, preco:number){
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
    }
    public get getId(): number{
        return this.id
    }

}