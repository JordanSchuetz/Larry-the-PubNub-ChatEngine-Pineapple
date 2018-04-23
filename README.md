# Larry the PubNub ChatEngine Pineapple
Hello,

Meet Larry the Pineapple!  Larry is a happy, dancing pineapple that loves when developers talk to him.  When you open up two separate windows, and type a chat message into one of the windows, you will notice that Larry talks on both screens. MAGICAL!   So how does this amazingness work?

> You can try out the [Larry demo here](https://jordanschuetz.github.io/Larry-the-PubNub-ChatEngine-Pineapple/).

![Larry the ChatEngine PubNub](https://i.imgur.com/H3IubTE.png)

Larry is powered by PubNub's ChatEngine which is an easy to learn API to create powerful chat applications.  In only a few lines of code, ChatEngine allows you to rapidly develop a scalable application without you having to setup any backend.  

## How does Larry work?

To start out, all you need to do is initialize your [PubNub Keys](https://www.pubnub.com/docs/tutorials/chatengine#step-one-pubnub-keys) by clicking the link, create an account, then retrieve the ChatEngine application keys:

```
let ChatEngine = ChatEngineCore.create({
  publishKey: 'PASTE YOUR KEY HERE',
  subscribeKey: 'PASTE YOUR KEY HERE',
});
let me = ChatEngine.connect(PubNub.generateUUID());
```
The above code initializes PubNub and creates a variable that generates a UUID (unique ID) for that client / browser.  

```
ChatEngine.on('$.ready', (data) => {
  let me = data.me;
  let chat = new ChatEngine.Chat('new-chat');
  let messageText = $("#message");
  const textInput = document.getElementById('chat-input');
  chat.on('$.connected', (payload) => {
    console.log(me.uuid)
  });
});
```
The above code turns on ChatEngine, connects to the PubNub network and returns in the console the clients UUID.

```
chat.on('message', (payload) => {
  console.log(payload.sender.uuid, payload.data.text);
  function appendText(){
    var body = $("hello");
    var txt1 = $("<div>");
    txt1.addClass("speech-bubble");
    txt1.text(payload.data.text);
    body.append(txt1);
    $( "div.speech-bubble" ).fadeOut(5000);
  }
  appendText();
});
```
Next, we start listening for any incoming messages.  The above code appends the speech bubble to the HTML code anytime a message is received by the client.  It then uses JQuery to fadeout the text bubble after a few seconds.  

```
sendChat = function(e) {
  if(textInput.value == ''){

  }else{
    chat.emit('message', {
        text: textInput.value
    });
    textInput.value = '';
    return false;
  }
};
```
Next, I created the sendChat function which takes the text you input in the HTML text field, and sends the message to the PubNub servers, and all connected clients.  The if statement checks to make sure the field isn't blank before sending the message.
```
checkSubmit = function(e) {
  if (e.keyCode == 13) {
    sendChat();
    console.log("hi");
    $(this).addClass("mouth");
  }
}
```
The checkSubmit function checks to make sure the user hit the enter key in order to submit the message.  

![Larry Demo Gif](https://i.imgur.com/5dDAXa1.gif)

You can try out the [DEMO HERE](https://jordanschuetz.github.io/Larry-the-PubNub-ChatEngine-Pineapple/).  As you can see, creating a chat application that can communicate between devices is incredibly simple.  ChatEngine makes the entire process seamless and the integration is simple.  Try to make your first ChatEngine application in less than 10 minutes [by signing up here.](https://www.pubnub.com/docs/tutorials/chatengine#step-one-pubnub-keys)

![ChatEngine PubNub Pineapple](https://i.imgur.com/OQIBWt0.png)

Need more help with Larry? Send me a mail at schuetz@pubnub.com. If you liked this demo, please star and fork on github :) 
