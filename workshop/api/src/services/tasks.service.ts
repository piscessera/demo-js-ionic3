import { Injectable } from '@angular/core'

import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ServiceSettings } from './config.service'

@Injectable()
export class TasksService {
    private headers = new Headers({
        'Content-Type' : 'application/json'
    });
    private url = ServiceSettings.API_TASKS;

    constructor(private http : Http) {}

    list() : Observable< any > {
        //this.headers.set('Authorization', '???????');

        return this
            .http
            .get(this.url, { headers: this.headers })
            .map((data) => {
                return data.json();
            }).catch((err)=> {
                //console.error('An error occurred', err);
                return Promise.
                    reject(err.message || err);
            });
    }

    save(data) : Observable< any > {
        var url = this.url + '/update/' + data.id;
        var params = data;
        return this
            .http
            .post(url, params)
            .map(this.extractData)
            .catch(this.handlerError); // use function
    }

    private extractData(res) {
        return res.json() || []; // if response is null or undefined, 
                                 // then return [] - (array)
        //return res.json() || {}; // if response is null or undefined,
                                    // then return {} - (object)
    }

    private handlerError(error) {
        return Promise.reject(error.message || error);
    }

    saveByParams(id, name, status, image, link) : Observable< any > {
        var url = this.url + '/update/' + id;
        var params = {
            name : name,
            status : status,
            image : image,
            url : link
        };

        return this
            .http
            .post(url, params)
            .map((data) => {
                return data.json();
            });
    }
}