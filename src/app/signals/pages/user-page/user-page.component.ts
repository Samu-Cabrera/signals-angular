import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  private userService = inject(UserService);
  public userId = signal<number>(1);
  public userFound = signal<boolean>(true);
  public currentUser = signal<User | undefined>(undefined);


  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number){
    if(id <= 0) return;

    //asignar el valor
    this.userId.set(id);

    this.currentUser.set(undefined);

    //hace la injeccion
    this.userService.getUserById(id).subscribe(user => {
      this.currentUser.set(user);
    })
  }


}
