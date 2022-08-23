/*var soma = function (num1=1, num2=2) {
    return num1 + num2
  }
  console.log(`A soma dos números é: ` + soma(2,3))*/

  /*var double = num1 => num1 + num2 //arrow function (não pode ser usadodentro do objeto)

  console.log(`A soma dos números é: ` + soma(2,3))*/

  //Paradigma funcional
  let numbers = [1,4,9]; //vetor
  //let roots = numbers.map(Math.sqrt) //map faz um novo array e recebe o parametro 
 


  //console.log(numbers.map(Math.sqrt)); //map faz um novo array e recebe o parametro 

  //console.log(`Raiz: ${roots}`);

  /*let double = numbers.map(function (num) {return num * 2}) //map faz um novo array e recebe o parametro 
  console.log(`Dobro: ${double}`);*/

  let double = numbers.map(num => num * 2) //arrow function
  console.log(`Dobro: ${double}`);

