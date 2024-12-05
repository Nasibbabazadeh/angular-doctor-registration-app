import { Component, OnInit } from '@angular/core';
import { TUser, TUserResponse } from '../../models/users';
import { UserService } from '../../services/user-service/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  loading: boolean = false
  users: TUser[] = []
  constructor(
    private readonly _userService: UserService
  ) {
    this.loading = true
  }
  ngOnInit(): void {
    this.fetchAllUsers()
  }


  fetchAllUsers(): void {
    this._userService.getAllUsers().subscribe({
      next: (value: TUserResponse) => {
        this.users = value.users
        this.loading = false
      },
    })
  }
  handleDelete(id: string | number) {
    this._userService.deleteUserById(id).subscribe({
      next(value) {
        console.log(value.isDeleted)
      },
    })
  }
}
