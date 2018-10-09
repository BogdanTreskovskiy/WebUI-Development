/*
Проверить является ли число или его часть палиндромом. Например, число 1234437
не является палиндромом, но является палиндромом его часть 3443. Числа меньшие, чем
10 палиндромом не считать.
Входные параметры: число
Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.
 */

function isPalindrome(number) {
    var num = number + "";
    var numberReverse = num.split("").reverse().join('');
    console.log ("Ваш номер: " +numberReverse);
    if (isNaN(+numberReverse)) {
        console.log('Вы ввели не число');
        return numberReverse;
    }
    if (num === numberReverse) {
        console.log("Да, это палиндром");
    }
    else {
        console.log("Нет, это не палиндром");
    }
}

isPalindrome(123321);
isPalindrome(123456);
