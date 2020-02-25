export class Entity {
    constructor(name, health, race, img) {
     this.name = name;
     this.health = health;
     this.race = race;
     this.img = img;

    }


    getName() {
        return this.name;
    }

    getHealth() {
        return this.health;
    }

    getRace() {
        return this.race;
    }

    returnImgUrl() {
        if(this.name = "Monk") {
            return "background-image: graphics/characters/monk.jpg";
        }
    }
}