import {Component, DoCheck} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, of, startWith} from "rxjs";
import {cars, CarSelector} from "./cars";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent  {
  cars: CarSelector[]
  myControl = new FormControl('');
  optionsMarks: string[] = []
  filteredOptions: Observable<string[]>;
  selectedBrand: any;

  constructor() {
    this.cars = cars
    this.cars.forEach(carSelector =>this.optionsMarks.push(carSelector.brand))
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsMarks.filter(option => option.toLowerCase().includes(filterValue));
  }
}
