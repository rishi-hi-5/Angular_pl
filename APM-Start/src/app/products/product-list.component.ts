import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';
@Component({
    //selector is not needed in this because we are coming to this page via router
    // selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
    /**
     * services register for particular component can be registered like
     * providers: [ProductService]
    */
})
export class ProductListComponent implements OnInit{
    productTitle:string="Product List";
    imageWidth: number=50;
    imageHeight:number=50;
    showImage:boolean=false;
    _listFilter: string;

    
    public get listFilter() : string {
      return this._listFilter;
    }
    
    public set listFilter(v : string) {
      this._listFilter = v;
      this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }
    
    filteredProducts: IProduct[];
    products: IProduct[];
    errorsMessage: any;

      /**
       * used only for initilization and not for side effects
       * commented are second way
       * */ 

      // constructor(productService:ProductService){
      // having services are so common that angular has provided a different way to write a constructor as given below
      // private _productService: ProductService;
    
      constructor(private productService:ProductService){
        // this._productService=productService;
      }
      performFilter(filterBy: string ): IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
      }
      
      /**
       * below method is used for component initialization or data retrieval
       * 
      */
      ngOnInit():void{
        console.log("On init");
        this.productService.getProducts().subscribe({
          next: products=>{
            this.products=products;
            this.filteredProducts=products;
          },
          error: err=>this.errorsMessage=err
          // the below es2015 standard doesnt work for some reason..
          // will have to look later
          // next(products) {
          //   this.products=products;
          //   this.filteredProducts=products;
          // },
          // error(err) {this.errorsMessage=err}
        });
      }

      toggleImage():void{
          this.showImage=!this.showImage;
      }

      onRatingClicked(message:string) : void {
        this.productTitle='Product List:'+message;
      }
}