import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { routeMapping } from "../../mappings/http-route-mapping";
import { ReqType } from "../../tokens/http-context-token";

@Injectable({
  providedIn: "root",
})
export class GenericHttpClientService {
  constructor(private httpClient: HttpClient) {}

  retrieve<TModel>(context: string): Observable<TModel> {
    return this.httpClient.get<TModel>(routeMapping[context](), {
      context: new HttpContext().set(ReqType, context),
    });
  }

  getbyId<TModel>(
    context: string,
    args: { [key: string]: string | number }
  ): Observable<TModel> {
    return this.httpClient.get<TModel>(routeMapping[context](args), {
      context: new HttpContext().set(ReqType, context),
    });
  }

  public syncData<TModel, TDto>(
    context: string,
    dto: TDto
  ): Observable<TModel> {
    return this.httpClient.post<TModel>(routeMapping[context](), dto, {
      context: new HttpContext().set(ReqType, context),
    });
  }
}
