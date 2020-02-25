import { Build } from "./build.js";

export class Logic {
    attack(card, bar, damage, btn) {

        let barWidth = bar.clientWidth;
        let currentHealth = card.clientWidth / barWidth * 100;
        let healthAfterAttack = currentHealth - damage;

        console.log("Current health " + currentHealth);
        console.log("Damage : " + damage);
        console.log("HealthAfterAttack : " + healthAfterAttack);

        if(healthAfterAttack <= 0) {

            card.style = "background-color: grey";
            btn.disabled = true;
        } else if(healthAfterAttack > 0) {



        card.style = "width: " + healthAfterAttack + "%";
        }
    }
}