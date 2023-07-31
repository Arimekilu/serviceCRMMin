import {Component, DoCheck, Input, QueryList} from '@angular/core';
import {_MatOptionBase, MatOptgroup, MatOption} from "@angular/material/core";
import {BooleanInput} from "@angular/cdk/coercion";
import * as i0 from "@angular/core";
import {map, Observable, startWith} from "rxjs";
import {_MatAutocompleteBase, MatAutocomplete} from "@angular/material/autocomplete";
import {CarSelector} from "../cars";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.scss']
})
export class SelectModelComponent {

  // myControl = new FormControl('');
  // models?: string[]
  // filteredModels: Observable<string[] | undefined>;
  // brand?: CarSelector
  //
  // constructor() {
  //   this.filteredModels = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filterModel(value || '')),
  //   );
  //   // this.options = this.models
  //   this.models?.subscribe(res => this.options = res)
  // }
  //
  // private _filterModel(value: string): string[] | undefined {
  //   const filterValue = value.toLowerCase();
  //   return this.models?.filter(option => option.toLowerCase().includes(filterValue));
  // }


}
