import { Component } from '@angular/core';
import { UserFormComponent } from '../../forms/user-form/user-form.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
