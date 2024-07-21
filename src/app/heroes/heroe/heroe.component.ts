import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-hero',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string ="Ironman";
  public age: number=45;
  
  get capitalizeName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
   changeHero():void{
    this.name = 'Spiderman';
   }
   changeAge():void{
    this.age=30
   }
   
   resetFrom():void{
    this.name='ironman';
    this.age=45;
   }

}
