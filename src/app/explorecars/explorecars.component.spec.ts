import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorecarsComponent } from './explorecars.component';

describe('ExplorecarsComponent', () => {
  let component: ExplorecarsComponent;
  let fixture: ComponentFixture<ExplorecarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorecarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
