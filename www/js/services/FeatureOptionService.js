function FeatureOptionService_ () {
  // this is a mountPlane constructor
  // 

  var options = {};
  this.options = options;
  options.mount =  [{
		propertyName: "Panel Orientation",
		propertyValue: "panelOrientation",
		options: [{
			value: "landscape",
			text:  "Landscape"
		},{
			value: "portrait",
			text:  "Portrait"
		}]
	},{
		propertyName: "Mount Slope",
		propertyValue: "mountSlope",
		options: [{value: "fixme", text: "fixme to numeric input"}]
	},{
		propertyName: "Gutter Height",
		propertyValue: "gutterHeight",
		options:  [{value: "fixme", text: "fixme"}]
	},{
		propertyName: "Overall Shading",
		propertyValue: "overallShading",
		options: [{
			value: "heavy",
			text:  "Heavy"
		},{
			value: "medium",
			text:  "Medium"
		},{
			value: "little",
			text:  "Little"
		},{
			value: "none",
			text:  "None"
		}]
	},{
		propertyName: "Roof Type",
		propertyValue: "roofType",
		options: [{
			value: "composite",
			text:  "Composite"
		},{
			value: "flat-tile",
			text:  "Flat Tile"
		},{
			value: "round-tile",
			text:  "Round Tile"
		},{
			value: "rolled",
			text:  "Rolled Roof"
		}]
	},{
		propertyName: "AHJ",
		propertyValue: "AHJ",
		options: [{value: "fixme", text: "fixme"}]
	},{
		propertyName: "planeId",
		propertyValue: "MP#",
		options: [{value: "fixme", text: "fixme"}]
	}];

	options.obstruction = [{
		propertyName: "Radius",
		propertyValue: "radius",
		options: [{value: "fixme", text: "fixme"}]
	},{
		propertyName: "Height",
		propertyValue: "height",
		options: [{value: "fixme", text: "fixme to numeric input"}]
	},{
		propertyName: "obstacleId",
		propertyValue: "O#",
		options: [{value: "fixme", text: "fixme"}]
	}];

}
angular.module('edliter').service('FeatureOptionService', FeatureOptionService_);  