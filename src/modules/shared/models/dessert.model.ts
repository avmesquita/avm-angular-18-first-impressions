import { IDessert } from "../interfaces/idessert.interface";

export class Dessert implements IDessert {        
    name: string;    
    calories: number;
    carbs: number;
    fat: number;    
    protein: number;

    constructor() {        
        this.name = '';        
        this.calories = 0;
        this.carbs = 0;
        this.fat = 0;
        this.protein = 0;        
    }
  }
  