Template.productos.onCreated( () => {

  let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );

    template.autorun( () => {
      template.subscribe( 'productos2', template.searchQuery.get(), () => {
          console.log('funco');
          setTimeout( () => {
            console.log(template.searching.get());
            template.searching.set( false );
          }, 300 );
    });


    template.subscribe( 'todosComentariosProductos' );
    template.subscribe( 'fotosp' );

    });

});

Template.productos.events({
  'click .anuncio': function () {
    FlowRouter.go('/productos/' + this._id);
  },
  'keyup [name="search"]' ( event, template ) {
    console.log('hola');
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      console.log(template.searchQuery.get());
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});

Template.productos.helpers({
  productos() {
    let a = Productos.find();
    if ( a ) {
      return a;
    }

  },
  foto: function () {
    return FotosProductos.find({'metadata.tiendaId': Template.parentData(0)._id});
  },
  comentarios: function () {
    return ComentariosProductos.find({productoId: this._id}).fetch().length;
  },
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  }
});

Template.tienda.onRendered(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: 10000,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    watchSlidesProgress: true
  });
});

Template.tiendas.onCreated( () => {

  let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );

    template.autorun( () => {
      template.subscribe( 'tiendas2', template.searchQuery.get(), () => {
          console.log('funco');
          setTimeout( () => {
            console.log(template.searching.get());
            template.searching.set( false );
          }, 300 );

      });
      template.subscribe('fotost')
      template.subscribe('productos',  FlowRouter.getParam('tiendaId'));

    });

});

Template.tienda.helpers({
  nombre: function () {
    return Tiendas.findOne({_id: FlowRouter.getParam('tiendaId')}).nombre
  },
  productos: function () {
    return Productos.find({tiendaId: FlowRouter.getParam('tiendaId')});
  },
  tienda() {
    return Tiendas.findOne({_id: FlowRouter.getParam('tiendaId')})
  },
  fotos() {
    let n = FotosProductos.find({'metadata.tiendaId': this._id}).fetch().length
    console.log(n);
    return FotosProductos.find({'metadata.tiendaId': this._id})
  }
});

Template.tiendas.events({
  'keyup [name="search"]' ( event, template ) {

    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      console.log(template.searchQuery.get());
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});

Template.tienda.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('tiendas');
    self.subscribe('fotost')
    self.subscribe('fotosp')
    self.subscribe('productos',  FlowRouter.getParam('tiendaId'));
  //  self.subscribe('todosComentariosProductos');
  });
});

//Template.tiendas.events({
//'click .anuncio': function () {
//    FlowRouter.go('/productos/' + this._id);
//  }
//});

Template.tiendas.helpers({
  tiendas() {
    let t = Tiendas.find();
    if (t) {
      return t
    }
  },
  productos: function (tiendaId) {
    return Productos.find({tiendaId: tiendaId}).fetch().length;
  },
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  fotos(tiendaId) {
    let n = FotosTienda.find({'metadata.tiendId': this._id}).fetch().length
    console.log(n);
    return FotosTienda.find({'metadata.tiendId': this._id})
  }
});

Template.tienda.events({
  'click .sms'() {
    let number = this.telefono;
    let message = 'Quisiera contactarlos';

    console.log("número: " + number + ", mensaje: " + message);

    //CONFIGURACIÓN
    var options = {
        replaceLineBreaks: false,
        android: {
            intent: 'INTENT'
        }
    };

    var success = function () { /*alert('Mensaje enviado exitosamente');*/ };
    var error = function (e) { alert('Mensaje fallido:' + e); };
    sms.send(number, message, options, success, error);
  }
})
