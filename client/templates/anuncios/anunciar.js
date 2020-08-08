Template.Anunciar.helpers({
  mostrar: function () {
    return Session.get('abrir');
  }
});

Template.Anunciar.events({
  'click .abrir': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  },
  'click .cerrar': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  },
  'click .ingresar': function (event, template) {
    event.preventDefault();

    let datos = {
      nombre: template.find("[name='nombre']").value,
      telefono: template.find("[name='cel']").value,
      tipo: $( "#tipo" ).val()
    }

    if (
      datos.nombre !== "" &&
      datos.telefono !== "" &&
      datos.tipo !== ""
    ) {
      Meteor.call('postular', datos, function (error) {
        if (error) {
          console.log('Hubo un error');
          FlowRouter.go('/anuncios');
        } else {
          alert('Muy pronto nos contactaremos contigo');
          FlowRouter.go('/anuncios');
        }
      });
    }
  },
  'click .logout'() {
    Meteor.logout()
    FlowRouter.go('/login');
  }
});

Template.cuenta.events({
  'click .guardar': function (e, t) {
    e.preventDefault();

    let datos = {
      nombre: t.find("[name='nombre']").value,
      edad: t.find("[name='edad']").value,
      phoneNumber: t.find("[name='telefono']").value,
      telefonoDeConocido: t.find("[name='telefonoc']").value
    }

    Meteor.call('actualizarInfo', datos, function (err) {
      if (err) {
        alert('Hubo un error');
      } else {
        FlowRouter.go('/anuncios');
      }
    });
  }
});
