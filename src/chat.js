/**
 * Created by mpichler on 14.04.16.
 */
import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

@inject(Validation)
export class Chat {

    constructor(validation) {
        this.validation = validation.on(this)
            .ensure('sender')
            .isNotEmpty()
            .isEmail()
            .ensure('message')
            .isNotEmpty()
            .hasMinLength(3)
            .hasMaxLength(30) ;
    }

    heading = "Chat";
    channel = "";
    sender;
    message;
    channels = ["info","warning","danger"];
    messages = [];

    submit() {
        this.validation.validate()
            .then(() => {
                this.messages.push({"channel" : this.channel,
                               "sender" : this.sender,
                               "text": this.message,
                               "style" : this.channel});
            });
    }

}

