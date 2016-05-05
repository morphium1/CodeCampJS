import {bindable, inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

@inject(Validation)
export class NewMessage {
    @bindable
    onSave;
    @bindable
    channel;
    sender;
    message;
    maxMessages=10;

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

    submit() {
        console.log("submit called!!!")
        this.validation.validate()
            .then(() => this.onSave({message :{ channel : this.channel,
                                      sender : this.sender,
                                      message : this.message}}));
    }



}
