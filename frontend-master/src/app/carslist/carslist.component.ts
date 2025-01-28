// car-listing.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carslist',
  imports: [CommonModule],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent {
  cars = [
    {
      id: 1,
      carMake: 'Ford',
      model: 'Transit-250 Base',
      year: 2023,
      price: 40997,
      mileage: 26173,
      location: 'New York, NY',
      imageUrl: 'fordtransit2.jpg',
      description: 'A reliable and spacious van for business and family use.',
      condition: 'Certified Pre-Owned',
      features: ['Bluetooth®', 'USB Port', 'Tow Hooks', 'Backup Camera', 'Blind Spot Monitor', 'Brake Assist'],
      vin: '1FTBR2Y86PKA79404',
      dealerName: 'Ford Dealership',
      dealerContact: '800-123-4567'
    },
    {
      id: 2,
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 35000,
      mileage: 15000,
      location: 'Los Angeles, CA',
      imageUrl: 'ford.jpg',
      description: 'A powerful truck for all your adventures.',
      contact: '987-654-3210',
    },
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/car-details', id]);
  }
}
