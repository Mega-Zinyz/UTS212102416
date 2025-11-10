import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-ecommerece',
  imports: [Header, Sidebar, Footer],
  templateUrl: './ecommerece.html',
  styleUrl: './ecommerece.css',
})
export class Ecommerece {
  protected readonly nama = 'Haggai Gershom Harnowo';
  protected readonly nim = '212102416';
}
