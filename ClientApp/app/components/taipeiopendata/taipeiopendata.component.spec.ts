import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaipeiopendataComponent } from './taipeiopendata.component';

describe('TaipeiopendataComponent', () => {
  let component: TaipeiopendataComponent;
  let fixture: ComponentFixture<TaipeiopendataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaipeiopendataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaipeiopendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
