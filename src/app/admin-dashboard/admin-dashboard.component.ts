import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  totalInventory = 50;
  carsSoldThisMonth = 12;
  revenueGenerated = '$250,000';
  customerSatisfaction = '4.8/5';

  // Sample inventory data
  inventory = [
    { model: 'Model S', year: 2019, mileage: '25,000 mi', price: '$45,000', status: 'Available' },
    { model: 'Model 3', year: 2020, mileage: '15,000 mi', price: '$35,000', status: 'Sold' },
    { model: 'Model X', year: 2018, mileage: '30,000 mi', price: '$50,000', status: 'Pending' },
  ];

  // Sample customer data
  customers = [
    { name: 'John Doe', contact: 'john@example.com', carPurchased: 'Model 3', date: '2023-10-01' },
    { name: 'Jane Smith', contact: 'jane@example.com', carPurchased: 'Model S', date: '2023-09-25' },
  ];
}
