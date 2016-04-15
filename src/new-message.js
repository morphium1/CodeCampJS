import {bindable, inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

@inject(Validation)
export class NewMessage {
    @bindable
    message;
    @bindable
    onSave;
    @bindable
    channel;
    sender;
    text;

    constructor(validation) {
        this.validation = validation.on(this)
            .ensure('sender')
            .isNotEmpty()
            .isEmail()
            .ensure('text')
            .isNotEmpty()
            .hasMinLength(3)
            .hasMaxLength(30) ;
    }

    submit() {
        this.validation.validate()
            .then(() => this.onSave({message :{ channel : this.channel,
                                      sender : this.sender,
                                      text : this.text}}));
    }



}
