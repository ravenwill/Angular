import { Injectable } from '@angular/core'
import { Http,RequestOptions,Headers } from '@angular/http'
import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api';
import { Response } from '@angular/http/src/static_response';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){}

    public efetivarCompra(pedido: Pedido): Observable<number> {
        
        let headers: Headers = new Headers()
        
        headers.append('Content-type','application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers})
        )
        .map((resposta: Response) => resposta.json().id)
    }
}