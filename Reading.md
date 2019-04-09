\\\\\\\\TEST tasks\\\\\\\\\\Fizz-buzz\\\\\\\\\\\


Решение каждой задачи вынесено в отдельный файл js.
Для просмотра результатов необходимо открыть dotasks.html в браузере (console.log()).


*****     Задача #1     *****
Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, без учёта регистра.

\\  file: task1.js



*****     Задача #2     *****
Реализовать функцию checkSyntax(string), проверяющую на синтаксическую верность последовательность скобок. 
Задача не сводится к простой проверке сбалансированности скобок. Нужно еще учитывать их последовательность (вложенность).

\\ file: task2.js


*****     Задача #3     *****

Есть 2 сковороды для оладьев, каждая из которых вмещает ровно по 1 блинчику за 1 раз.
Есть 3 панкейка (блинчика), которые надо пожарить.
За 1 минуту жарится 1 сторона блинчика.
Блинчики надо обжарить с 2х сторон.
Итерацией считать процесс жарки 1й стороны 2х блинчиков на 2х сковородах. Сколько нужно времени (итераций) при оптимальном распределении чтобы пожарить 3 панкейка?

\\ Решение: file: task3.js

Итерации:

1. Обжариваем 1-ый и 2-ой блинчики на 2-х сковородах с одной стороны  -  1 минута;
2. 1-ый блинчик откаладываем в сторону, на его место кладем 3-ий блинчик, а 2-ой переворачиваем и жарим с другой стороны одновременно с 3-м - 1 минута;
3. 2-ой блинчик готов, убираем его со сковороды, на его место возвращаем 1-ый блинчик с необжаренной стороны, а 3-ий блинчик переворачиваем и жарим одновременно с 1-м - 1 минута.
Итого затратится 3 минуты на обжарку всех 3-х блинчиков.



*****     Задача №5      ******

function drawRating(vote) {
    if (vote >= 0 && vote <= 20) {
        return '★☆☆☆☆';
    }
    else if (vote > 20 && vote <= 40) {
        return '★★☆☆☆';
    }
    else if (vote > 40 && vote <= 60) {
        return '★★★☆☆';
    }
    else if (vote > 60 && vote <= 80) {
        return '★★★★☆';
    }
    else if (vote > 80 && vote <= 100) {
        return '★★★★★';
    }
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
Что можно улучшить? Как бы вы переписали функцию drawRating при условии что на вход функции drawRating должна приходить переменная vote, содержащая значение от 0 до 100.

\\ Решение: file: task5.js