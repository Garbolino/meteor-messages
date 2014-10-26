/*
### Messages accepts these different type of colors:
    alert-success (green)
    alert-info  (blue)
    alert-warning (yellow)
    alert-danger  (red)
*/

Messages = {
    collection:  new Meteor.Collection(null),
    
    throwMessage : function(message, mClass) { 
        Messages.collection.insert({message: message, mClass:mClass})
    },
    throwError : function(message){
        Messages.collection.insert({message:message, mClass: 'alert-danger'})
    },
    throwSuccess : function(message){
        Messages.collection.insert({message:message, mClass: 'alert-success'})
    },
    throwWarning : function(message){
        Messages.collection.insert({message:message, mClass: 'alert-warning'})
    },
    throwInfo : function(message){
        Messages.collection.insert({message:message, mClass: 'alert-info'})
    }
};
