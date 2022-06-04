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
        delay:1500,
        loading: true,
        content:'Could you tell me why you need to return this textbook in more details?'
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
        delay:2000,
        loading: true,
        content:'Have you taken the wrapping off the textbook?'
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
        content:'If you removed the wrapping, it cannot be returned.'
    });
}).then(function(){
    return botui.message.add({
        delay:2500,
        loading: true,
        content:'Instead, we would like to provide you a 15% off coupon for your next purchase. Please hold on while I am adding the coupon to your account.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'The coupon is successfully added to your account.'
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
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2],"text4":response[3],"text5":response[4]}, "*");
};
