import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styles: [`
    img {
      width: 150px;
    }

  `]
})

export class Exercice1Component implements OnInit {

    public linkHref: string = "https://Dyma.fr";
    public nomLienMystere: string = "Dyma";

    public imageSrc: string;
    public imageAlt: string;
    public bgColor: string = "lightskyblue";

    changeBgColor(color: string):void {
      this.bgColor = color;
    }

    constructor() {

      // IMAGE
      this.imageSrc = "https://s3-eu-west-1.amazonaws.com/tpd/logos/5c06a8399de74e0001ab5a48/0x0.png";
      this.imageAlt = "Dyma! C'est une plateforme qui te permet d'apprendre des langages fantastique avec une méthodologie que je trouve parfaite ;)";

    }

    ngOnInit() {

    }


}
