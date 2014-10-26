Tinytest.add("Messages collection works", function(test) { 
    test.equal(Messages.collection.find({}).count(), 0);

    Messages.throwError('A new error message!'); 
    test.equal(Messages.collection.find({}).count(), 1);
    Messages.collection.remove({});
    
    Messages.throwSuccess('A new success message!'); 
    test.equal(Messages.collection.find({}).count(), 1);
    Messages.collection.remove({});

});

Tinytest.addAsync("Messages template works", function(test, done) { 
    Messages.throwError('A new message!'); 
    test.equal(Messages.collection.find().count(), 1);
  
    // render the template
    UI.insert(UI.render(Template.messages), document.body);
  
    test.equal(Messages.collection.find().count(), 1);
    
    // wait a few milliseconds more than 3000 ms
    
    Meteor.setTimeout(function() { 
        test.equal(Messages.collection.find().count(), 0);
        done();
    }, 3500);
});