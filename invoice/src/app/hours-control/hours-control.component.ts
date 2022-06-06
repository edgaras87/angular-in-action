import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HoursValidator } from 'app/validators/hours.validator';

@Component({
  selector: 'app-hours-control',
  templateUrl: './hours-control.component.html',
  styleUrls: ['./hours-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HoursControlComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => HoursControlComponent),
    multi: true
  }]
})
export class HoursControlComponent implements ControlValueAccessor {

  hours: number = 0;
  validationFn = HoursValidator;
  onChange = (v: any) => {};

  update() {
    this.onChange(this.hours);
  }

  keypress($event) {
    if($event.key === 'ArrowUp') {
      this.setValue(.25);
    } else if ($event.key === 'ArrowDown'){
      this.setValue(-.25);
    }

  }

  setValue(change: number) {
    this.hours += change;
    this.update();
  }

  validate(control: FormControl) {
    return this.validationFn(control);
  }

  writeValue(value: any): void {
    if(value !== undefined) {
      this.hours = value;
    }
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }



}
