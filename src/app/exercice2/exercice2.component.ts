import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {

  // Définition de ma propriété
  public messageMystere: string;

  // Définition de ma méthode
  showMessageMystere(event: Event): void {
    let data = this.messageMystere = "je suis le message mystère affiché dans la console";
    let bonus = " grâce à l'évènement : " + event.type;
    console.log(data + bonus);
  }

}
