const pessoas = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 4 }
];
const pessoasNotasMenores = notasMenoresQueSeis(pessoas);

function notasMenoresQueSeis(dados) {
    const pessoasFiltradas = dados.filter(pessoa => pessoa.nota < 6);
    return pessoasFiltradas;
  }
  
  console.log(pessoasNotasMenores);
  