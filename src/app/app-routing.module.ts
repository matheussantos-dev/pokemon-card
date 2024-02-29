import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeckComponent } from 'src/pages/create-deck/create-deck.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ManageDeckComponent } from 'src/pages/manage-deck/manage-deck.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'create-deck', component: CreateDeckComponent },
  { path: 'manage-deck', component: ManageDeckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
