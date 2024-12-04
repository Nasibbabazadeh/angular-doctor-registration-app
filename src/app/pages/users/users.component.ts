import { Component } from '@angular/core';
import { UserFormComponent } from '../../components/forms/user-form/user-form.component';
import { UserTableComponent } from "../../components/user-table/user-table.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserFormComponent, UserTableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
