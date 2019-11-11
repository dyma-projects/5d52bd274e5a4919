import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styles: []
})
export class Exercice4Component {

  public texts: Array< { data:string } > = [];

  constructor() {
    this.texts.push({ data: "un" });
    this.texts.push({ data: "deux" });
    this.texts.push({ data: "trois" });
  }

}
