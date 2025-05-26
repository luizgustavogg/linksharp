import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../types/link.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  router: Router;
  constructor(private http: HttpClient, router: Router) {
    this.router = router;
  }

redirectionUser(url: string) {
  window.open(url, '_blank');
}

  createLink(urlOriginal: String, shortCode: String): Observable<Link> {
    // console.log("urlOriginal:", urlOriginal, "shortCode:", shortCode)
    return this.http.post<Link>('http://localhost:3000/shorten', {
      urlOriginal,
      shortCode,
    });
  }
}
