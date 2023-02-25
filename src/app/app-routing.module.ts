import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path:"home", component: HomeComponent
},
  {
  path:"menu", component: MenuComponent
},
{
  path:"about", component: AboutComponent
},
{
  path:"cart", component: CartComponent
},
{
  path:"menu/:id", component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
