const tabelaItems = document.getElementById("tabela-produtos");

function productCard ()  {
    

const produtos = [
    
  {
    img: "https://thaka.bing.com/th/id/OIF.Xkt1Dk9k9t6IyC9aXGjwjg?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    nome: "camiseta",
    preco: 49.9,
    frete: true,
  },

  {
    img: "https://www.bing.com/th?id=OPHS.bnLS1QkL8lHmoQ474C474&o=5&pid=21.1&w=160&h=199&qlt=100&dpr=1,3&pcl=f5f5f5",
    nome: "Tênis",
    preco: 119.9,
    frete: true,
  },

  {
    img: "https://thaka.bing.com/th/id/OIF.Xkt1Dk9k9t6IyC9aXGjwjg?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    nome: "calça jeans",
    desc: "calça jeans bocs de sino",
    preco: 49.9,
    frete: true,
  },
];

tabelaItems.innerHTML = produtos.map((produto, index) => {
    const indice = index +1
    return `<tr key= ${index} class="border-t border-gray-200 hover:bg-gray-50">
  <td>
    <img
      class="w-20 p-2"
      src=" ${produto.img}"
      alt=" ${produto.desc}"
    />
  </td>
  <td>${indice} ${produto.nome}</td>
  <td>${produto.preco.toFixed(2)}</td>
  ${produto.frete ? '<td class="text-green-600 font font-medium">Sim</td>' : '<td class="text-green-600 font font-medium">Não</td>'}

</tr>
`
}).join("")
}