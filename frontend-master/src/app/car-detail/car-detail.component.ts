import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carData: any;
  bidPrice: number = 1000; // Default bid
  message: string = '';

  // Deal Gauge variables
  price: number = 36977; // Example car price (actual price)
  avgPrice: number = 37707; // Average market price (estimated price)
  minPrice: number = 30000; // Minimum price in the range (widened range)
  maxPrice: number = 45000; // Maximum price in the range (widened range)
  priceDifference: number = this.avgPrice - this.price; // Price difference from avg
  dealType: string = this.price < this.avgPrice ? 'Good Deal' : (this.price === this.avgPrice ? 'Fair Deal' : 'Overpriced'); // Deal evaluation

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const carId = +this.route.snapshot.paramMap.get('id')!;
    // Mock data for car details
    this.carData = {
      id: carId,
      make: 'Ford',
      model: 'Transit-250 Base',
      year: 2023,
      price: 40997, // Fetched price from car data (actual price)
      mileage: 26173,
      location: 'New York, NY',
      imageUrl: 'fordtransit.png',
      description: 'A reliable and spacious van for business and family use.',
      condition: 'Certified Pre-Owned',
      features: [
        'Bluetooth®',
        'USB Port',
        'Tow Hooks',
        'Backup Camera',
        'Blind Spot Monitor',
        'Brake Assist'
      ],
      vin: '1FTBR2Y86PKA79404',
      dealerName: 'Ford Dealership',
      dealerContact: '800-123-4567',
      bidPrice: 1000, // Default bid
      message: '', // Default message
    
      // Adding specifications
      specifications: [
        { label: 'Exterior Color', value: 'Oxford White', color: '#ffffff', type: 'color' },
        { label: 'Interior Color', value: 'Gray', color: '#808080', type: 'color' },
        { label: 'Vehicle History & Recalls', value: 'View', icon: 'history', link: true },
        { label: 'Service History', value: 'View', icon: 'gear', link: true },
        { label: 'Engine', value: '3.5L V6 Cylinder Engine', icon: 'Engine' },
        { label: 'Transmission', value: 'Automatic', icon: 'transmission' },
        { label: 'Drive Type', value: 'Rear Wheel Drive', icon: 'drive' },
        { label: 'Body Style', value: 'Cargo Van', icon: 'body' },
        { label: 'Seat Count', value: '2', icon: 'seats' },
        { label: 'MPG', value: '15 CTY / 19 HWY', icon: 'fuel' },
        { label: 'VIN', value: '1FTBR2Y86PKA79404', icon: 'vin' },
        { label: 'Window Sticker', value: 'View', icon: 'sticker', link: true },
      ]
      
    };
    this.price = this.carData.price; // Dynamically setting the actual car price
    
  }

  onBidChange(): void {
    const slider = document.querySelector('.bid-slider') as HTMLInputElement;
    const value = ((+slider.value - +slider.min) / (+slider.max - +slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #920000 0%, #920000 ${value}%, #000 ${value}%, #000 100%)`;
  }

  sendBid(): void {
    alert(`Hi, I would like to bid $${this.carData.bidPrice} for this vehicle.\n\nMessage: ${this.carData.message}`);
  }
}
