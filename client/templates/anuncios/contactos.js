Template.Contactos.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('contactos2');
    self.subscribe('anunciantes');
    self.subscribe('fotos');
  });
});

Template.Contactos.helpers({
  contactos() {
    return Contactos.find({ de: Meteor.userId() });
  },
  fotosDeContacto(anuncianteId) {
    return Fotos.find({'metadata.anuncianteId': anuncianteId});
  },
  nombreDeContacto(anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).nombre;
  },
  telefono: function (anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).telefono;
  },
  ContactoPendiente(anuncianteId) {
    let anuncioId = anuncianteId
    let pendiente = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() }).pendiente;
    let existe = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() })
    if ( pendiente === false || existe === undefined  ) {
      return true;
    } else {
      return false;
    }
  }
});
