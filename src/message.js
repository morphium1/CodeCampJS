/**
 * Created by mpichler on 14.04.16.
 */
export class Message {
    sender;
    channel;
    text;
    style;


    constructor(sender, channel, text) {
        this.sender = sender;
        this.channel = channel;
        this.text = text;
        this.style = channel;
    }
}