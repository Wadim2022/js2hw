var blacklist = [
  "aid",
   "aidar",
    "masha", 
    "lena", 
    "toly",
    "lika",
  ];
var names2 = prompt("Напишите имя")

do{
  if(blacklist.includes(names2)){
    names2 = prompt ("Введите другое имя")
  } else {
    alert(`Добро пожаловать ${names2}`)
    break;
  }
}while (true);

// console.error(`имя ${names[i]} есть в черном списке`);
