import {Entity} from "./entity.js";
import {Logic} from "./logic.js";

export class Build {

    constructor(numOfEn) {
    this.field = [];
    this.numOfEn = numOfEn;
    this.entites = [];
    this.cards = [];
    this.gameField = document.getElementById("gameField");
    this.logic = new Logic();




        //Creating entity objects
        this.monk = new Entity("Monk",100,"Human");
        this.demon = new Entity("Devil",80,"Demon");
        this.mage = new Entity("Mage",200, "Wizard");

        //Adding created entities to array
        this.entites.push(this.monk,this.demon,this.mage);
    }







    createEnemies() {
        for(let i = 0; i <= this.numOfEn-1; i++) {
            let card = document.createElement("div");
            let cardInfo = document.createElement("div");
            let cardTopBar = document.createElement("div");
            let cardTopBarHp = document.createElement("div");






            //Configuring card element
            card.className = "card";
            cardInfo.className="cardInfo";


            //Configuring health bar element
            cardTopBar.className="cardTopBar";
            cardTopBarHp.className="cardTopBarHp";
            cardTopBarHp.id="cardTopBarHp"+i;

            //Creating attack buttons for each card
            let atckBtn = document.createElement("button");
            atckBtn.addEventListener("click",() => {
                this.logic.attack(cardTopBarHp, cardTopBar, 5, atckBtn);
            });
            atckBtn.innerText = "ATTACK";
            atckBtn.className = "atckBtn";

            card.appendChild(atckBtn);




            //Adding cards to the field.
            card.appendChild(cardInfo);
            card.appendChild(cardTopBar);
            cardTopBar.appendChild(cardTopBarHp);
            this.gameField.appendChild(card);
            this.cards.push(card);

        }
    }

    fillInfo() {
        let cardInfo = [];

        let slctInfo = document.getElementsByClassName("cardInfo");

        for(let i = 0; i<=slctInfo.length; i++) {
            let rnEntityNum = Math.floor(Math.random() * 3);
            let rnNumForArray = rnEntityNum;


            let rnEntity = this.entites[rnEntityNum];

            let nameElement=document.createElement("p");
            let healthElement=document.createElement("p");
            let raceElement=document.createElement("p");
            i++;


            nameElement.className = "entityName";
            nameElement.id="entityName"+i;
            nameElement.innerText = "Name : " + rnEntity.getName();


            //Health element

            healthElement.className = "entityHealth";
            healthElement.id="entityHealth"+i;
            healthElement.innerText = "Health : " + this.entites[rnEntityNum].getHealth();

            //Race element

            raceElement.className = "entityRace";
            raceElement.id="entityRace"+i;
            raceElement.innerText = "Race : "+ this.entites[rnEntityNum].getRace();



            i--;
            this.cards[i].className = "card " + rnEntity.getName();
            slctInfo.item(i).appendChild(nameElement);

            slctInfo.item(i).appendChild(healthElement);
            slctInfo.item(i).appendChild(raceElement);

        }


    }
}