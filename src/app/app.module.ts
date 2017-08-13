import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component'

export const routes: Routes = [
    { path: 'browse', component: BrowseComponent },
    { path: '', component: BrowseComponent },
    { path: 'cart', component: CartComponent },
    { path: 'details', component: DetailsComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    CartComponent,
    BrowseComponent,
    DetailsComponent
    ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
