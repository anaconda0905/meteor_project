Template.paquetes.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('paquetes');
 
  });
});
