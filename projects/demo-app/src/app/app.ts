import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicButton } from 'my-ui'
import { BasicSwitch } from 'my-ui';
import { BasicInput } from 'my-ui';
import { SignupForm } from 'my-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicButton, BasicSwitch, BasicInput, SignupForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');

  log(isChecked: boolean) {
    console.log(isChecked)
  }
}
