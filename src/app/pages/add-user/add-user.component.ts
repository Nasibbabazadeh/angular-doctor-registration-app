import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../../validators/sync/passwordStrength';
import matchPasswords from '../../validators/sync/matchPasswords';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user-service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  createUserForm!: FormGroup
  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _toastr: ToastrService) {
    this.createUserForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      age: [''],
      passwords: this._formBuilder.group({
        password: ['', [Validators.required, createPasswordStrengthValidator()]],
        repeatPassword: ['', [Validators.required, createPasswordStrengthValidator()]],
      }, { validators: [matchPasswords()] }),
      gender: [''],
      email: [''],
      phone: [''],
    })
  }
  onSubmit() {
    this.addUser()
    this.createUserForm.reset()
  }
  addUser() {
    this._userService.createUser(this.createUserForm.value).subscribe((response) => response && this._toastr.success('User created successfully!'))
  }
}
