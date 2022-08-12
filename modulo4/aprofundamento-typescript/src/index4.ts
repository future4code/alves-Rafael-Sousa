type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, 
// para transpilar(converter) esse arquivo typescript em um arquivo javascript?

//abria o terminal e digitaria o comando tsc para transformar o arquivo TS para JS


// c) E se este arquivo estivesse dentro de uma pasta chamada src. 
// O processo seria diferente? Se sim, descreva as diferenças.

// o processo seria o mesmo porém se estivesse em uma pasta src os arquivos seriam transportados
// para a pasta build automaticamente. e assim sucessivamente.


// d) Existe alguma maneira de transpilar 
// múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

//sim existe é só usar o comando (tsc) dentro da pasta src sem atribuir um arquivo no final do comando
// dessa forma os aquivos serão atualizados todos de uma vez
