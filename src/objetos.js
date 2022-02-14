//---------------------------------------------------------------------------------------
// Observações:
// Para todas funções que recebem listas, se o parâmetro não for uma lista ou se a lista
// for vazia, retorne undefined.
//
// Para todos os objetos das atividades, considere as seguintes estruturas:
//
// type Produto = {
//   nome: string,
//   categoria: string,
//   quantidade: number,
//   preco: number,
//   precoFormatado: string
// }
//
// type Categoria = {
//   nome: string,
//   desconto: number
// }
//
// type Cupom = {
//   texto: string,
//   desconto: number
// }
//---------------------------------------------------------------------------------------

const CATEGORIAS = [
  { nome: "Alimentação", desconto: 30 },
  { nome: "Infantil", desconto: 15 },
];
const CUPONS_VALIDOS = ["NULABSSA", "ALURANU"];

// =========
// Essencial
// =========

function listaValida(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return undefined;
  } else {
    return true;
  }
}

// Crie uma função que recebe uma lista de produtos e devolve o produto com o menor preço
function obterMenorPreco(produtos) {
  if (listaValida(produtos)) {
    const listaPrecos = produtos.map((produto) => produto.preco);
    produtos[listaPrecos.indexOf(Math.min(...listaPrecos))];
  }
}

// Crie uma função que recebe uma lista de produtos e devolve o produto com o maior preço
function obterMaiorPreco(produtos) {
  if (listaValida(produtos)) {
    const listaPrecos = produtos.map((produto) => produto.preco);
    produtos[listaPrecos.indexOf(Math.max(...listaPrecos))];
  }
}

// Crie uma função que receba um produto e retorna uma cópia deste produto incluindo uma nova proprieade
// chamada 'precoFormatado' com o valor formatado em Reais
function formatarValor(valor) {
  return "R$" + valor.toFixed(2);
}

function incluirPrecoFormatado(produto) {
  this.produto = produto;
  produto.precoFormatado = formatarValor(produto.preco);
  return produto;
}

// Crie uma função que recebe o nome de uma categoria e devolve o desconto associado a esta categoria,
// ou 0 se não houver desconto.
// Utilize as listas que já estão na função para implementar seu código.
function obterDescontoCategoria(nomeCategoria) {
  let flag = 0;
  CATEGORIAS.forEach((categoria) => {
    if (categoria.nome === nomeCategoria) {
      flag = categoria.desconto;
    }
  });
  return flag;
}

// Crie uma função que recebe uma lista de produtos e um valor máximo de orçamento
// e retorna uma lista com os produtos com preços menores ou iguais ao valor do orçamento informado
function obterProdutosLimitadosAoOrcamento(produtos, precoMaximo) {
  if (listaValida(produtos)) {
    const novaLista = produtos.filter((produto) => {
      if (produto.preco <= precoMaximo) {
        return true;
      }
    });
    return novaLista;
  }
}

// Crie uma função que recebe uma lista de produtos de uma compra,
// onde cada produto tem também o seu preço e quantidade, retorne o valor total da compra
function calcularTotalDaCompra(produtos) {
  if (listaValida(produtos)) {
    let total = 0;
    produtos.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total;
  }
}

// =========
// Desejável
// =========

// Crie uma função que recebe uma lista produtos e retorna um objeto com duas propriedades: 'menorPreco' e 'maiorPreco'.
// estas propriedades devem conter como o produto mais barato e o produto mais caro, respectivamente
function obterMenorEMaiorPrecos(produtos) {
  if (listaValida(produtos)) {
    let menorEMaiorPreco = {};
    menorEMaiorPreco.menorPreco = obterMenorPreco(produtos);
    menorEMaiorPreco.maiorPreco = obterMaiorPreco(produtos);
    return menorEMaiorPreco;
  }
}

// Crie uma função que recebe uma lista de produtos, um valor inferior e um valor superior de orçamento e
// retorna uma lista de produtos dentro do orçamento.
// Valide se o orçamento está correto, ou seja, se o menor valor é igual ou inferior ao maior valor, caso contrário, retorne undefined.
function obterProdutosDentroDoOrcamento(produtos, menorValor, maiorValor) {
  if (listaValida(produtos)) {
    if (menorValor <= maiorValor) {
      const dentroDoOrcamento = produtos.filter((produto) => {
        if (produto.preco >= menorValor && produto.preco <= maiorValor) {
          return true;
        }
      });
      return dentroDoOrcamento;
    } else {
      return undefined;
    }
  }
}

// Crie uma função que recebe um nome de uma categoria e um objeto cupom e retorna o desconto total,
// que é a soma do desconto da categoria e a soma do desconto do cupom
// Utilize a função obterDescontoCategoria criada anteriormente
function cupomEhValido(cupom) {
  if (cupom.texto === "ALURANU") {
    return cupom.desconto;
  } else if (cupom.texto === "NULABSSA") {
    return cupom.desconto;
  } else {
    return 0;
  }
}

function obterDescontoTotal(categoria, cupom) {
  const descontoTotal =
    obterDescontoCategoria(categoria) + cupomEhValido(cupom);
  return descontoTotal;
}

// Crie uma função que recebe uma lista de produtos e um cupom de desconto.
// A função deve retornar o valor total da compra, considerando os descontos de cada categoria e o cupom informado
function calcularTotalDaCompraComDescontos(produtos, cupom) {}

// =======
// Desafio
// =======

// Crie uma classe chamada CarrinhoDeCompras
// O carrinho de compras deve ter as seguintes funcionalidades:
// - incluirProduto - função recebe um produto e o inclui na lista de produtos
// - excluirProduto - função recebe um índice e remove o produto naquele índice
// - listarProdutos - função lista os produtos já incluídos
// - definirCupom - função recebe um cupom e o armazena
// - obterCupom - função retorna o cupom armazenado
// - excluirCupom - função exclui o cupom armazenado
// - subtotal - função calcula o subtotal da compra - dica: utilizar função calcularTotalDaCompra definida anteriormente;
// - total - função calcula o total da compra com descontos - dica: utilizar função calcularTotalDaCompraComDescontos definida anteriormente;

class CarrinhoDeCompras {}

module.exports = {
  obterMenorPreco,
  obterMaiorPreco,
  incluirPrecoFormatado,
  obterDescontoCategoria,
  obterProdutosLimitadosAoOrcamento,
  calcularTotalDaCompra,
  obterMenorEMaiorPrecos,
  obterProdutosDentroDoOrcamento,
  obterDescontoTotal,
  calcularTotalDaCompraComDescontos,
  CarrinhoDeCompras,
};
