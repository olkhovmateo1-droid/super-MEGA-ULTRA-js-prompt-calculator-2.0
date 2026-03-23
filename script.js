const mode = prompt("хотите писать текстом? (да/нет)").toLowerCase().trim();

if (mode === "да") {
    const a = +prompt("первое чилсо");
    const op = prompt("введите операцию словами:").toLowerCase().trim();
    const b = +prompt("введите второе число");


    switch (op) {
        case "умножить":
            console.log(a * b);
            break;
        case "делить":
            console.log(a/b);
            break;
        case "сложить":
            console.log(a + b);
            break;
        case "вычесть":
            console.log(a - b);
            break;
    }
} else {

    const a = +prompt("первое число:");
    const op = prompt("введите знак (=, -, /,*):");
    const b = prompt("введите второе число");



    switch (op) {
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a/b)
            break;
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;    
    }
}



