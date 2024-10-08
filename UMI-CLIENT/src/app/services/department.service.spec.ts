import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './../models/department.module';

@Injectable({
    providedIn: 'root'
})
export class departmentService {
    private apiUrl = 'http://localhost:9005/api/departments';

    constructor(private http: HttpClient) {}

    getAllDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.apiUrl);
    }

    getDepartmentById(id: number): Observable<Department> {
        return this.http.get<Department>(`${this.apiUrl}/${id}`);
    }

    createDepartment(department: Department): Observable<Department> {
        return this.http.post<Department>(this.apiUrl, department);
    }

    updateDepartment(id: number, department: Department): Observable<Department> {
        return this.http.put<Department>(`${this.apiUrl}/${id}`, department);
    }

    deleteDepartment(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
