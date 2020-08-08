FlowRouter.route('/', {
	action() {
		BlazeLayout.render('index');

	}
});

FlowRouter.route('/membresias', {
	action() {
		BlazeLayout.render('membresias');

	}
});

