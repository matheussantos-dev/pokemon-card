import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { ManageDeckComponent } from './manage-deck/manage-deck.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CreateDeckComponent,
    ManageDeckComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class PagesModule { }
