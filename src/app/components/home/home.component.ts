import { Component } from '@angular/core';
import { textImageSentence } from 'src/app/interfaces/sprint.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public storyTexts: textImageSentence[] = [
    {
      txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: "../../../assets/img/1.jpg"
    },
    {
      txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img: "../../../assets/img/2.jpg"
    },
    {
      txt: "L'heroi va decidir travessar la porta que el portava a casa",
      img: "../../../assets/img/3.jpg"
    },
    {
      txt: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      img: "../../../assets/img/4.jpg"
    }
  ]

  public start: boolean = false;
  public inici(): void{
    this.start = true;
  }
}
