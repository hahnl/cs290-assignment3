/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return { type:'Goldfish', //Modify ONLY this line
           brand:'Pepperidge Farm',
           flavor:'Cheddar',
           count:2000 };
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user) {
    this.user = user;
    this.sentMsgArr = [];
    this.receivedMsgArr = [];
    this.totalSentMsgs = 0;
    this.totalReceivedMsgs = 0;

    this.logMessage = function (messageText, direction) {

      if (direction === 0) { // If Sent
        if (this.sentMsgArr.length < 5) {
          var total = this.sentMsgArr.push(messageText);
          this.totalSentMsgs++;
        }
        else if (this.sentMsgArr.length === 5) {
          var shifting = this.sentMsgArr.shift();
          var final_element = this.sentMsgArr.push(messageText);
          this.totalSentMsgs++;
        }
      }
      else if (direction === 1) { // If Received
        if (this.receivedMsgArr.length < 5) {
          var tally = this.receivedMsgArr.push(messageText);
          this.totalReceivedMsgs++;
        }
        else if (this.sentMsgArr.length === 5) {
          var shifted = this.receivedMsgArr.shift();
          var final_element_again = this.receivedMsgArr.push(messageText);
          this.totalReceivedMsgs++;
        }
      }
    };

    this.getSentMessage = function(n) {
      //n=0 retrieves the most recent n=4 retrieves the least recent
      if (n === 0) {
        return this.sentMsgArr[4];
      }
      if (n === 1) {
        return this.sentMsgArr[3];
      }
      if (n === 2) {
        return this.sentMsgArr[2];
      }
      if (n === 3) {
        return this.sentMsgArr[1];
      }
      if (n === 4) {
        return this.sentMsgArr[0];
      }
    };

    this.totalSent = function() {
      return this.totalSentMsgs;
    };

    this.totalReceived = function() {
      return this.totalReceivedMsgs;
    };
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
  return this.receivedMsgArr[this.receivedMsgArr.length-1];
};
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here

//Create an instance of a `MessageLog` for the user "BlackHatGuy".
var myLog = new MessageLog('BlackHatGuy');

//Have the instance receive 3 messages: "foo", "bar" and "baz", received in that order.
//Assign it to the variable myLog.
myLog.logMessage('foo', 1);
myLog.logMessage('bar', 1);
myLog.logMessage('baz', 1);

//end your code
