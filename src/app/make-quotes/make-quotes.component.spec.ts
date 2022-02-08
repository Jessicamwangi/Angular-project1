import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeQuotesComponent } from './make-quotes.component';

describe('MakeQuotesComponent', () => {
  let component: MakeQuotesComponent;
  let fixture: ComponentFixture<MakeQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
