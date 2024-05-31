import { Component, OnDestroy, OnInit, Signal, computed, signal } from '@angular/core';
import { TeslaCarService } from '../core/tesla-car.service';
import { StateService } from '../core/state.service';
import { Observable, Subscription, tap } from 'rxjs';
import { iTeslaConfig, iTeslaOption } from '../core/models';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-options-selector',
  standalone: true,
  imports: [FormsModule, NgIf,NgFor, AsyncPipe],
  templateUrl: './options-selector.component.html',
  styleUrl: './options-selector.component.scss'
})
export class OptionsSelectorComponent implements OnInit, OnDestroy {

  get selectedConfig():number
  {
    return this.state.selectedConfig();
  }
  set selectedConfig(i:number)
  {
    this.state.selectedConfig.set(Number(i));
  }
  get currentOpt():iTeslaOption|undefined
  {
    return this.state.selectedOption;
  }
  
  
  get includeTow():boolean
  {
    return this.state.includeTow;
  }
  set includeTow(value:boolean)
   {
        this.state.includeTow = value;
   }
  
   get includeYoke():boolean
   {
     return this.state.includeYoke;
   }
   set includeYoke(value:boolean)
    {
         this.state.includeYoke = value;
    }

    currentCfg:Signal<iTeslaConfig|undefined> = computed(()=>{
      const cfgId = this.state.selectedConfig();
      return this.state.selectedOption?.configs.find(c=> c.id === cfgId);
    } )

  constructor(private tesla:TeslaCarService,private state: StateService){}
    private sub!: Subscription;
  ngOnInit(): void {
    this.sub = this.tesla.getModelOptions(this.state.selectedmodel()).subscribe(
      opt => {
        this.state.selectedOption = opt;
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
