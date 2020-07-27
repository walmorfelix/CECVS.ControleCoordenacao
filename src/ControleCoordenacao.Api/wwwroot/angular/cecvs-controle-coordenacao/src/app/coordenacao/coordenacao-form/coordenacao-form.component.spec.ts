import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoFormComponent } from './coordenacao-form.component';

describe('CoordenacaoFormComponent', () => {
  let component: CoordenacaoFormComponent;
  let fixture: ComponentFixture<CoordenacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
