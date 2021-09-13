export default function (number: number, index: number): [string, string] {
    return [
        ['agora mesmo', 'agora'],
        ['há %s segundos', 'em %s segundos'],
        ['há um minuto', 'em um minuto'],
        ['há %s minutos', 'em %s minutos'],
        ['há uma hora', 'em uma hora'],
        ['há %s horas', 'em %s horas'],
        ['%s dia', 'em um dia'],
        ['%s dias', 'em %s dias'],
        ['%s semana', 'em uma semana'],
        ['%s semanas', 'em %s semanas'],
        ['%s mês', 'em um mês'],
        ['%s meses', 'em %s meses'],
        ['%s ano', 'em um ano'],
        ['%s anos', 'em %s anos'],
    ][index] as [string, string];
}