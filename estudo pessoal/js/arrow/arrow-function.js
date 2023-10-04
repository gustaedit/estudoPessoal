//Arrow fuction

/* (a,b)=>{
    return a + b;
}

(a,b) => a+b; */

let a = 5;
let b = 10;

let c = (num1,num2) => num1+num2;

console.log(c(a,b));

let d = (x,y) => {
    let op;

    if(x > 5) {
        op = x * y;
    }else{
        op = x/y;
    }
    return op;
}

console.log(d(a,b));

// um argumento so
let frase = "sou um otimo motorista"

let fraseArrey = frase => frase.split(' ');

console.log(fraseArrey(frase));

//sem arg
let semArg = () => console.log ("nao tenho argumentos");

semArg();

//casos de uso
let roupas = [
    {produto:'camisa', preco: 25, cor: 'amarelo'},
    {produto:'calça', preco: 80, cor: 'azul'},
    {produto:'jaqueta', preco: 100, cor: 'preto'},
    {produto:'camiseta', preco: 15, cor: 'rosa'},
    {produto:'bermuda', preco: 20, cor: 'azul'},
];

let precoMaiorQue50 = roupas.filter((roupa)=>{
    return roupa.preco >= 50;
});

console.log(precoMaiorQue50);

// tempo

setTimeout(()=> {
    console.log("deu tempo!");
},150);

/* setTimeout(function() {
    console.log("deu tempo!");
},150); */

//nao usar arrow

/* let pessoa = {
    nome: "gustavo",
    dizNome:() => {
        console.log(this.nome);
        console.log(this);
    }
} */

/* let pessoa = {
    nome: "gustavo",
    dizNome:function() {
        console.log(this.nome);
        console.log(this);
    } */
    let pessoa = {
        nome: "gustavo",
        dizNome() {
            console.log(this.nome);
            console.log(this);
        }
}

pessoa.sayName();

// mudar classe do BTN

let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', function() {
    this.classList.toggle('classe');
});

