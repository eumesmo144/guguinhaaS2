class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserido com sucesso!');
        } else {
            alert('Disciplina não inserida!');
        }
    }

    mostrarDisciplinaNoHTML(codigo, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigo} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.DisciplinaServico.remover(codigo);
    }

}