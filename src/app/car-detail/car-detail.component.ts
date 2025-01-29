
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardataService, Car } from '../cardata.service';



@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailComponent implements OnInit {
  carData!: Car; // Holds the selected car details
  avgPrice = 0;
  minPrice = 0;
  maxPrice = 0;
  priceDifference = 0;
  dealType = '';
  bidPrice: number = 1000; // Default bid
  message: string = '';
  constructor(
    private route: ActivatedRoute,
    private carService: CardataService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCarDetails(id);
  }

  loadCarDetails(id: number) {
    this.carService.getCarById(id).subscribe({
      next: (data) => {
        this.carData = data;
        this.calculatePriceDetails();
      },
      error: (error) => {
        console.error('Error fetching car details:', error);
      }
    });
  }

  calculatePriceDetails() {
    // Example logic; replace with actual pricing details if available
    this.minPrice = this.carData.price * 0.8; // 80% of the car price
    this.maxPrice = this.carData.price * 1.2; // 120% of the car price
    this.avgPrice = (this.minPrice + this.maxPrice) / 2; // Average price
    this.priceDifference = Math.abs(this.carData.price - this.avgPrice);
    this.dealType = this.carData.price < this.avgPrice ? 'Good Deal' : 'Bad Deal';
  }

  // Bid submission logic
  onBidChange(): void {
    const slider = document.querySelector('.bid-slider') as HTMLInputElement;
    const value = ((+slider.value - +slider.min) / (+slider.max - +slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #920000 0%, #920000 ${value}%, #000 ${value}%, #000 100%)`;
  }

  sendBid(): void {
    alert(`Hi, I would like to bid $${this.bidPrice} for this vehicle.\n\nMessage: ${this.message}`);
  }
}
