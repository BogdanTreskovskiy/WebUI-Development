/*
7. Ряд Фибоначчи для диапазона
Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию
ограничению: находятся в указанном диапазоне, либо имеют указанную длину.
Входные параметры: объект context с полями min и max, либо с полем length
Выход: массив чисел
 */

function Fibonachi(min, max) {
    var start = 0;
    var next = 1;
    var array = [];
    while (Boolean(true)) {
        if (next >= min) {
            array.push(next);
        }
        var next2 = next;
        next = start + next;
        start = next2;
        if (next >= max) {
            return array;
        }
    }
}

console.log(Fibonachi(0, 1000));