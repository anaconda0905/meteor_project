function geocodeLatLng () {

  let geocoder = new google.maps.Geocoder;
  let latlng;

navigator.geolocation.getCurrentPosition(function (position) {
    latlng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          //let number = 982200441;
          let number = Meteor.user().profile.telefonoDeConocido;

          if (number) {
              let ubicacion = results[0].formatted_address;
              let message = '¡Necesito ayuda!, estoy en ' + ubicacion + " Mis coordenadas son: " + latlng.lat + ", " + latlng.lng;

              if (message) {

                //CONFIGURACIÓN
                var options = {
                  replaceLineBreaks: false,
                    android: {
                      intent: 'INTENT'
                  }
                };

                var success = function () {
                  let datos = {
                    usuario: Meteor.user().profile.nombre,
                    userId: Meteor.userId(),
                    lat: latlng.lat,
                    long: latlng.lng,
                    lugar: ubicacion,
                    fecha: new Date()
                  }

                  Meteor.call('panico', datos, function (err) {
                    if (err) {
                      console.log(err);
                    }
                  });
                }
                var error = function (e) { alert('Mensaje fallido:' + e); };

                sms.hasPermission(function (permiso) {
                  sms.send(number, message, options, success, error);
                }, function (err) {
                  alert('Hubo un error')
                });


              }

              console.log(results[1]);
              //return results[1].formatted_address;
          } else {
            alert('Configura tu número de conocido en tu cuenta');
          }

        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
    //alert(latlng.lat);
}, function (error) {
              alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
});




}

Template.layout.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('bannersPub');
  });
});

function loadURL(url){
    navigator.app.loadUrl(url, { openExternal:true });
    return false;
}


Template.layout.onRendered(function () {
  GoogleMaps.load({ v: '3', key: 'AIzaSyAVctAqnGHneN7aqeg7o5NTQTU-378KqEM', libraries: 'geometry,places' });
  Session.set('abrir', '');
});

Template.layout.helpers({
  mostrar: function () {
    return Session.get('abrir');
  },
  banners: function () {
    return BannersPub.find();
  }
});

Template.layout.events({
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
  'click .panico': function () {
    if (GoogleMaps.loaded()) {
      //alert('holas');
      let ubicacion = geocodeLatLng();
      Session.set('abrir', '');
    }
  },
  'click .logout': function  () {
    Meteor.logout();
    //alert('hola')
    FlowRouter.go('/login');
  },
  'click .a': function () {
    Session.set('abrir', '');
  },
  'click .t':function () {
    Session.set('abrir', '');
  },
  'click .cuenta': function () {
    FlowRouter.go('/cuenta');
  },
  'click .clic': function (e, t) {
    let url = $('c' + this._id).attr("href");
    //alert(url)
    //loadURL('https://www.youtube.com/watch?v=9LQs2cbKhkc');
    Meteor.call('aumentarClick', this._id, function (err) {
      if (err) {
        alert('Hubo un err');
      }
    });
  }
});
