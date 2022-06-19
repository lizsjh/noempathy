var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1000,
    loading: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
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
        delay:2000,
        loading: true,
        content:'I can help you with that. Could you input your order number below?'
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
        delay:1500,
        loading: true,
        content:'Alright. I am looking up your order. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:3500,
        loading: true,
        content:'I found out that there has been a system error, and no driver was assigned to your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:2500,
        loading: true,
        content:'We found a nearest driver, and your food can be picked up within five minutes.'
    });
}).then(function(){
    return botui.message.add({
        delay:1500,
        loading: true,
        content:'Would you like to proceed your order?'
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
        content:'I have processed your request.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "*");
};
