/*undefined,boolean,object in JS*/

/*
let raqam =45;              /!* number (barcha sonlar)*!/
let text = "JavaScrip";     /!* string (barcha so'zlar) *!/
let soz;
let rost = false;            /!* boolean*!/
let arrayObject = [45,78,"matn","text",true,false]; /!*Object*!/
let oddiyObject = {ism: "Shodmon" , familiya: "Tursunov" , yoshi: 35}

console.log(oddiyObject);*/

/* function in JS */


function savatchaniTekshir(uzatilganMalumot =[12,78]){
    if (uzatilganMalumot.length == 0){
        document.write("Savatchaning ichida" + uzatilganMalumot.length + "ta ma'lumot bor!")
    }
    else{
        document.write("Savatchaning ichida " +uzatilganMalumot.length+ "dona ma'lumot bor!")
    }
}
let container = [12,true,false];
savatchaniTekshir(container);
