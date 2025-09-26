import { Component, EventEmitter, Input, Output } from '@angular/core';
import { colorsHex, UIcolors } from '../../utils/colors';

@Component({
  selector: 'lib-basic-switch',
  imports: [],
  templateUrl: './basic-switch.html',
  styleUrl: './basic-switch.scss'
})
export class BasicSwitch {
  @Input() color?: UIcolors = 'blue'
  @Output() isChecked = new EventEmitter<boolean>(false)
  checked = false

  onClick() {
    this.checked = !this.checked
    this.checked === true ? this.isChecked.emit(true) : this.isChecked.emit(false)
  }

  getStyle() {
    const color = colorsHex[this.color || 'blue']
    return {
      '--TRACK-COLOR': `${color}80`,
      '--THUMB-COLOR': `${color}`
    }
  }
}
