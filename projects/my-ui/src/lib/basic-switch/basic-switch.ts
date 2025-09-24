import { Component, Input } from '@angular/core';
import { colorsHex, UIcolors } from '../../utils/colors';

@Component({
  selector: 'lib-basic-switch',
  imports: [],
  templateUrl: './basic-switch.html',
  styleUrl: './basic-switch.scss'
})
export class BasicSwitch {
  @Input() color?: UIcolors = 'blue'

  getStyle() {
    const color = colorsHex[this.color || 'blue']
    return {
      '--TRACK-COLOR': `${color}80`,
      '--THUMB-COLOR': `${color}`
    }
  }
}
