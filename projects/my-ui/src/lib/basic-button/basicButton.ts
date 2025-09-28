import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { colorsHex } from '../../utils/colors';
import { UIcolors } from '../../utils/colors';

@Component({
  selector: 'lib-basic-button',
  imports: [CommonModule],
  templateUrl: './basicButton.html',
  standalone: true,
  styleUrls: ['./basicButton.scss']
})
export class BasicButton {
  @Input() label!: string;
  @Input() disabled?: boolean = false;
  @Input() type?: 'button' | 'submit' = 'button'
  @Input() variant?: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() color?: UIcolors = 'blue'
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() animated?: boolean = false

  getStyle() {
    const color = colorsHex[this.color || 'blue']
    const fontSize = this.mapFontSize(this.size)

    switch (this.variant) {
      case 'primary':
        return {
          '--bg-color': `${color}B2`,
          '--hover-bg-color': `${color}`,
          '--text-color': 'white',
          '--font-size': fontSize
        };
      case 'secondary':
        return {
          '--bg-color': 'transparent',
          '--hover-bg-color': 'transparent',
          '--border-color': color,
          '--hover-border-color': color,
          '--text-color': color,
          '--hover-text-color': color,
          '--font-size': fontSize
        };
      case 'danger':
        return {
          '--bg-color': `${color}B2`,
          '--hover-bg-color': `${color}`,
          '--text-color': 'white',
          '--font-size': fontSize
        };
      default:
        return {
          '--font-size': fontSize
        };
    }
  }

  private mapFontSize(size?: 'small' | 'medium' | 'large'): string {
    switch (size) {
      case 'small':
        return '0.8rem';
      case 'large':
        return '1.4rem';
      case 'medium':
      default:
        return '1rem';
    }
  }
}


