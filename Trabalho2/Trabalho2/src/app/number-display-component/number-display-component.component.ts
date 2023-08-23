import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent {
  public randomNumber: number[]=[];
constructor(private DataService:DataServiceService){

}
ngOnInit() {
  this.criarNumber();
}
  criarNumber(){
    this.DataService.getRamdomNumber();
    this.randomNumber=this.DataService.getResultado();
    console.log(this.randomNumber);
  }
}
