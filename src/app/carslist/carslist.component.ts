import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Car, CardataService } from '../cardata.service'; // Ensure correct import path

@Component({
  selector: 'app-carslist',
  standalone: true, // This is important for standalone components
  imports: [CommonModule],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  cars: Car[] = [ // This should work correctly now
    {
      id: 1,
      registrationNumber: 'ABC123',
      ownerName: 'John Doe',
      carMake: 'Ford',
      carModel: 'F-150',
      variant: 'XLT',
      year: 2020,
      price: 35000,
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A reliable truck with great features.',
      mileage: 25000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      bodyType: 'Truck',
      engineCapacity: 3.5,
      fuelEfficiency: 15,
      emissions: 250,
      availability: 'Available',
      location: 'New York',
    }
  ];

  loading: boolean = false;
  error: boolean = false;

  constructor(
    private router: Router,
    private carService: CardataService
  ) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.loading = true;
    this.error = false;

    // Simulate fetching from the backend (Uncomment the code below when backend is available)
    this.carService.getCars().subscribe({
      next: (data) => {
        this.cars = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
        this.error = true;
        this.loading = false;
      }
    });
}
viewDetails(id: number) {
  this.router.navigate(['/car-details', id]);
}
}

