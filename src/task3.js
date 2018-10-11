/*
3. Сортировка треугольников
Вывести треугольники в порядке убывания их площади.

Входные параметры: массив объектов треугольник
Выход: упорядоченный массив имён треугольников
Примечание:
• Расчёт площади треугольника должен производится по формуле Герона.
• Каждый треугольник определяется именами вершин и длинами его сторон.
• Приложение должно обрабатывать ввод чисел с плавающей точкой:
{
    vertices: ‘ABC’,
    a: 10,
    b: 20,
    c: 22.36
}
 */

var result = [];

function Triangle(name, side1, side2, side3) {
    this.name = name;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.getSquare = function() {

        if ((this.side1 > 0) && (this.side2 > 0) && (this.side3 > 0) && (((this.side1 + this.side2) > this.side3)
            && (this.side2 + this.side3 > this.side1) && (this.side1 + this.side3 > this.side2))) {
            var p = (this.side1 + this.side2 + this.side3) * 0.5;
            var s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
            result.push(this);
            this.s = s;
            return s;
        } else {
            console.log("Получить площадь не удалось for " + this.name);
        }
    }
}

var triangleOne = new Triangle('ABC', 19, 11, 15);
var triangleTwo = new Triangle('DEF', 8, 7, 10);
var triangleThree = new Triangle('GHI', 22.3, 11, 15);
var triangleFour = new Triangle('JKL', 3.5, 5.7, 8);

var array = [triangleOne, triangleTwo, triangleThree, triangleFour];

for (var t of array) {
    t.getSquare();
}

array.sort(function(b, a) {
    return a.s - b.s
})

for (var t of result) {
    console.log(t.name, t.s)
}

/*
function Triangle(name, side1, side2, side3) {
    this.name = name;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.getSquare = function() {
        if ((this.side1 > 0) && (this.side2 > 0) && (this.side3 > 0) && (((this.side1 + this.side2) > this.side3)
            && (this.side2 + this.side3 > this.side1) && (this.side1 + this.side3 > this.side2))) {
            var p = (this.side1 + this.side2 + this.side3) * 0.5;
            var s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
            return s;
        } else {
            console.log("Получить площадь не удалось.");
        }
    }
}

var triangleOne = new Triangle('ABC', 4, 5, 7.5);
var triangleTwo = new Triangle('DEF', 22.3, 11, 15);
var triangleThree = new Triangle('GHI', 13, 13.7, 10);

var array = [triangleOne, triangleTwo, triangleThree];
array.sort(function(b, a) {
    return a.getSquare() - b.getSquare()
})

for (let t of array) {
    console.log(t.name, t.getSquare())
}*/
