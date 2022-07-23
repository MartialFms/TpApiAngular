import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Training } from 'src/app/model/training';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  listTrainings! : Training[];
  listCategory! : Category[];
  catId:number =0;
  error = null;

  constructor(private cartService : CartService, private router : Router,
    private apiService : ApiService, public authService : AuthService) {
  }

  ngOnInit(): void {
     this.getAllTrainings();
     this.getAllCategories();
  }

  getTrainingsByCategory(category:Category) {
    this.apiService.getTrainingsByCategory(category).subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }

  getAllTrainings() {
    this.apiService.getTrainings().subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }

  getAllCategories() {
    this.apiService.getCategories().subscribe({
      next : (data) => this.listCategory = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }

  onAddToCart(training:Training){
    if(training.quantity != undefined && training.quantity > 0) {
     this.cartService.addTraining(training);
     //this.router.navigateByUrl('cart');
    }
  }

  onDeleteTraining(training : Training){
    if(confirm("vous êtes sur de vouloir supprimer cette formation")) {
      this.apiService.delTraining(training).subscribe({
        next : (data) => console.log(data),
        error : (err) => this.error = err.message,
        complete : () => this.getAllTrainings()
      })
    }
  }

  onUpdateTraining(training : Training){
    this.router.navigateByUrl('training/' + training.id);
  }
}
