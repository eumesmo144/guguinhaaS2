class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }
    pesquisar(codigo) {
        return this._disciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorNome() {
        return this._disciplinas.filter(disciplina => disciplina.nome === nome);
    }
}
