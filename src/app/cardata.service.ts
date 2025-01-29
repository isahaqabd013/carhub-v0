import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Car {
 
  id : number;
  registrationNumber: string;
  ownerName: string;
  
  carMake: string;
  carModel: string;
  variant: string;
  year: number;
  price: number;
  imageUrl: string;
  description: string;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  engineCapacity: number;
  fuelEfficiency: number;
  emissions: number;
  availability: string;
  location: string;
}

@Injectable({
  providedIn: 'root', // Provide this service globally
})
export class CardataService {
  private cars: Car[] = [
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
    },
    {
      id: 2,
      registrationNumber: 'XYZ789',
      ownerName: 'Jane Smith',
      carMake: 'Toyota',
      carModel: 'Corolla',
      variant: 'LE',
      year: 2019,
      price: 20000,
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A fuel-efficient sedan with a comfortable ride.',
      mileage: 30000,
      fuelType: 'Gasoline',
      transmission: 'CVT',
      bodyType: 'Sedan',
      engineCapacity: 1.8,
      fuelEfficiency: 30,
      emissions: 150,
      availability: 'Available',
      location: 'Los Angeles',
    }
  ];

  getCars(): Observable<Car[]> {
    return of(this.cars); // Simulating an API call
  }

  getCarById(id: number): Observable<Car | undefined> {
    const car = this.cars.find(c => c.id === id);
    return of(car);
  }
  private apiUrl = 'http://localhost:8080/api/cars'; // Your API URL

  constructor(private http: HttpClient) {}

  // Fetch all cars
/*  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl); // GET request to fetch cars
  }

  // Fetch a specific car by ID
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`); // GET request for specific car
  } */

  // Add a new car
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car); // POST request to add car
  }

  // Update an existing car
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car); // PUT request to update car
  }

  // Delete a car
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // DELETE request to remove car
  }

}
