import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, of, tap } from 'rxjs';
import { iTeslaCar, iTeslaOption, iapiTeslaOption } from './models';

@Injectable({
  providedIn: 'root'
})
export class TeslaCarService {

  constructor(private http: HttpClient) { }

  private cache: iTeslaCar[] = [];

  getModels():Observable<iTeslaCar[]>
  {
    if (this.cache.length > 0)
      return of(this.cache)
    return this.http.get<iTeslaCar[]>('/Models').pipe(
      tap(value => this.cache = value)
    )
  }

  getModel(code:string):iTeslaCar|undefined
  {
    return this.cache.find(m => m.code === code)
  }

  getModelOptions(model:string):Observable<iTeslaOption>
  {
    if (model ==='')
      {
        return new Subject<iTeslaOption>().asObservable();
      }
    const url:string=`/options/${model}`;
    return this.http.get<iapiTeslaOption>(url).pipe(
      map(value =>  ({code: model , ...value}) ),
      tap((v) => console.log(v))
    )
  }
}
