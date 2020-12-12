// Первое задание
let p = 1;
while (p < 51) {
    alert (p);
    p++;
}

let k = 35;
while (k > 7) {
    alert (k);
    k--;
}

// Второе задание
let y = 89;
while (y > 10) {
    document.write(y + '<br>');
    y--;
}

// Третье задание 
 function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
 }
 alert(sumTo(100));

// Четвертое задание 
let m = 1;
 while  (m < 6) {
    function sumTo(s) {
        let summ = 0;
        for (let f = 1; f <= s; f++) {
            summ += f;
        }
        return summ;
     }
     alert(sumTo(m));
    m++;
 }

// Пятое задание 
let w = 8;
while (w < 57) {
    document.write(w + '<br>');
    w += 2;
}

for (let q = 7; q < 57; q++) {
    if (q % 2 == 1) continue;
    document.write(q + '<br>');
}

// Шестое задание 
for (let e = 2; e <=10; e++) {
    for (let u = 2; u <=10; u++)
    document.write(u + ' * ' + e + ' = ' + (u * e) + '<br>');
}

// Седьмое задание 
let n = 1000,
    num = 0;
while (n > 50) {
    n = n / 2;
    num++;
}
document.write(n + '<br>' + num);

// Восьмое задание
let t,
    j = 0,
    v = 0,
    ar = 0;
while (true) {
    t = +prompt('Введите целое число', 0);
    if (t == "" || t == null || isNaN(t)) break;
    j += t;
    v++;
    ar = j / v;   
}
alert("Сумма всех чисел: " + j + " Среднее арифметическое: " + ar);


/*let k = +prompt('Задача 8' + '\n' + 'Введите число (в случае ввода 0 и пустой строки ввода закончится):'),
    sum2 = 0,
    mid = 0;
if ( k == +k && k != 0) {
    sum2 = +k;
    if ( k == +k) {
        for (let h = 1; (k == +k || k != 0); h++) {
            k = +prompt('Введите число (в случае ввода 0 и пустой строки ввода закончится):');
            sum2 += k,
            mid = sum2/h;
        }
    }
    if ( k == 0) {
        alert('Задача_8' + '\n' + 'Общая сумма: ' + sum2 + '\n' + 'среднее арифметическое: ' + mid);
    }
} else {
alert("ошибка ввода");
} - не мой код поэтому просто оставляю тут для себя*/

// Девятое задание
document.write ('Самое большое число: ' + Math.max(4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36, 8, 57) + '<br>');
document.write ('Самое маленькое число: ' + Math.min(4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36, 8, 57));

// Десятое задание

let L = prompt('Введите любое число');
    arr = L.split('');
    alert(arr);
    alert(arr.length);


    let result = arr.reduce(function(sum, current) {
        return sum + parseInt(current);
      }, 0);
      alert( result );

    L.reverse();

//     let arr.reduce(function(a, b) {
//         return a + b;
//     });

// function sumArr(array) {
//     // L.push(+L);
//     let sum = 0;
//     for (let s = 0; s < array.length; s++){  //(let number of L)
//         sum += array[s];
//     }
//     alert(sum);
//   }
//   sumArr(arr);
  











