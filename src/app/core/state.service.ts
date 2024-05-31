import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { iTeslaConfig, iTeslaOption } from './models';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  selectedColor:WritableSignal<string>=signal('');
  selectedmodel:WritableSignal<string>=signal('');
  selectedOption: iTeslaOption|undefined=undefined;
  selectedConfig:WritableSignal<number>=signal(0);
  includeTow:boolean=false;
  includeYoke:boolean=false;

  imageUrl = computed(()=> `https://interstate21.com/tesla-app/images/${this.selectedmodel()}/${this.selectedColor()}.jpg`)
  stepOneDone = computed(()=>this.selectedmodel() !=='' && this.selectedColor() !=='');
  stepTwoDone = computed(()=> this.stepOneDone() &&  this.selectedConfig() > 0);

}
