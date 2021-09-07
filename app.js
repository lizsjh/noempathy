var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. I am a customer service bot.'
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Thank you for contacting us. What brings you here?'
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
        delay:900,
        loading: true,
        content:'I can help you with that. Could you tell me your order number?'
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
        delay:700,
        loading: true,
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:1000,
        loading: true,
        content:'I checked your order. Because of a system error, no driver was assigned to your order. We found a nearest driver, and your food can be picked up within five minutes.'
    });
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Would you like to proceed with your order? If not, we can cancel your order as well.'
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
        delay:700,
        loading: true,
        content:'Alright. I’ll process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I have processed your request. I hope your issue has been addressed.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:700,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
