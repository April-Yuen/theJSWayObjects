class Dog{
    constructor(name, species, size){
        this.name = name
        this.species = species
        this.size = size
    }
    bark(){
        if (this.size > 60){
            return "Grrr! Grrr!"
        }else{
            return "Woof! Woof!"
        }
    }
}

const fang = new Dog ("Fang", "boarhound", 75);
console.log(fang);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(snowy);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`)
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//////////////////////////////////////////////////////////////////////////////////////

class Character {
    constructor(name, health, strength, gold, key){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;// XP is always zero for new characters
        this.gold = gold;
        this.key = key;
    }
    // Attack a target
    attack(target){
        if(this.health > 0){
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points.`
            )
            target.health -= damage;
            if (target.health > 0){
                console.log(`${target.name} has ${target.health} health points left`)
            }else {
                target.health = 0;
                const bonusXP = 10
                this.gold += target.gold 
                this.key += target.key
                console.log(
                    `${this.name} elimiated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s).`
                );
                this.xp += bonusXP;
            }
        }else{
            console.log(`${this.name} can't attack(they've been eliminated)`)
        }
    }
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s).`
    }
}

const aurora = new Character("Aurora", 150, 25, 10, 1)
console.log(aurora)
console.log(aurora.describe());

const glacius = new Character("Glacius", 130, 30, 10, 1)
console.log(glacius)
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20, 10, 1)
console.log(monster);
console.log(monster.describe());

monster.attack(aurora)
console.log(aurora.describe());
monster.attack(glacius);
console.log(glacius.describe());
aurora.attack(monster);
glacius.attack(monster);
console.log(aurora.describe());
console.log(glacius.describe());

///////////////////////////////////////////////////////////////////////////////////////

class BankAccount{
    constructor(name){
        this.name = name
        this.balance = 0
    }
    credit(value){
        this.balance = this.balance + value
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}
const sean = new BankAccount("Sean")
console.log(sean);
console.log(sean.describe())
console.log(sean.credit(1000));
console.log(sean.describe());

const accountList = [new BankAccount("Sean"), new BankAccount("Brad"), new BankAccount("Georges")]
console.log(accountList);
console.log(accountList[2]);
accountList.forEach(item => {
    item.credit(+(1000))
    console.log(item.describe());
})