import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = 'V05eKudYZvS3W2AFMjnFf2VR1VtGvQVY';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  public fetchGifs(): Observable<any> {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=internet&api_key=${API_KEY}&limit=10`);
  }
}
