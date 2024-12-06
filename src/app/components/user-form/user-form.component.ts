import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../../validators/sync/passwordStrength';
import matchPasswords from '../../validators/sync/matchPasswords';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user-service/user.service';
import { ToastrService } from 'ngx-toastr';
import { TUser } from '../../models/users';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  @Input({ required: true }) userData!: TUser
  createUserForm!: FormGroup
  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _toastr: ToastrService) {
    this.createUserForm = this._formBuilder.group({
      firstName: [this.userData ? this.userData.firstName : '', Validators.required],
      lastName: [this.userData ? this.userData.lastName : ''],
      age: [this.userData ? this.userData.age : ''],
      passwords: this._formBuilder.group({
        password: ['', [Validators.required, createPasswordStrengthValidator()]],
        repeatPassword: ['', [Validators.required, createPasswordStrengthValidator()]],
      }, { validators: [matchPasswords()] }),
      gender: [this.userData ? this.userData.gender : ''],
      email: [this.userData ? this.userData.email : ''],
      phone: [this.userData ? this.userData.phone : ''],
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
