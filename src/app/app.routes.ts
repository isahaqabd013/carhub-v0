import { provideRouter, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { SellacarComponent } from './sellacar/sellacar.component';
import { ExplorecarsComponent } from './explorecars/explorecars.component';
import { BuyacarComponent } from './buyacar/buyacar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerbuyerdashboardComponent } from './sellerbuyerdashboard/sellerbuyerdashboard.component';
import { ServiceproviderComponent } from './serviceproveider/serviceprovider.component';
import { AddserviceproviderComponent } from './addserviceprovider/addserviceprovider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarslistComponent } from './carslist/carslist.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    {path:'homepage', component: HomepageComponent},
    {path:'registration', component: RegistrationComponent},
    {path:'signin', component: SigninComponent},
    {path:'sellacar', component: SellacarComponent},
    {path:'explorecars', component:ExplorecarsComponent},
    {path:'buyacar', component:BuyacarComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'sellerbuyerdashboard', component:SellerbuyerdashboardComponent},
    {path:'addserviceprovider', component:AddserviceproviderComponent},
    {path:'serviceprovider', component:ServiceproviderComponent},
    {path:'carslist', component:CarslistComponent},
    { path: 'car-details/:id', component: CarDetailComponent },
    {path:'sellerdashboard',component:SellerDashboardComponent},
    {path:'admindashboard',component:AdminDashboardComponent}
]
export const appRoutingProviders = [provideRouter(routes)];