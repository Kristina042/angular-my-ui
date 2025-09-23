import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-button',
  imports: [],
  templateUrl: './test-button.html',
  styleUrl: './test-button.scss'
})
export class TestButton {
  @Input() label?: string = 'Click me';
  @Input() disabled?: boolean = false;
  @Input() type?: 'button' | 'submit' = 'button'

}
