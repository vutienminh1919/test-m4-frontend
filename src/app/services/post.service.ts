import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://localhost:3000/awesomes'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  createPost(post: any): Observable<any> {

    return this.http.post<any>(this.API_URL, post);
  }
  updatePost(id: any, post: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, post);
  }
  deletePost(id: any): Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
  findById(id: any): Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

}






