function onFormSubmit(e) {
  sendToOne(e.namedValues);
}

function sendToOne(namedValues){
  var options = {sender: namedValues.From[0], recepient: namedValues.To[0], massMessage: namedValues.Message[0]}
  var sender = namedValues.From;
  var myMessage = namedValues.Message;
  var reciever = namedValues.recepient;
  prospect(formatPhoneNumber(number),myMessage,'OSU Youth');
  
  //sendMail(myMessage);
  
}

/*--------SMS functions ----------*/

/*Sends SMS through MPower Awesomely*/
function sendSMS(number,message,senderID){
  return UrlFetchApp.fetch('https://api.smsgh.com/v3/messages/send?From='+senderID+'&To=%2B'+number+'&Content='+message+'&ClientId=zoyzbbdz&ClientSecret=arliiztt');
  
}

function sendSMS_smsghAccount(number,message,senderID){
  return UrlFetchApp.fetch('https://api.smsgh.com/v3/messages/send?From='+senderID+'&To=%2B'+number+'&Content='+message+'&ClientId=ezulsolf&ClientSecret=clwtdjer');
  
}

function testFreeAccount(){
  var message = 'you There?';
  sendSMS_smsghAccount('233209708141',message,'Kobby');
}

//This formats the input to become a proper phone number
function formatPhoneNumber(number){
  Logger.log(number);
  var processingNumber = number;
  var finalResult = "000";
  if(processingNumber.length==10){
    finalResult ='233'+ processingNumber.slice(1,number.length);
  }
  else if(processingNumber.length==9){
    finalResult ='233'+ processingNumber;
  }
  else if(processingNumber.length > 10){
    
  }
  Logger.log(finalResult);
  return finalResult;
}
