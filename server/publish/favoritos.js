Meteor.publish('favoritos', function () {
  if (this.userId) {
    return Favoritos.find({de: this.userId});
  } else {
    this.stop();
    return;
  }
});
