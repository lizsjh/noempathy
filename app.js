var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    photo: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I am handling your request today. What brings you here? If this is about your order, please provide your order number as well.'
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
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook?'
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
        delay:2000,
        loading: true,
        photo: true,
        content:'Got it. Please give me a moment while pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        photo: true,
        content:'The newest edition is currently in stock. It costs $150 more. Please confirm if you would like to proceed with the exchange. '
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
        content:'Oh, in fact, I pulled up the information about a wrong textbook.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I am searching for the correct information again. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:30000,
        loading: true,
        photo: true,
        content:'The 3rd edition is currently in stock. You just have to pay $50 more for the exchange. Would you still like to exchange the book? '
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
        content:'Alright. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:10000,
        loading: true,
        photo: true,
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3]}, "*");
};
