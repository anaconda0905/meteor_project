//import CallNumber from 'call-number';

Template.PerfilAnunciante.onCreated(function () {
  let template = Template.instance()
  template.cargado = new ReactiveVar(false);
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    self.subscribe('comentarios', anuncianteId);
    self.subscribe('contactos');
    self.subscribe('fotos');
    self.subscribe('users')
  });
});

Template.PerfilAnunciante.onRendered(function () {
  if (Fotos.find().fetch().length > 0) {


    //Template.instance().cargado.set(true)

  } else {
    //Template.instance().cargado.set(false)
  }

  /*Meteor.setTimeout(function () {
    var mySwiper2 = new Swiper ('.swiper-container2', {
      // Optional parameters
      direction: 'horizontal',
      resistance : '100%',
      createPagination:false,
      loop: false
    });
    mySwiper2.reInit()

  }, 200)*/


  $('table tr').each(function(){  $(this).find('th').first().addClass('first');  $(this).find('th').last().addClass('last');  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');});$('table tr').first().addClass('row-first');$('table tr').last().addClass('row-last');
});

Template.PerfilAnunciante.events({

  'click .panico'() {

        let number = document.getElementById('numberTxt').value;
        let message = document.getElementById('messageTxt').value;

        console.log("número: " + number + ", mensaje: " + message);

        //CONFIGURACIÓN
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        };

        var success = function () { alert('Mensaje enviado exitosamente'); };
        var error = function (e) { alert('Mensaje fallido:' + e); };
        sms.send(number, message, options, success, error);
  },
  'click .filtrar': function () {
    
        let edad = document.getElementById('edadTxt').value;
        let precio = document.getElementById('precioTxt').value;
        let tipo = document.getElementById('tipoTxt').value;
        let atencion = document.getElementById('atencionTxt').value;
        let contacto = document.getElementById('contactoTxt').value;
        let servicios = document.getElementById('serviciosTxt').value;

        let contenido = document.getElementById('contenidoTxt').value;
        let pais = document.getElementById('paisTxt').value;

        let etnia = document.getElementById('etniaxt').value;
        let pelo = document.getElementById('peloTxt').value;

        let estatura = document.getElementById('estaturaTxt').value;
        let cuerpo = document.getElementById('cuerpoxt').value;

        let pecho = document.getElementById('pechoTxt').value;
        let pubis = document.getElementById('pubisTxt').value;


        console.log("edad: " + edad + ", precio: " + precio);

        //CONFIGURACIÓN
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        };

  },
  'click .1': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 1, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .2': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 2, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .3': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 3, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .4': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 4, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .5': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 5, anuncianteId,  function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .6': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 6, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .7': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 7, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .8': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 8, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .9': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 9, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .10': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 10, anuncianteId,function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .contacto': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('contactar', anuncianteId, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Listo');
      }
    });
  },
  'click .ofertar': function () {
    Modal.show('ofertar');
  },
  'click .favorito': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('favorito', anuncianteId, function (error) {
      if (error) {
        console.log(error);
      } else {
        alert('Agregado a favoritos');
      }
    });
  },
  'click .sms'() {
    let number = this.telefono;
    let message = 'Desearia contactarte';

    console.log("número: " + number + ", mensaje: " + message);

    //CONFIGURACIÓN
    var options = {
        replaceLineBreaks: false,
        android: {
            intent: 'INTENT'
        }
    };

    var success = function () { /*alert('Mensaje enviado exitosamente'); */};
    var error = function (e) { alert('Mensaje fallido:' + e); };
    sms.send(number, message, options, success, error);
  }
});

Template.ofertar.events({
  'click .comentar': function (e, t) {
    let anuncianteId = FlowRouter.getParam('anuncianteId');
    let oferta = t.find("[name='oferta']").value;
    Meteor.call('ofertar', anuncianteId, oferta, function (err) {
      if (err) {
        alert('hubo un error');
      } else {
        Modal.hide('ofertar');
        alert('Ofertaste, muy pronto recibiras noticias');
      }
    });
  }
});

Template.PerfilAnunciante.helpers({
  cargado() {
    return Template.instance().cargado.get()
  },
  user() {
    return Meteor.users.findOne({_id: this.userId}).profile.nombre
  },
  estaPendiente() {
    let anuncioId = FlowRouter.getParam('anuncianteId')
    let aprobado = Contactos.find({ anuncianteId: anuncioId, de: Meteor.userId()}).aprobado;
    if (aprobado === false) {
      return true;
    } else {
      return false;
    }
  },
  fotos() {
      return Fotos.find({'metadata.anuncianteId': Template.parentData(0)._id});
  },
  anunciante: function () {
    return Anunciantes.findOne({_id: FlowRouter.getParam('anuncianteId')});
  },
  comentarios: function () {
    return Comentarios.find({aprobado: true}, {sort: {createdAt: -1}});
  }
});



Template.calificar.events({
  'click .comentar': function (event, template) {
    let comentario = template.find("[name='comentario']").value;
    let anuncianteId = FlowRouter.getParam('anuncianteId');

    if (comentario !== "") {
      Meteor.call('comentar', comentario, anuncianteId, function (err) {
        if (err) {
          console.log(err);
        } else {
          alert('Gracias por Comentar, en espera de ser aprobado')
          Modal.hide('calificar');
        }
      });
    } else {
      alert('Complete los Datos')
    }

  }
});
