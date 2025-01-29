import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerbuyerdashboardComponent } from './sellerbuyerdashboard.component';

describe('SellerbuyerdashboardComponent', () => {
  let component: SellerbuyerdashboardComponent;
  let fixture: ComponentFixture<SellerbuyerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerbuyerdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerbuyerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
