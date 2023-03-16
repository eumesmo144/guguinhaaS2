class AlunoServico {
    constructor() {
        this._repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade) {
        const aluno = new Aluno(nome, idade);
        if (aluno.idade >= 18) {
            return this._repositorio.inserir(aluno);
        }
        // é menor de idade. Deveria devolver erro
        return undefined;
    }

    remover(nome) {
        this._repositorio.remover(nome);
    }

    listar() {
        return this._repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
}
