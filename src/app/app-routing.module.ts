import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: "ecommerce", component: EcommerceComponent},
  {path: "footer", component: FooterComponent},
  {path: "header", component: HeaderComponent},
  {path: "sidebar", component: SidebarComponent},
  {path: "", redirectTo: "ecommerce", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
