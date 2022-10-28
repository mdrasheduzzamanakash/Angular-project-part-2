import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgBooksComponent } from './prog-books.component';

describe('ProgBooksComponent', () => {
  let component: ProgBooksComponent;
  let fixture: ComponentFixture<ProgBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
