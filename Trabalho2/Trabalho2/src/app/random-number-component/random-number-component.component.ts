import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {
  constructor(private DataService:DataServiceService){
  
  }
  public sendMessage:boolean =false;
  Message(){
    this.DataService.getRamdomNumber();
    console.log(this.DataService.getResultado());
  }
}
