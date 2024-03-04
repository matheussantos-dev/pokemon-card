import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { ManageDeckComponent } from './manage-deck/manage-deck.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeckDetailsComponent } from './deck-details/deck-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CreateDeckComponent,
    ManageDeckComponent,
    HomeComponent,
    DeckDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule 
  ]
})
export class PagesModule { }
