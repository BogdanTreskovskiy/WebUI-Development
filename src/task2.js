/*
2. Анализ конвертов
Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один
конверт вложить в другой. Программа должна обрабатывать ввод чисел с плавающей
точкой.
    Входные параметры: объекты конверт1 и конверт2
Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.
*/

function Envelope(height, width) {
    this.height = height;
    this.width = width;
}

function analysis(envelopeFirst, envelopeSecond) {
    var a, b, c, d;
    a = envelopeFirst.height;
    b = envelopeFirst.width;
    c = envelopeSecond.height;
    d = envelopeSecond.height;
    if ((((a < c) && (b < d)) || ((a < d) && (b < c))
        || ((c < a) && (d < b)) || ((c < b) && (d < a))) ||
    (a <= c && b <= d) || (a > c &&
        d >= (2 * a * b * c + (a * a - b * b) * Math.sqrt(a * a + b * b - c * c)) / (a * a + b * b))) {
        if((a === c) && (b === d )) {
            console.log('Конверты равны');
        } else {
            if((a > c) && (b > d)) {
                console.log('Можно вложить 2 в 1');
            } else {
                console.log('Можно вложить 1 в 2');
            }
        }
    } else {
        console.log('Нельзя вложить');
    }
}

var envelopeFirst = new Envelope(2, 2);
var envelopeSecond = new Envelope(5, 8);

analysis(envelopeFirst, envelopeSecond);