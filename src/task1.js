/*
1. Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
* * * * * *
 * * * * * *
* * * * * *
 * * * * * *
Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
 */

function createChess(a, b, symbol) {
    var value = symbol || "*";
    var odd = "";
    var even = " ";
    var space = " ";
    for (var i = 1; i <= b; i++) {
        if ((i % 2) !== 0) {
            for (var j = 0; j < a; j++) {
                odd += value + space;
            }
            console.log(odd);
            odd = "";
        } else {
            for (var k = 0; k < a; k++) {
                even += value + space;
            }
            console.log(even);
            even = " ";
        }
    }
}

createChess(8, 8, "*");