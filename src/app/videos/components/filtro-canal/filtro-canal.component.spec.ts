import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCanalComponent } from './filtro-canal.component';

describe('FiltroCanalComponent', () => {
  let component: FiltroCanalComponent;
  let fixture: ComponentFixture<FiltroCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
