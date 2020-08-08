Template.todos.onCreated( () => {
  console.log("todos - anuncios");

  let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );


    template.autorun( () => {
      template.subscribe( 'anunciantes2', template.searchQuery.get(), () => {
          console.log('funco');
          setTimeout( () => {
            console.log(template.searching.get());
            template.searching.set( false );
          }, 300 );
    });


    template.subscribe( 'todosComentarios' );
    template.subscribe( 'fotos' );

    });


});

Template.todos.onRendered(function () {
  Meteor.setTimeout(function () {
    var mySwiper2 = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      resistance : '100%',
      createPagination:false,
      loop: false

    });

    mySwiper2.reInit()
  }, 200)


})

Template.todos.events({
  'click .anuncio'(e,t) {
    let target = $(e.currentTarget);
    let anuncioId = target.attr( "id" );
    FlowRouter.go('/anunciante/' + anuncioId );
  }
});

Template.todos.helpers({
  anunciantes: function () {

    let a = Anunciantes.find({});
    if ( a ) {
      return a;
    }


    //return Anunciantes.find({});
  },
  foto: function () {
    return Fotos.find({'metadata.anuncianteId': Template.parentData(0)._id});
  },
  comentarios: function () {
    return Comentarios.find({anuncianteId: this._id}).fetch().length;
  },
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  }
});

Template.todos.events({
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

Template.p.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('politicas');
  });
});

Template.p.helpers({
  p: function () {
    return Politicas.find();
  }
});

Template.t.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('terminos');
  });
});

Template.t.helpers({
  t: function () {
    return Terminos.find();
  }
});
