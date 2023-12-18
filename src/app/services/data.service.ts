import { Injectable, inject } from '@angular/core';
import { SkillModel } from '../models/skill-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly URL = 'http://localhost:3000';
  private http = inject(HttpClient);

  constructor() {
  }
  fetchData() {
    return this.http.get<SkillModel[]>(this.URL + '/skillsList')
  }

}
