import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSelectorComponent } from './options-selector.component';
import {  HttpClientTestingModule} from '@angular/common/http/testing';

describe('OptionsSelectorComponent', () => {
  let component: OptionsSelectorComponent;
  let fixture: ComponentFixture<OptionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,OptionsSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
