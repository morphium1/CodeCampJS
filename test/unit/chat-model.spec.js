/**
 * Created by mpichler on 15.04.16.
 */
import {ChatModel} from "../../src/chat-model";
import sinon from "sinon";

const MOCK_RESULT =
    {
        "_embedded" : {
            "chatMessageList" : [ {
                "id" : 1,
                "channel" : "default",
                "sender" : "martin.blume@senacor.com",
                "owner" : "10.90.0.177",
                "message" : "Go Schalke!",
                "creationTimestamp" : "2016-04-15T07:12:33.994Z",
                "_links" : {
                    "self" : {
                        "href" : "http://10.90.0.140:8080/chat/api/v1/default/messages/1"
                    }
                }
            }, {
                "id" : 2,
                "channel" : "default",
                "sender" : "denis.pasek@senacor.com",
                "owner" : "0:0:0:0:0:0:0:1",
                "message" : "23 Punkte! ;-)\n",
                "creationTimestamp" : "2016-04-15T07:23:54.192Z",
                "_links" : {
                    "self" : {
                        "href" : "http://10.90.0.140:8080/chat/api/v1/default/messages/2"
                    }
                }
            }]
        }
    }

describe("The chat model",() => {
    let sut;

    beforeEach(() => {

        let http = {
            configure : sinon.stub(),
            fetch : sinon.stub()
        }
        let jsonPromise = Promise.resolve(MOCK_RESULT);
        let response = { json : sinon.stub().returns(jsonPromise)};
        let responsePromise = Promise.resolve(response);
        http.fetch.returns(responsePromise);
        let bindingEngine = {
            propertyObserver : sinon.stub()
        };
        bindingEngine.propertyObserver.returns({subscribe : sinon.stub()});

        sut = new ChatModel(http,bindingEngine);

    });

    it("message list is filled on loadMessages", (done) => {
        sut.loadMessages().then(() => {
            expect(sut.messages.length).toBe(2);
            done();
        })
    })

    it("loadMessage calls fetch only once", (done) => {
        sut.loadMessages().then(()=> {
            expect(sut.http.fetch.callCount).toEqual(1);
            done();
        })
    })

})