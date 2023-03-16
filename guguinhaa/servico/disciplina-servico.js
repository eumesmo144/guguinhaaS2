class DisciplinaServico {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const disciplina = new Disciplina(nome, codigo);
        return this._repositorio.inserir(disciplina);
    }

    remover(codigo) {
        this._repositorio.remover(codigo);
    }

    listar() {
        return this._repositorio.listar();
    }

    buscarPorNome(codigo) {
        return this._repositorio.buscarPorNome(codigo);
    }
}
