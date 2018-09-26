import { Component, Output, EventEmitter } from '@angular/core';

import { Login } from './login.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})

export class AuthFormComponent {

  @Output() submitted: EventEmitter<Login> = new EventEmitter<Login>();

  onSubmit(value: Login) {
    this.submitted.emit(value);
  }

}
