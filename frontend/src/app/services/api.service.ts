import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  	private apiUrl: string = "http://localhost:3000/";
	private pathStr: string = "";
	private params: HttpParams;

	private options: any = {
		headers: new HttpHeaders(),
		responseType: 'json'
	};


	get url(): string{
		if(!this.params) return "";
		const path = (this.params.toString())? this.pathStr + "?" + this.params.toString(): this.pathStr;
		return new URL(path, this.apiUrl).href;
	}


	constructor(
		private http: HttpClient
	) {
    this.params = new HttpParams();
  }


	init(){
		this.options.headers = new HttpHeaders()
			.set("Accept", "application/json")
			.set('Content-Type', 'application/json')

		this.params = new HttpParams();
		return this;
	}

    path(...pathAry: (string|number|boolean)[]): this {
		this.pathStr = pathAry.join("/")
		return this;
	}
	

	param(key: string, value: string|number|boolean): this  {
		if(this.params.has(key)){
			this.params = this.params.set(key, value)
		}else{
			this.params = this.params.append(key, value);
		}

		return this;
	}



	
	get(): Observable<any>{
		return this.http.get(this.url, this.options)
			.pipe(...this.getPipe());
	}

	post(data: any): Observable<any>{
		return this.http.post(this.url, data, this.options)
			.pipe(...this.getPipe());
	}

	put(data: any): Observable<any>{
		return this.http.put(this.url, data, this.options)
			.pipe(...this.getPipe());
	}

	delete(): Observable<any>{
		return this.http.delete(this.url, this.options)
			.pipe(...this.getPipe());
	}

	getPipe(): [any, any]{
		return [
			catchError((err: any): any => {
				return throwError(err);
			}),
			tap((e: any): any => {
			})
		];
	}

}
