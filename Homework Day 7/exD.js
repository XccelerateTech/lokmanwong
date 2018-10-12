

//blue print Class (monster name , health)
class Monster {
	constructor(name , health){
		this.name = name;
		this.health = health;

//blue print (monster damage)
}
	wound(damage) {
		    this.health = this.health - damage;
        console.log(this.health)

//condition : monster die if health <0
if (this.health <= 0 ) {
      console.log("monser died")
    }
		}
	 
}

//creating monster
var newMonster = new Monster ("Big",100);


//creating hero funtion : gen random number of damage 
function hero (){
  	var damage = Math.floor(Math.random(damage) * (20 - 5 + 1)) + 5;

  newMonster.wound(damage);

}


while (newMonster.health >0){
  hero(newMonster)
}
//using while loop
