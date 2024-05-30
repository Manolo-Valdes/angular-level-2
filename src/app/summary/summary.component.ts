import { Component, OnInit } from '@angular/core';
import { StateService } from '../core/state.service';
import { TeslaCarService } from '../core/tesla-car.service';
import { iTeslaColor, iTeslaConfig } from '../core/models';
import { f } from 'msw/lib/core/RequestHandler-50ddea0c';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf,CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

 modelName:string='';
 color:iTeslaColor|undefined;
 config:iTeslaConfig|undefined;
 total:number=0;
 includeTow:boolean=false;
 includeYoke:boolean=false;

  constructor(private state: StateService, private tesla:TeslaCarService) {}
  
  ngOnInit(): void {
    const model = this.tesla.getModel(this.state.selectedmodel())
    if (model)
      {
        this.modelName = model.description;
        if (this.state.selectedOption)
          {
            this.config = this.state.selectedOption.configs.find(c=> c.id === this.state.selectedConfig());
            if (this.config)
              this.total+=this.config.price;
          }
        this.color = model.colors.find((c) => c.code === this.state.selectedColor())
        if (this.color)
          this.total+=this.color.price;
        
        if(this.state.includeTow)
          {
            this.includeTow = true;
            this.total+=1000.
          }

          if(this.state.includeYoke)
            {
              this.includeYoke = true;
              this.total+=1000.
            }
        }
  }
}
