/**
 * Created by mpichler on 14.04.16.
 */

export class Chat {

    heading = "Chat";
    channel = {};
    message = {};
    messages = [];


    constructor(validation) {
        this.validation = validation;
    }


    saveMessages(message) {
        this.messages.push(message);
    }

}

