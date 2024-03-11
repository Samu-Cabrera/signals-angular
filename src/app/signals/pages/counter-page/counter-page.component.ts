import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent { 

  public counter = signal<number>(10); 

  //propiedad solo de lectura (computada)
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy(value: number){
    //actualizar el valor
    this.counter.update(counter => counter + value);
  }

  decrease(value: number){
    this.counter.update(counter => counter - value);
  }
}
