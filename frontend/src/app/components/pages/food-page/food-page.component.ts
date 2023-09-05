import { CartService } from './../../../services/cart.service';
import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
   private cartservice:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
   }

  ngOnInit(): void {
  }

    addToCart(){
      this.cartservice.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');

    }

}
