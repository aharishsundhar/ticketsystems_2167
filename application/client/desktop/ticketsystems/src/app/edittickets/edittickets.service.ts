import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class EditticketsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpDelete(ticketsId): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.DESKTOP_API + '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
    GpGetNounById(ticketsId): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.DESKTOP_API + '/tickets/' + ticketsId + `?jwt_token=${jwt_token}`);
    }
}