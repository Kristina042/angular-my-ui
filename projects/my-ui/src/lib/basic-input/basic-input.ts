import { Component, Input } from '@angular/core';
import { colorsHex, UIcolors } from '../../utils/colors';

@Component({
  selector: 'lib-basic-input',
  imports: [],
  templateUrl: './basic-input.html',
  styleUrl: './basic-input.scss'
})
export class BasicInput {
  @Input() color: UIcolors = 'blue'
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';

  getStyle() {
    const color = colorsHex[this.color || 'blue']
    const fontSize = this.mapFontSize(this.size)

    return {
      '--main-color': `${color}`,
      '--bg-color': `${color}80`,
      '--light-color': `${color}4D`,
      '--font-size': fontSize
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
