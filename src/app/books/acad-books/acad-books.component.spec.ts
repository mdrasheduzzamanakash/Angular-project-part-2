import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadBooksComponent } from './acad-books.component';

describe('AcadBooksComponent', () => {
  let component: AcadBooksComponent;
  let fixture: ComponentFixture<AcadBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
