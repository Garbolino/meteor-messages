Template.messages.helpers({
  messages: function() {
    return Messages.collection.find();
  }
});

Template.message.rendered = function() {
  var message = this.data;
  Meteor.setTimeout(function () {
    Messages.collection.remove(message._id);
  }, 3000);
};