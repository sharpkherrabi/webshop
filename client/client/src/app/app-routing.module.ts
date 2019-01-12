import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductItemDetailComponent} from './pages/product-item-detail/product-item-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from "./pages/cart/cart.component";
import {AddProductComponent} from "./pages/add-product/add-product.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webshop',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'productdetail',
    component: ProductItemDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'shoppingcart',
    component: CartComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
