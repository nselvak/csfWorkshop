import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, Subject, tap } from "rxjs";
import { giphy } from "../models";

@Injectable()
export class GiphyService {

    onNewData = new Subject<string[]>()
    constructor(private http:HttpClient){}

    getGiphy(gif: giphy): Promise<string[]> {

        const params = new HttpParams()
            .set('api_key', gif.api)
            .set('q', gif.search)
            .set('rating', gif.rating)
            .set('limit', gif.limit)

        return firstValueFrom(
            this.http.get<any>('https://api.giphy.com/v1/gifs/search', { params })
                .pipe(
                    map(result => {
                        const data = result.data
                        return data.map((v:any) => v.images.fixed_height.url as string)
                    })
                )
        )


      }

}