import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StateService } from './core/state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, RouterLink, RouterLinkActive, NgIf ],
  styleUrl: "./app.component.scss",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = 'Angular';
  get stepTwoDone():boolean
  {
    return this.state.stepTwoDone();
  }
  get stepOneDone()
  {
   return this.state.stepOneDone();
  }
  get imageUrl()
  {
   return this.state.imageUrl;
  }
 constructor(private state: StateService){
  }

}
