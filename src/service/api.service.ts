import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project, ProjectArray } from 'src/models/model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiService {
    baseUrl = 'https://localhost:7035';
    constructor(private http: HttpClient) { }


    getProjects() {
        return this.http.get<ProjectArray>(`${this.baseUrl}/project`)
            .pipe(
                catchError(this.handleError) // then handle the error
            );
    }
    getProjectById(id: number) {
        return this.http.get<Project>(`${this.baseUrl}/project/${id}`)
            .pipe(
                catchError(this.handleError) // then handle the error
            );
    }
    UpdateProjectById(id: number, name: string) {
        return this.http.put<any>(`${this.baseUrl}/project/${id}`, { name: name })
            .pipe(
                catchError(this.handleError) // then handle the error
            );
    }
    DeleteProjectById(id: number) {
        return this.http.delete<any>(`${this.baseUrl}/project/${id}`)
            .pipe(
                catchError(this.handleError) // then handle the error
            );
    }

    createProject(name: string) {
        return this.http.post<ProjectArray>(`${this.baseUrl}/project`, { name: name })
            .pipe(
                catchError(this.handleError) // then handle the error
            );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
