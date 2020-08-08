Template.Negociaciones.onCreated(function () {
	var self = this;

	self.autorun(function () {
		self.subscribe('anunciantes');
		self.subscribe('ofertas');
	});
});

Template.Negociaciones.helpers({
	ofertas: function () {
		return Ofertas.find({userId: Meteor.userId()});
	},
	nombre: function () {
		return Anunciantes.findOne({_id: this.anuncianteId}).nombre
	},
	oferta: function () {
		return Ofertas.findOne({anuncianteId: this.anuncianteId}).oferta
	},
	aprobado: function () {
		if (Ofertas.findOne({anuncianteId: this.anuncianteId}).aprobado === false) {
			return 'No aprobado'
		} else {
			return 'Aprobado' 
		}
	}
});

Template.Negociaciones2.onCreated(function () {
	var self = this;

	self.autorun(function () {
		self.subscribe('anunciantes');
		self.subscribe('ofertas');
		self.subscribe('users');
	});
});

Template.Negociaciones2.helpers({
	ofertas: function () {
		return Ofertas.find({anuncianteId: Meteor.user().profile.anuncianteId});
	},
	nombre: function (userId) {
		return Meteor.users.findOne({_id: userId}).username
	},
	oferta: function () {
		return Ofertas.findOne({anuncianteId: Meteor.user().profile.anuncianteId}).oferta
	}
});

Template.Negociaciones2.events({
	'click .aprobar': function () {
		Meteor.call('aprobarOferta', this._id, function (err) {
			if (err) {
				alert(err);
			}
		});
	},
	'click .desaprobar': function () {
		Meteor.call('desaprobarOferta', this._id, function (err) {
			if (err) {
				alert(err);
			}
		});
	}
});