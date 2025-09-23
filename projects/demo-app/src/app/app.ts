import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'my-ui'
import { TestButton } from "./test-button/test-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, TestButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');
}
