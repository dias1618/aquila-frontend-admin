import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCadastrarComponent } from './button-cadastrar.component';

describe('ButtonCadastrarComponent', () => {
  let component: ButtonCadastrarComponent;
  let fixture: ComponentFixture<ButtonCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
