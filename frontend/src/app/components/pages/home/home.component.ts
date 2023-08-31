import { tag } from './../../../shared/models/tag';
import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor( private foodservice:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.foods = this.foodservice.getllFoodsBySearchTerm(params.searchTerm);
    else if (params.tag)
    this.foods = this.foodservice.getAllFoodsByTag(params.tag)
    else
    
    this.foods=foodservice.getAll();

    })

  

  }

  ngOnInit(): void {
    
  }
}
 