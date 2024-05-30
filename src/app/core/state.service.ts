import { Injectable, Signal, computed, signal } from '@angular/core';
import { iTeslaConfig, iTeslaOption } from './models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  selectedColor=signal('');
  selectedmodel=signal('');
  selectedOption: iTeslaOption|undefined=undefined;
  selectedConfig: iTeslaConfig|undefined=undefined;


  private _stepTwoDone= signal(false);
  get stepTwoDone():Signal<boolean>
  {
    return this._stepTwoDone.asReadonly();
  }

  imageUrl = computed(()=> `https://interstate21.com/tesla-app/images/${this.selectedmodel()}/${this.selectedColor()}.jpg`)
  stepOneDone = computed(()=>this.selectedmodel() !=='' && this.selectedColor() !=='');

}
