/**
 * Created by mpichler on 14.04.16.
 */
import {bindable} from 'aurelia-framework';

export class MessageList {
    @bindable
    messages = [];
}

export class SortValueConverter {
    toView(messageList) {
        return messageList.sort((a,b) => a.creationTimestamp < b.creationTimestamp ? 1 : -1);
    }
}

export class SliceValueConverter {
    toView(array,max) {
        return array.slice(0,max);
    }
}