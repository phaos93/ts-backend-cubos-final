import { TUsuario, Usuario } from "./Usuario";

export class Professor extends Usuario {
    disciplina: string

    constructor(dados: TUsuario, disciplina: string) {
        super(dados);
        this.disciplina = disciplina;
    }

    private verificaLogin(): void {
        if (!this.logado) {
            throw new Error('Professor não autenticado');
        }
    }
}