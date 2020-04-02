import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PoductDetailsComponent } from './poduct-details/poduct-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellDetailsComponent } from './sellDetails/sellDetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product-details', component: PoductDetailsComponent },
  { path: 'sell-details', component: SellDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }