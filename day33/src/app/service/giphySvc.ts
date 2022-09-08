import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, Subject, tap } from "rxjs";
import { giphy } from "../models";

@Injectable()
export class GiphyService {

    constructor(private http:HttpClient){}
    onNewData = new Subject<string[]>()

    getGiphy(gif: giphy): Promise<string[]> {

        const params = new HttpParams()
            .set('api_key', gif.api)
            .set('q', gif.search)
            .set('limit', gif.limit)
            .set('rating', gif.rating)

        return firstValueFrom(
            this.http.get<any>('https://api.giphy.com/vq/gifs/search', {params})
                .pipe(
                    map(result => {
                        const data = result.data
                        return data.map((v:any) => v.images.fixed_height.url as string)
                    })
                )
        )


      }

}