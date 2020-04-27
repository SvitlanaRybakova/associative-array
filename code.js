var array = {};
var n = {
    "one": 12,
    "hello": "world",
    "prim": 2000,
    "double key": 777
};
// перезаписать переменную массива
n.one = 9000;
console.log(n["one"]);
console.log(n.one);
console.log(n["double key"]); // console.log(n.double key) - ОШИБКА!!!

//Хитрый финт ушами 
//По переменной temp считываем значание hello 
//а в массиве есть ключ hello,
//в результате будет вывод world
var temp = "hello";
console.log(n[temp]);

//вывести весь массив с потрохами ключ- значение
console.log(n);

printOutArray();
function printOutArray(){
//красиво вывести внутрь html
 var out = document.getElementById("printOut");

 for (var anyName in n){
     out.innerHTML += anyName + "----" + n[anyName] + "<br>";
    
 }
 out.innerHTML += "**************************<br>"
}

// добавить элементы в асоциативный массив
n["good"] = "morning";
printOutArray();
existKey();
//Проверить есть ли ключ в ассоциативном массиве можно так:
function existKey(){
if ("good" in n) {
    console.log("Ключ good есть в массиве!");
  } else {
    console.log("Ключ good нет в массиве!");
  }
}
// удалить элемент из массива
  delete n["good"];
  printOutArray();
  existKey();