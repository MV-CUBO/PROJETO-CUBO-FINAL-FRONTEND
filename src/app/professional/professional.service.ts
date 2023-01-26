import { Observable } from 'rxjs';
import { Professional } from './professional.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  baseUrl = "http://localhost:5000/api/doctor";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(professional: Professional): Observable<Professional> {
    return this.http.post<Professional>(this.baseUrl, professional)
  }
}