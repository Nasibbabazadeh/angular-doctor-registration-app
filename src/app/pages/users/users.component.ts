import { Component } from '@angular/core';
import { UserTableComponent } from "../../components/user-table/user-table.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
