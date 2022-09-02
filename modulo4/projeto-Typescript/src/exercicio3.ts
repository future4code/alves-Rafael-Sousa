enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const addMovie = (name:string, year:number, genre:string, score?: number) => {

   if(score == undefined) {
      return {nome: name, anoLancamento: year, genero: genre}
   } else if(score) {
      return {nome: name, anoLancamento: year, genero: genre,  pontuacao: score}
   }
}

console.log(addMovie('Pantera Negra',2021,GENERO.ACAO, 80))