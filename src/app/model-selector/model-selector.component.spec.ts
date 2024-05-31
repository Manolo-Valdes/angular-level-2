import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelectorComponent } from './model-selector.component';
import {  HttpClientTestingModule} from '@angular/common/http/testing';

describe('ModelSelectorComponent', () => {
  let component: ModelSelectorComponent;
  let fixture: ComponentFixture<ModelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ModelSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
