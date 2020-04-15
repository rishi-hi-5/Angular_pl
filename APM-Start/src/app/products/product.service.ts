import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
/**
 * No properties are here because we are not using share data
 * we are using it encapsulate data
 * here we manage the data independet of other component
 *  
 * 
*/
@Injectable({
    providedIn:'root'
})
export class ProductService{
  // the path for this is defined in angular json file
  private productUrl='api/products/products.json';

  constructor(private http:HttpClient){}

  getProducts():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data=> console.log('All '+JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage='';

    if(err.error instanceof ErrorEvent){
      errorMessage=`An error occured: ${err.error.message}`; 
    }else{
      errorMessage=`Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  //tap is for seeing what is in resposne
  //catch cathes error
  // to use rxjs operators we use pipe to use these operators,separated by comma
}