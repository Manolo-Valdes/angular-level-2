import { Component, OnDestroy, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import {  iTeslaCar, iTeslaColor } from '../core/models';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { TeslaCarService } from '../core/tesla-car.service';
import { Observable, Subscription, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { StateService } from '../core/state.service';

@Component({
  selector: 'app-model-selector',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf, AsyncPipe],
  templateUrl: './model-selector.component.html',
  styleUrl: './model-selector.component.scss'
})
export class ModelSelectorComponent implements OnInit {

  modelColors:iTeslaColor[]| undefined;

  get selectedmodel(): string
  {
    return this.state.selectedmodel();
  }
  set selectedmodel(value: string){
    this.state.selectedmodel.set(value);
    this.updateColors(value);
   }

   get selectedColor()
   {
    return this.state.selectedColor();
   }
   set selectedColor(value: string)
   {
    this.state.selectedColor.set(value);
   }

   get stepOneDone()
   {
    return this.state.stepOneDone();
   }

   get imageUrl()
   {
    return this.state.imageUrl;
   }
    
  models!:Observable<iTeslaCar[]>;

  constructor(private teslaService:TeslaCarService , private state:StateService){ }

  ngOnInit(): void {
    this.models = this.teslaService.getModels().pipe(
      tap(value =>{
        if (this.selectedmodel==='')
          {
            this.selectedmodel=(value[0].code);
          }
          this.updateColors(this.selectedmodel);
      } )
    );
  }
 
  
  private updateColors(value:string)
  {
    this.modelColors = this.teslaService.getModel(value)?.colors;
    if (this.modelColors?.find(c=> c.code === this.selectedColor) === undefined)
      {
        this.selectedColor = '';
      }
  }
}