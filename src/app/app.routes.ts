import { Router, Routes } from '@angular/router';
import { ModelSelectorComponent } from './model-selector/model-selector.component';
import { OptionsSelectorComponent } from './options-selector/options-selector.component';
import { SummaryComponent } from './summary/summary.component';
import { inject } from '@angular/core';
import { StateService } from './core/state.service';

export const routes: Routes = [
    {
        path:'',
        component:ModelSelectorComponent
    },{
        path:'step2',
        component:OptionsSelectorComponent,
        canActivate:[()=> inject(StateService).stepOneDone( ) || inject(Router).createUrlTree(['/'])]
    },{
        path:'step3',
        component:SummaryComponent,
        canActivate:[()=> inject(StateService).stepOneDone( ) || inject(Router).createUrlTree(['/'])]
    }
];
