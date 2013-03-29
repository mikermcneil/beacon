// define viewModel

    viewModel = function() {
    	var systemTime = new Date();
    	this.systemTime = ko.observable(systemTime);
    }
    
// launch page

	$(document).ready(function() {    	
	    ko.applyBindings(new viewModel());			    		
	});	