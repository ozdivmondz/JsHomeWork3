// С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let prime = [ 2 ],
    num = 2;
while ( num <= 100) {
    let check_num = 1;
    for ( let i = 0; i < prime.length; i++) {
        if ( num % prime[ i ] === 0) {
            check_num = 0;
        }
    }
    if ( check_num === 1 ) {
        prime.push( num );
    }
    num++;
}
console.log ( prime );

//2. С помощью цикла do…while написать функцию для вывода чисел от 0 до 10

var i = 0;
do {
    if ( i % 2 !== 0 ) {
        console.log( i + ' — нечетное число');
    }
    else if ( i !== 0 && i % 2 === 0 ) {
        console.log( i + ' — четное число');
    }
    else {
        console.log( i + ' — это ноль');
    }
    i++;
} while ( i < 11 );

//3.Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так: for(…){// здесь пусто} 

for ( var i = 0; i < 10; console.log(i++) ) {}

//Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx


var x = '\nx';
for ( var i = 20; i--; ) {
    console.log( x );
    x = x + 'x';
}