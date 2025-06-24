// for (let i = 0; i <= 5; i++) {
//     console.log(`número ${i}`);
// }

// console.log('fim do loop');

// const marcasDeCarro = ['Honda', 'BYD', 'Toyota', 'Jeep'];

// const itensDoArray = marcasDeCarro.length;

// const frase = 'Samuel Santos';

// for (let i = 0; i < marcasDeCarro.length; i++) {
//     console.log(marcasDeCarro[i]);
// }


// const frutas = ['banana', 'morango', 'laranja', 'uva']

//     for (let i = 0; i < frutas.length; i++) {
//   if (frutas[i] === 'laranja') {
//     frutas[i] = 'maçã';
//   }
// }

// console.log(frutas);

const tenis = [
    {
        marca: 'Nike',
        modelo: 'Air Max',
        cor: 'Preto',
        tamanho: [42, 43, 44],
        preco: 499.99,
        estoque: 10
    },
    {
        marca: 'Adidas',
        modelos: 'Ultraboost',
        cor: 'branco',
        tamanho: [40, 41, 42],
        preco: 599.99,
        estoque: 5,
    },
    {
        marca: 'Puma',
        modelo: 'RS-X',
        cor: 'azul',
        tamanho: [39, 40, 42],
        preco: 399.99,
        estoque: 8,
    },
    {
        marca: 'Reebok',
        modelo: 'Classic',
        cor: 'cinza',
        tamanho: [38, 39, 40],
        preco: 299.99,
        estoque: 12,
    },

];


for (let i = 0; i < tenis.length; i++) {
  tenis[i].estoque - 1;
}

    for (let i = 0; i < tenis.length; i++) {
  if (tenis[i].marca === 'Reebok' && tenis[i].modelo === 'Classic') {
    tenis[i].preco = 399.99; 
  }
}

    for (let i = 0; i < tenis.length; i++) {
  if (tenis[i].marca === 'Puma' && tenis[i].modelo === 'RS-X') {
    tenis[i].preco = 299.99; 
  }
}

    for (let i = 0; i < tenis.length; i++) {
  if (tenis[i].marca === 'Nike' && tenis[i].modelo === 'Air Max'){
    tenis[i].tamanho[tenis[i].tamanho.length] = 45
  }
}

console.log(tenis);



     