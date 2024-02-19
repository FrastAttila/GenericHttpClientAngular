import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/albums.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  public fecthAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.baseUrl}/albums`);
  }
}
