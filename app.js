var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    photo: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I can definitely help you with that. Could you please tell me your order number?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:10000,
        loading: true,
        photo: true,
        content:'Which item(s) is missing?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        photo: true,
        content:'Thank you for telling me. Meanwhile, I’ve identified the problem: there was a miscommunication in the packaging process.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'I will create a new order that will be delivered within a day. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:10000,
        loading: true,
        photo: true,
        content:'I have processed your request.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
