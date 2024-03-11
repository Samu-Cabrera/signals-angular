import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUser, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl: string = 'https://reqres.in/api/users';
  private http = inject(HttpClient);

  getUserById(id: number): Observable<User>{
    const url: string = `${ this.baseUrl }/${ id }`;

    return this.http.get<any>(url).pipe(
      map(user => user.data),
      tap(res => console.log(res))
    );
  }

}
