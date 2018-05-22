import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Service {

  constructor(private http: HttpClient) {
  }

  getList(amount): Observable<any> {
    return this.http.get('//localhost:8080/api/getList/' + amount);
  }

  getAverage(): Observable<any> {
    return this.http.get('//localhost:8080/api/redirect');
  }
}
