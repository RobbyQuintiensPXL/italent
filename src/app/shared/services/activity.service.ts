import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../classes/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  projectAPI = environment.PROJECT_API;

  constructor(private http: HttpClient) { }
  getProjects(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.projectAPI);
  }

}
