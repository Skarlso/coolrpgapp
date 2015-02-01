Usernames = new Mongo.Collection("usernames");

if (Meteor.isClient) {
  Router.route('/', function () {
  // render the Home template with a custom data context
    this.render('adduser', {data: {username: "bka"}});
  });
  Router.route('/story', function () {
    this.render('Story');
  });
/*
  Template.body.events({
    "submit .new-user": function (event) {
      // This function is called when the new task form is submitted

      var username = event.target.username.value;

      Usernames.insert({
        username: username,
        createdAt: new Date() // current time
      });



      // Clear form
      event.target.username.value = "";

      // Prevent default form submit
      return false;
    }
  });*/
  Template.body.events({
  'click #clickme': function () {
    Router.go('/story');
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
