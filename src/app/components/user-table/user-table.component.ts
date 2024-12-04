import { Component, OnInit } from '@angular/core';
import { TUser, TUserResponse } from '../../models/users';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  users: TUser[] = []
  constructor(
    private readonly _userService: UserService
  ) { }
  ngOnInit(): void {
    this.fetchAllUsers()
    console.log(this.users)
  }


  fetchAllUsers(): void {
    this._userService.getAllUsers().subscribe({
      next: (value: TUserResponse) => {
        this.users = value.users
      },
    })
  }
}
