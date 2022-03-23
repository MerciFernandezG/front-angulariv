import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './elementor/header/header.component';
import { LoginComponent } from './elementor/login/login.component';
import { OlvpsswComponent } from './elementor/olvpssw/olvpssw.component';
import { PricingComponent } from './elementor/pricing/pricing.component';
import { RegisterComponent } from './elementor/register/register.component';

const routes: Routes = [
  { path :'header', component: HeaderComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'olvpssw', component: OlvpsswComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
