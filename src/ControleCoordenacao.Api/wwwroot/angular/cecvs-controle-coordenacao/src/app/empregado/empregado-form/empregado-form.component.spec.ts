import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoFormComponent } from './empregado-form.component';

describe('EmpregadoFormComponent', () => {
  let component: EmpregadoFormComponent;
  let fixture: ComponentFixture<EmpregadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
