Meteor.publish('contactos2', function () {
  if (this.userId) {
    return Contactos.find({de: this.userId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('terminos', function () {
	return Terminos.find();
});

Meteor.publish('politicas', function () {
	return Politicas.find();
});