import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProdcutDetailComponent } from './prodcut-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProdcutDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',component: ProdcutDetailComponent,canActivate:[ProductDetailGuard]},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
