/**
 * Created by mpichler on 14.04.16.
 */
import {inject} from 'aurelia-framework';
import {ChatModel} from "chat-model";

@inject(ChatModel)
export class Chat {
    heading = "Chat";

    constructor(chatModel) {
        this.chatModel = chatModel;
        setInterval(() => this.chatModel.loadMessages(),10000);
    }


    saveMessages(message) {
        this.chatModel.addMessage(message);
    }

}

