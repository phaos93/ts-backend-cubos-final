import { Aluno } from "./Aluno";
import { Professor } from "./Professor"

const joao = {
    nome: 'João',
    email: 'joao@email.com',
    senha: '123456'
}

const maria = {
    nome: 'Maria',
    email: 'maria@email.com',
    senha: '123456'
}

const ana = {
    nome: 'Ana',
    email: 'ana@email.com',
    senha: '123456'
}

const professoraMaria = new Professor(maria, 'História');
const alunoJoao = new Aluno(joao);
const alunaAna = new Aluno(ana);

professoraMaria.login('123456');
professoraMaria.lancarNota(alunoJoao, 8)
professoraMaria.lancarNota(alunoJoao, 10)

console.log(alunoJoao.obterMedia());