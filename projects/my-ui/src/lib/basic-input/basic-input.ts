import { Component, EventEmitter, forwardRef, input, Output } from '@angular/core';
import { colorsHex, UIcolors } from '../../utils/colors';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-basic-input',
  imports: [CommonModule],
  templateUrl: './basic-input.html',
  styleUrl: './basic-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInput),
      multi: true,
    },
  ],
})
export class BasicInput implements ControlValueAccessor {
  // keep inputs for styling / extra config
  color = input<UIcolors>('blue');
  type = input<string>('text');
  placeholder = input<string>('');
  readonly = input<boolean>(false);
  size = input<'small' | 'medium' | 'large'>('medium');
  isValid = input<boolean>(true);
  minlength = input<number>(1);
  maxlength = input<number>(100);

  disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  // --- ControlValueAccessor ---
  innerValue = '';

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.innerValue = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; // ✅ normal property now
  }

  // --- Component logic ---
  onBlur() {
    this.onTouched();
  }

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.innerValue = val;
    this.onChange(val);         // notify Angular forms
    this.valueChange.emit(val); // still works with [(value)]
  }

  getStyle() {
    const color = colorsHex[this.color() || 'blue'];
    const fontSize = this.mapFontSize(this.size());

    return {
      '--main-color': `${color}`,
      '--bg-color': `${color}80`,
      '--light-color': `${color}4D`,
      '--font-size': fontSize,
    };
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
