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
        content:'I can help you with that. First, could you tell me your order number?'
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
        content:'Alright. Please give me a moment while pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        photo: true,
        content:'You have ordered one pair of jeans, one swimsuit, and one necklace. Can you confirm?'
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
        content:'Oh, in fact, you ordered a different set of products.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I accidentally pulled up the wrong order.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I am searching for your order again. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:30000,
        loading: true,
        photo: true,
        content:'Your order includes one pair of jeans, one sweater, and one baseball cap. Please confirm.'
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
        content:'Which item is missing?'
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
        content:'I can create a new order for the missing item to be delivered within a day. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:30000,
        loading: true,
        photo: true,
        content:'It is taking longer than usual because I am still gathering some information to process your request. Please hold on again.'
    });
}).then(function(){
    return botui.message.add({
        delay:30000,
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
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3], "text5":response[4]}, "*");
};
