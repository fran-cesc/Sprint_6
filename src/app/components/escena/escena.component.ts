import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { textImageSentence } from 'src/app/interfaces/sprint.interfaces';
@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input() textToEscena: textImageSentence[] = [];
  public currentSentence: number = 0;

  public prev(): void{
    if (this.currentSentence > 0){
    this.currentSentence--;
    }
  }

  public next(): void{
    if (this.currentSentence < this.textToEscena.length-1){
    this.currentSentence++;
    }
  }
}
