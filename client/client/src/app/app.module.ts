import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { CartComponent } from './pages/cart/cart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductItemDetailComponent } from './pages/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductListItemComponent } from './pages/product-list/components/product-list-item/product-list-item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DashboardComponent,
    OrderComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    ProductListItemComponent,
    CheckoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
