import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DeckDetailsComponent } from 'src/app/pages/deck-details/deck-details.component';
import { CreateDeckComponent } from './pages/create-deck/create-deck.component';
import { ManageDeckComponent } from './pages/manage-deck/manage-deck.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'create-deck', component: CreateDeckComponent },
  { path: 'create-deck/:id', component: CreateDeckComponent },
  { path: 'manage-deck', component: ManageDeckComponent },
  { path: 'deck-details/:id', component: DeckDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
