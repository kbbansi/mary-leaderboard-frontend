import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = "http://localhost:8080/v1/leaderboard";

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.baseUrl}`);
  }
}
