import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-test';
  users=[
    {
      "name":"kishore",
      "age":22,
      "city":"Bangalore"
    },
    {
      "name":"vishal",
      "age":21,
      "city":"chennai"
    },
    {
      "name":"naveen",
      "age":30,
      "city":"delhi"
    }
  ]

  constructor(private userService: UserService){}
}
