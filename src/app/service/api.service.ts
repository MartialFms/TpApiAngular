import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category.model';
import { Training } from '../model/training';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  public getTrainings() {
    return this.http.get<Training[]>(environment.host+"/trainings");
  }

  public getTrainingsByCategory(cat : Category) {
    return this.http.get<Training[]>(environment.host+"/trainings"+cat);
  }

  public getTraining(id : number) {
    return this.http.get<Training>(environment.host+"/trainings/"+id);
  }

public getCategories(){ return this.http.get<Category[]>(environment.host + "/categories");}

  public getUsers() {
    return this.http.get<User[]>(environment.host + "/users");
  }

  public postTraining(training : any){
    return this.http.post<Training>(environment.host+"/trainings" , training);
  }

  public delTraining(training: Training) {
    return this.http.delete(environment.host+"/trainings/" + training.id);
  }

  public putTraining(training: any) {
    return this.http.put<Training>(environment.host+"/trainings/"+training.id, training);
  }
}
