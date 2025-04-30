// const alunos = ['leo','douglas','ana']

// const pessoa = {
//     nome: 'julio',
//     idade: 28,
//     genero: 'masculino',

// }
// }
// const produtos = [
//     {
//     id: 1 ,
//     img: 'linkdaimagem',
//     descricao: 'descricaoprod',
//     nomeprod: 'nomeproduto',
//     categoria: 'categoriadoprod',
//     preco: 'valordoprod',
//     desconto : 'true'
// },
//     {
//     id: 2 ,
//     img: 'linkdaimagem',
//     descricao: 'descricaoprod',
//     nomeprod: 'nomeproduto',
//     categoria: 'categoriadoprod',
//     preco: 'valordoprod',
//     desconto : 'true'
// },
//     {
//     id: 3 ,
//     img: 'linkdaimagem',
//     descricao: 'descricaoprod',
//     nomeprod: 'nomeproduto',
//     categoria: 'categoriadoprod',
//     preco: 'valordoprod',
//     desconto : 'true'
// },
//     {
//     id: 4 ,
//     img: 'linkdaimagem',
//     descricao: 'descricaoprod',
//     nomeprod: 'nomeproduto',
//     categoria: 'categoriadoprod',
//     preco: 'valordoprod',
//     desconto : 'true'
// },
// ]

// console.log(produtos[0].id)

// exercicio 1

// const livro = {
//     titulo:'1984',
//     autor: 'george orwell',
//     ano: 1999,
// }

// livro.editora = "panini"
// livro.ano = 2023
// console.log(livro.autor)
// console.log(livro.titulo)
// console.log(livro)

//exercicio 2
// const alunos = [
//   { nome: "João", nota: 8 },
//   { nome: "Maria", nota: 9 },
//   { nome: "Pedro", nota: 7 },
// ];
// for (let i = 0; i < alunos.length; i++) {
//   console.log(alunos[i].nome);
// }

//exercicio 3

//  const produtos = [
//     { nome: "Camiseta", preco: 30 },
//     { nome: "Calça", preco: 80 },
//     { nome: "Boné", preco: 20 }
//     ];

//     function somaT(objetos) {
//         let adicao = 0
//         for (let i = 0; i < objetos.length; i++) {
//            adicao += objetos[i].preco
//         }
//         return adicao
//     }
//     console.log(somaT(produtos))
//

const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 80 },
  { nome: "Boné", preco: 20 },
];
function reduzirEstoque(array, itemVendido) {
    for (let i = 0; i < array.length; i++) {
        if (itemVendido === array[i].nome && array[i].estoque > 0) {
            for (let e = array[i]; e < 1; e--) {
                array[i].estoque--
                console.log(`você fez uma venda, estoque tem ${array[i].nome} possui ${array[i].estoque} itens`)
                
            }
        }
        
    }
}
reduzirEstoque(produtos, 'camiseta')
