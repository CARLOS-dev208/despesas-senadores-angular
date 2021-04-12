import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeSenadoresComponent } from './lista-de-senadores.component';

describe('ListaDeSenadoresComponent', () => {
  let component: ListaDeSenadoresComponent;
  let fixture: ComponentFixture<ListaDeSenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeSenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeSenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
