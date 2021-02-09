import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPesquisarComponent } from './button-pesquisar.component';

describe('ButtonPesquisarComponent', () => {
  let component: ButtonPesquisarComponent;
  let fixture: ComponentFixture<ButtonPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPesquisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
