import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');

  log(isChecked: boolean) {
    console.log(isChecked)
  }

  onFormSubmit(form: any) {
    console.log(form)
  }
}
