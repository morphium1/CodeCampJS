/**
 * Created by mpichler on 15.04.16.
 */
import {inject, BindingEngine} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
const BASE_URL = "http://10.90.0.140:8080/chat/api/v1/";


@inject(HttpClient, BindingEngine)
export class ChatModel {
    messages = [];
    channel = {};

    constructor(http, bindingEngine) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(BASE_URL)
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response; // you can return a modified Response
                    }
                });
        });

        this.http = http;

        bindingEngine.propertyObserver(this,"channel")
            .subscribe(() => this.loadMessages());

        this.bindingEngine = bindingEngine;
    }

    addMessage(message) {
        this.messages.push(message);

        let channel = message.channel;
        let url = channel+"/messages";
        console.log("URL:" +BASE_URL+ url);

        this.http.fetch(url, {
            method: 'post',
            body: json(message)
        }).then(response => console.log("Response :"+JSON.stringify(response)));
    }

    loadMessages() {
        let url = this.channel+"/messages";
        return this.http.fetch(url)
            .then(response => response.json())
            .then(body => {
                if (!body["_embedded"]) {
                    this.messages = [];
                } else {
                    this.messages = body["_embedded"]["chatMessageList"]
                }
            });
    }
}
