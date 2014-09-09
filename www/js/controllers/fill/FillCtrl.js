function FillCtrl_($scope, $ionicSideMenuDelegate, MapService, OlService, PanelFillService, ApiService) {
	var vm = this;

	// vm.sample = fillExample;
	var mounts = OlService.mounts;
	vm.sample = ApiService.uploadMounts($scope.apiMessage) //TODO: change from sample
		.then(function(data){
			console.log('api data response', data, arguments);
			angular.forEach(data, responseIterator);
			// OlService.setIdsOfFeaturearray(featurestoadd); // this could possibly be awesome for panelIds & then removing them when we delete a mountplane. 
			OlService.panels.addFeatures(featurestoadd);	
	});

	var featurestoadd = [];

	// iterate over every mount Plane in the api response
	// angular.forEach(vm.sample, responseIterator);

	function responseIterator(arrayOfPanels, key){
		// iterate over each panel in the array of panels
		arrayOfPanels.forEach(function(points_for_panel, key, obj){
			// turn each array of points into a WKT
			var feature = PanelFillService.panelFromJson(points_for_panel);
			var features = OlService.panels.getFeatures();
			featurestoadd.push(feature);
		});
	}

}
controllers.controller('FillCtrl',FillCtrl_);
