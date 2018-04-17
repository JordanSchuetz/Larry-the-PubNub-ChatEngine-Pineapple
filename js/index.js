let ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-497650cc-ca13-4cea-b453-df29a7e68941',
    subscribeKey: 'sub-c-8ebc94c4-fa2c-11e7-b8a6-46d99af2bb8c',
});


let me = ChatEngine.connect(PubNub.generateUUID());


ChatEngine.on('$.ready', (data) => {

    let me = data.me;

    let chat = new ChatEngine.Chat('new-chat');
    let messageText = $("#message");
    const textInput = document.getElementById('chat-input');

    chat.on('$.connected', (payload) => {
      console.log(me.uuid)
    });
/*
    chat.on('$.online.here', (payload) => {
      appendMessage('Status', payload.user.uuid + ' is in the channel! Their color is ' + payload.user.state.color + '.');
    });

    chat.on('$.online.join', (payload) => {
      appendMessage('Status', payload.user.uuid + ' has come online! Their color is ' + payload.user.state.color + '.');
    });*/


    chat.on('message', (payload) => {
      console.log(payload.sender.uuid, payload.data.text);
      function appendText(){
      	var body = $("hello");
      	var txt1 = $("<div>");
      	txt1.addClass("speech-bubble");
      	txt1.text(payload.data.text);
      	body.append(txt1)
      	$( "div.speech-bubble" ).fadeOut( 1500);
      	//$("body").append(txt1);
      }
      appendText();
    });
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
    checkSubmit = function(e) {
        if (e.keyCode == 13) {
            sendChat();
            console.log("hi")
        }
    }

});
