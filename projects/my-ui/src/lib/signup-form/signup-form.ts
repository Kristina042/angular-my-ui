import { Component, EventEmitter, input, Output } from '@angular/core';
import { BasicInput } from '../basic-input/basic-input';
import { BasicButton } from '../basic-button/basicButton';
import { EmailValidator } from '../../utils/validators';
import { colorsHex, UIcolors } from '../../utils/colors';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-signup-form',
  imports: [BasicInput, BasicButton, ReactiveFormsModule, CommonModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss'
})
export class SignupForm {
  color = input<UIcolors>('blue')
  @Output() formSubmit =  new EventEmitter()
  form: FormGroup
  name:string = ''
  isNameValid: boolean = true


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, EmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  getStyle() {
    const color = colorsHex[this.color() || 'blue']
    return {
      '--light-color': `${color}33`,
      '--main-color': `${color}`
    }
  }

  get isNameInvalid() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }

  get isEmailInvalid() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }

  get isPasswordInvalid() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value)
  }
}
