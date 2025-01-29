import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyacar',
  imports: [CommonModule],
  templateUrl: './buyacar.component.html',
  styleUrl: './buyacar.component.css'
})
export class BuyacarComponent {
  constructor(private router: Router) {}  
  
  homepage(){
    this.router.navigate(['/homepage']);
  }
  sellacar(){
    this.router.navigate(['sellacar']);
  }
  Serviceprovider(){
    this.router.navigate(['/sellerbuyerdashboard']);
  }
  
}
