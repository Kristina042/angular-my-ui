import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Input() color?: 'pink' | 'blue' | 'green' | 'purple' | 'red' = 'blue'
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() animated?: boolean = false

  getVariantClass() {
    return this.variant
  }

  getStyle() {
    const colorsHex: Record<string, string> = {
      blue: '#007BFF',
      pink: '#da3bbf',
      green: '#36d43c',
      purple: '#5e1ff0',
      red: '#ff3f3f'
    };

    const color = colorsHex[this.color || 'blue']
    const fontSize = this.mapFontSize(this.size)

    switch (this.variant) {
      case 'primary':
        return {
          '--bg-color': `${color}80`,
          '--hover-bg-color': `${color}CC`,
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
          '--bg-color': `${color}80`,
          '--hover-bg-color': `${color}CC`,
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


