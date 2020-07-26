import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoListaComponent } from './empregado-lista.component';

describe('EmpregadoListaComponent', () => {
  let component: EmpregadoListaComponent;
  let fixture: ComponentFixture<EmpregadoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
