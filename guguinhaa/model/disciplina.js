class Disciplina {
    constructor(nome, codigo) {
        this._nome = nome;
        this._codigo = codigo;
        this._alunos = [];
    }
    getNome() {
        return this._nome;
    }

    setNome(novoNome) {
        this._nome = novoNome;
    }
    getCodigo() {
        return this._codigo;
    }
    setCodigo(novoCodigo){
        this._codigo = novoCodigo;
    }
    getAlunos(){
        return this._alunos;
    }
}