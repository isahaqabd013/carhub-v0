import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorecars',
  imports: [],
  templateUrl: './explorecars.component.html',
  styleUrl: './explorecars.component.css'
})
export class ExplorecarsComponent {
  constructor(private router: Router) {}
  serviceprovider(){
    this.router.navigate(['/serviceprovider']);
  }
  homepage(){
    this.router.navigate(['/homepage']);
  }
  sellacar(){
    this.router.navigate(['/sellacar']);
  }

}
