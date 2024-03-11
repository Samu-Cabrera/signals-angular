import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-property-page',
  standalone: true,
  imports: [],
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.css'
})
export class PropertyPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  //se ejecuta cada vez que la propedad con una signals cambia
  public userChangeEffect = effect(() => {
    console.log(this.user().first_name);
  });

  onFieldUpdate(field: keyof(User), value: string): void {

    //si se modifica 
    this.user.update(current => {
      switch(field){
        case 'email':  current.email = value; break;
        case 'first_name':  current.first_name = value; break;
        case 'last_name':  current.last_name = value; break;
      }

      return current; 
    });    

  } 

}
