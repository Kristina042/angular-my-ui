import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  standalone: true,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input() label?: string = 'Click me';
  @Input() disabled?: boolean = false;
  @Input() type?: 'button' | 'submit' = 'button'
  @Input() variant?: 'primary' | 'secondary' | 'danger' = 'primary';
}
