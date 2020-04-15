import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from './product.service';
// import { Router } from '@angular/router';

@Component({
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.css']
})
export class ProdcutDetailComponent implements OnInit {
  pageTitle:string ='Product Detail';
  product:IProduct;
  constructor(private route:ActivatedRoute,
    private productService:ProductService,
    private router: Router
    ) { }

  ngOnInit() {
    //+ is javascript short cut to convert parameter string to numberic id
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    
    this.productService.getProducts().subscribe({
      next: products=>{ this.product=products
        .find(p=>{
          return p.productId===id;
        });
      },
      error: err=>err
    });
  }

  onBack():void{
    this.router.navigate(['/products']);
  }
}
