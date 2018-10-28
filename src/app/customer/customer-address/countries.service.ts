import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CountryModel } from "../country.model";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private endpoint = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) {}

  getCounties(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.endpoint).pipe(
      map((countries: any[]) =>
        countries.map(country => ({
          name: country.name,
          code: country.alpha2Code
        }))
      )
    );
  }
}
