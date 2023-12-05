var nome = "Lucas"
var xp = 1000

if(xp <= 1000){
    var elo = 'Ferro'
} else if(xp <= 2000){
    var elo = 'Bronze'
} else if(xp <= 5000){
    var elo = 'Prata'
} else if(xp <= 7000){
    var elo = 'Ouro'
} else if(xp <= 8000){
    var elo = 'Platina'
}else if(xp <= 9000){
    var elo = 'Ascendente'
} else if(xp <=10000){
    var elo = 'Imortal'
}else{
    var elo = 'Radiante'
}

console.log(`O Herói de nome ${nome} está no nível de ${elo}`)

