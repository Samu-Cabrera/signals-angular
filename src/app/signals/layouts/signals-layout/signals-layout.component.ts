import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'signals-layout',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css'
})
export class SignalsLayoutComponent {

  public menuItems = signal<MenuItem[]>([
    { name: 'user', route: 'user' },
    { name: 'counter', route: 'counter' }
  ]);

  
}
