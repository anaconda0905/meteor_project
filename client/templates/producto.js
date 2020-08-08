Template.producto.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('productos');
    self.subscribe('users')
    self.subscribe('fotosp');
    let productoId = FlowRouter.getParam('productoId')
   self.subscribe('ComentariosProductos', productoId);
   self.subscribe('tiendas');
  });
});

Template.producto.onRendered(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    watchSlidesProgress: false
  });

  $('table tr').each(function(){  $(this).find('th').first().addClass('first');  $(this).find('th').last().addClass('last');  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');});$('table tr').first().addClass('row-first');$('table tr').last().addClass('row-last');
});

Template.producto.events({
  'click .llamar'() {
    let numero = this.telefono;

    function onSuccess(result){
      console.log("Success: " + result);
    }

    function onError(result) {
      console.log("Error: " + result);
    }

    //CallNumber.callNumber(onSuccess, onError, numero, false);
  },
  'click .contacto'() {
    //Modal.show('contactar');
  },
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
  'click .1': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 1, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .2': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 2, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .3': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 3, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .4': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 4, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .5': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 5, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
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
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 7, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .8': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 8, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .9': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 9, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
  'click .10': function () {
    let productoId = FlowRouter.getParam('productoId')
    Meteor.call('calificarProducto', 10, productoId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificarProducto');
      }
    });
  },
});

Template.producto.helpers({
  username() {
    return Meteor.users.findOne({_id: this.userId}).profile.nombre
  },
  fotos() {
      return FotosProductos.find({'metadata.tiendaId': Template.parentData(0)._id});
  },
  producto: function () {
    return Productos.findOne({_id: FlowRouter.getParam('productoId')});
  },
  comentarios: function () {
    return ComentariosProductos.find({aprobado: true}, {sort: {createdAt: -1}});
  },
  telefonoc: function (tiendaId) {
    return Tiendas.findOne({_id: tiendaId}).telefono;
  }
});

Template.calificarProducto.events({
  'click .comentar': function (event, template) {
    let comentario = template.find("[name='comentario']").value;
    let productoId = FlowRouter.getParam('productoId')
    if (comentario !== "") {
      Meteor.call('comentarProducto', comentario, productoId, function (err) {
        if (err) {
          console.log(err);
        } else {
          alert('Gracias por Comentar, en espera de ser aprobado')
          Modal.hide('calificarProducto');
        }
      });
    }

  }
});

Template.tienda.onCreated( () => {
  let template = Template.instance()

  template.autorun( () => {
    template.subscribe("fotosp")
  })
})

Template.tienda.helpers({
  FotosProductos() {
    let n = FotosTienda.find({'metadata.tiendId': this._id}).fetch().length
    console.log(n);
    return FotosTienda.find({'metadata.tiendId': this._id})
  }
})
