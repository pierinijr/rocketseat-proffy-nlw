const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Eduação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}