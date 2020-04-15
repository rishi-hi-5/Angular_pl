import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule } from '@angular/router';
import {ProductModule} from './products/product.module'
//adding modules also gives our directives associated with imported modules
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    //sequence of specifying the routes matter
    //** if given  first ,will take preference over all the path thus should be last
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]
    ,{useHash:true}
    )
    //for root establishes roots for our router module which can be used for navigation
    //if we want to use hashstyle routes we use useHash property
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
