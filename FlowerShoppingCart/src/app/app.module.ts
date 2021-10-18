import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersComponent } from './flowers/flowers.component';
import { ItemsComponent } from './items/items.component';
import { CartsComponent } from './carts/carts.component';
import { FormsModule } from '@angular/forms';
import { FlowersServiceService } from './services/flower.service';

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent,
    ItemsComponent,
    CartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FlowersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
