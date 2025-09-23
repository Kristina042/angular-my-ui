import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicButton } from 'my-ui'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');
}
