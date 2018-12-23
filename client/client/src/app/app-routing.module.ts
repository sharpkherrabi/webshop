import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductItemDetailComponent} from "./pages/product-item-detail/product-item-detail.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
