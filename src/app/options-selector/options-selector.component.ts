import { Component, OnDestroy, OnInit, signal } from '@angular/core';
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
    return this.state.selectedConfig ? this.state.selectedConfig?.id: 0;
  }
  set selectedConfig(i:number)
  {
    if (this.state.selectedOption)
      {
        let conf = this.state.selectedOption.configs.find(c=> c.id === Number(i));
        this.state.selectedConfig = conf;
        this.currentCfg.set(conf);
      }
  }
  get currentOpt()
  {
    return this.state.selectedOption;
  }
  
  get towHitch():boolean
  {
    return this.state.selectedOption ? this.state.selectedOption?.towHitch : false;
  }
  set towHitch(value:boolean)
   {
    if (this.state.selectedOption)
        this.state.selectedOption.towHitch = value;
   }
  
  currentCfg = signal(this.state.selectedConfig)

  constructor(private tesla:TeslaCarService,private state: StateService){}
    private sub!: Subscription;
  ngOnInit(): void {
    this.sub = this.tesla.getModelOptions(this.state.selectedmodel()).subscribe(
      opt => {
        this.state.selectedOption = opt;
        if (this.state.selectedConfig===undefined)
          {
            this.selectedConfig=1;
          }
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
