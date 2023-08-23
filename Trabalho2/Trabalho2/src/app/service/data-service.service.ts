import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public array:number[]=[];
  constructor() { }
  
  getResultado(): number[] {
    return this.array;
  }
  setArray(resultado: number): void {
    this.array.push(resultado);
  }

  getRamdomNumber(){
    const resultado: number = Math.floor(Math.random() *100)+1;
    this.setArray(resultado);
    return resultado;
  }
  
}
