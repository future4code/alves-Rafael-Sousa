const operacao = process.argv[2]
const num1 =+process.argv[3]
const num2 =+process.argv[4]


switch(operacao) {
   case "add":
    console.log(`${num1 + num2}`)
   break; 
   case "sub":
    console.log(` resposta :${num1 - num2}`)
    break;
    case "mult":
        console.log(`${num1 * num2}`)
    break;
    case "div":
        console.log(`${num1 / num2}`)
    break;
    default:
        console.log("Erro na operação")
}