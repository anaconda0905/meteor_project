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
          let number = 982200441;
          //let number = Meteor.user().profile.telefonoDeConocido;
          let ubicacion = results[0].formatted_address;
          let message = '¡Necesito ayuda!, estoy en ' + ubicacion;

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
            };
            var error = function (e) { alert('Mensaje fallido:' + e); };
            sms.send(number, message, options, success, error);
          
        }

          console.log(results[1]);
          //return results[1].formatted_address;
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

Template.layoutTiendas.onRendered(function () {
  GoogleMaps.load({ v: '3', key: 'AIzaSyAVctAqnGHneN7aqeg7o5NTQTU-378KqEM', libraries: 'geometry,places' });
});

Template.layoutTiendas.helpers({
  mostrar: function () {
    return Session.get('abrir');
  }
});

Template.layoutTiendas.events({
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
      let ubicacion = geocodeLatLng();
    }
  },
  'click .logout': function  () {
    Meteor.logout();
  },
  'click .a': function () {
    Session.set('abrir', '');
  },
  'click .t': function () {
    Session.set('abrir', '');
  },
  'click .cuenta': function () {
    FlowRouter.go('/cuenta');
  }
});
