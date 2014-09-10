function ApiService_ ($http, $q) {
  // this Service provides Api access
  var ApiService = {};

  var baseUrl = "http://scexchange.solarcity.com/scfilefactory/testfill.aspx";

  var example =   {"0":[
	[
		[-122.2673599891102,37.483443610459965],
		[-122.26734402107655,37.483451518440447],
		[-122.26733871563542,37.483444772643665],
		[-122.26735468366822,37.4834368646639],
	],
	[
		[-122.26734402107655,37.483451518440447],[-122.26732805303951,37.483459426418776],[-122.26732274759928,37.483452680621284],[-122.26733871563542,37.483444772643665]],[[-122.26732805303951,37.483459426418776],[-122.26731208499909,37.483467334394952],[-122.26730677955972,37.483460588596749],[-122.26732274759928,37.483452680621284]],[[-122.26731208499909,37.483467334394952],[-122.26729611695528,37.483475242368989],[-122.2672908115168,37.483468496570062],[-122.26730677955972,37.483460588596749]],[[-122.26729611695528,37.483475242368989],[-122.26728014890809,37.483483150340867],[-122.26727484347049,37.483476404541243],[-122.2672908115168,37.483468496570062]],[[-122.26728014890809,37.483483150340867],[-122.26726418085754,37.483491058310605],[-122.26725887542081,37.483484312510249],[-122.26727484347049,37.483476404541243]],[[-122.26737065169762,37.483428956681983],[-122.26735468366822,37.4834368646639],[-122.26734937822717,37.483430118867595],[-122.26736534625569,37.483422210886388]],[[-122.26735468366822,37.4834368646639],[-122.26733871563542,37.483444772643665],[-122.26733341019526,37.483438026846656],[-122.26734937822717,37.483430118867595]],[[-122.26733871563542,37.483444772643665],[-122.26732274759928,37.483452680621284],[-122.26731744215998,37.48344593482355],[-122.26733341019526,37.483438026846656]],[[-122.26732274759928,37.483452680621284],[-122.26730677955972,37.483460588596749],[-122.26730147412131,37.483453842798305],[-122.26731744215998,37.48344593482355]],[[-122.26730677955972,37.483460588596749],[-122.2672908115168,37.483468496570062],[-122.26728550607928,37.4834617507709],[-122.26730147412131,37.483453842798305]],[[-122.2672908115168,37.483468496570062],[-122.26727484347049,37.483476404541243],[-122.26726953803384,37.483469658741356],[-122.26728550607928,37.4834617507709]],[[-122.26727484347049,37.483476404541243],[-122.26725887542081,37.483484312510249],[-122.26725356998504,37.483477566709659],[-122.26726953803384,37.483469658741356]],[[-122.26738131428084,37.48341430290305],[-122.26736534625569,37.483422210886388],[-122.26736004081474,37.483415465090566],[-122.26737600883898,37.483407557107924]],[[-122.26736534625569,37.483422210886388],[-122.26734937822717,37.483430118867595],[-122.26734407278708,37.483423373071055],[-122.26736004081474,37.483415465090566]],[[-122.26734937822717,37.483430118867595],[-122.26733341019526,37.483438026846656],[-122.26732810475605,37.483431281049391],[-122.26734407278708,37.483423373071055]],[[-122.26733341019526,37.483438026846656],[-122.26731744215998,37.48344593482355],[-122.26731213672164,37.483439189025567],[-122.26732810475605,37.483431281049391]],[[-122.26731744215998,37.48344593482355],[-122.26730147412131,37.483453842798305],[-122.26729616868387,37.483447096999619],[-122.26731213672164,37.483439189025567]],[[-122.26730147412131,37.483453842798305],[-122.26728550607928,37.4834617507709],[-122.2672802006427,37.483455004971511],[-122.26729616868387,37.483447096999619]],[[-122.26728550607928,37.4834617507709],[-122.26726953803384,37.483469658741356],[-122.26726423259817,37.483462912941249],[-122.2672802006427,37.483455004971511]],[[-122.26726953803384,37.483469658741356],[-122.26725356998504,37.483477566709659],[-122.26724826455023,37.483470820908842],[-122.26726423259817,37.483462912941249]],[[-122.26739197685986,37.48339964912315],[-122.26737600883898,37.483407557107924],[-122.2673707033981,37.483400811312578],[-122.26738667141809,37.483392903328522]],[[-122.26737600883898,37.483407557107924],[-122.26736004081474,37.483415465090566],[-122.2673547353747,37.4834087192945],[-122.2673707033981,37.483400811312578]],[[-122.26736004081474,37.483415465090566],[-122.26734407278708,37.483423373071055],[-122.26733876734794,37.483416627274273],[-122.2673547353747,37.4834087192945]],[[-122.26734407278708,37.483423373071055],[-122.26732810475605,37.483431281049391],[-122.2673227993178,37.4834245352519],[-122.26733876734794,37.483416627274273]],[[-122.26732810475605,37.483431281049391],[-122.26731213672164,37.483439189025567],[-122.26730683128429,37.483432443227372],[-122.2673227993178,37.4834245352519]],[[-122.26731213672164,37.483439189025567],[-122.26729616868387,37.483447096999619],[-122.26729086324737,37.483440351200692],[-122.26730683128429,37.483432443227372]],[[-122.26729616868387,37.483447096999619],[-122.2672802006427,37.483455004971511],[-122.26727489520709,37.483448259171873],[-122.26729086324737,37.483440351200692]],[[-122.2672802006427,37.483455004971511],[-122.26726423259817,37.483462912941249],[-122.26725892716343,37.483456167140893],[-122.26727489520709,37.483448259171873]],[[-122.26726423259817,37.483462912941249],[-122.26724826455023,37.483470820908842],[-122.26724295911637,37.483464075107776],[-122.26725892716343,37.483456167140893]],[[-122.26740263943472,37.483384995342291],[-122.26738667141809,37.483392903328522],[-122.26738136597727,37.483386157533637],[-122.26739733399302,37.483378249548124]],[[-122.26738667141809,37.483392903328522],[-122.2673707033981,37.483400811312578],[-122.26736539795817,37.483394065516983],[-122.26738136597727,37.483386157533637]],[[-122.2673707033981,37.483400811312578],[-122.2673547353747,37.4834087192945],[-122.26734942993565,37.4834019734982],[-122.26736539795817,37.483394065516983]],[[-122.2673547353747,37.4834087192945],[-122.26733876734794,37.483416627274273],[-122.26733346190976,37.483409881477257],[-122.26734942993565,37.4834019734982]],[[-122.26733876734794,37.483416627274273],[-122.2673227993178,37.4834245352519],[-122.2673174938805,37.483417789454165],[-122.26733346190976,37.483409881477257]],[[-122.2673227993178,37.4834245352519],[-122.26730683128429,37.483432443227372],[-122.26730152584787,37.48342569742892],[-122.2673174938805,37.483417789454165]],[[-122.26730683128429,37.483432443227372],[-122.26729086324737,37.483440351200692],[-122.26728555781185,37.48343360540153],[-122.26730152584787,37.48342569742892]],[[-122.26729086324737,37.483440351200692],[-122.26727489520709,37.483448259171873],[-122.26726958977244,37.483441513372],[-122.26728555781185,37.48343360540153]],[[-122.26727489520709,37.483448259171873],[-122.26725892716343,37.483456167140893],[-122.26725362172965,37.483449421340318],[-122.26726958977244,37.483441513372]],[[-122.26725892716343,37.483456167140893],[-122.26724295911637,37.483464075107776],[-122.26723765368349,37.483457329306482],[-122.26725362172965,37.483449421340318]],[[-122.26724295911637,37.483464075107776],[-122.26722699106595,37.483471983072512],[-122.26722168563393,37.483465237270494],[-122.26723765368349,37.483457329306482]],
  ]};

  ApiService.uploadMounts = function(data) {
  	var deferred = $q.defer();
    var x = {};
    // x = JSON.stringify(data);
    // var x = {"o": [{"radius": 224,"height": 0,"center": {"lat": 37.483357, "lon": -122.267425}}         ,{"radius": 64,"height": 0,"center": {"lat": 37.483407, "lon": -122.267325}}         ,{"radius": 64,"height": 0,"center": {"lat": 37.483503, "lon": -122.267259}} 
    //     ],         "m": [{"id": 0,"pitch": 0,"points": [[-122.267425, 37.483357], [-122.267215, 37.483461], 
    //     [-122.267259, 37.483503], [-122.267361, 37.483449]]}]};

    x = JSON.stringify(data);
    console.log(x);
  
    // $http({
    //   method: 'POST',
    //   headers: {'Access-Control-Allow-Origin': '*'},
    //   url: baseUrl,
    //   data: {
    //     "TestJSON": x
    //   },
    // })
    // .success(function(data, status) {
    //   console.log(data, status);
    //   deferred.resolve(data);
    // })
    // .error(function(data, status){
    //   console.log('err',data, status,example);
  		// // deferred.resolve(example);
    //   deferred.reject(data); 
    // });
    // console.log(x);

    $.ajax({
    type: "POST",
    url: baseUrl,
    headers: {'Access-Control-Allow-Origin': '*'},
    data: {
        "TestJSON": x
    },
    success: function(data){
        var t = JSON.parse(data);
        deferred.resolve(t);
}
});

    return deferred.promise;
  };

  return ApiService;
}

angular.module('edliter').service('ApiService', ApiService_);  


// If you ned a url to test again here you go. Just pass a single JSON string in, when it is moved to actual API page it will take objects. Does not currently avoid obstructions, but that is easily updated later. Should return something in the form of the previous email.
 
// Test URL:
// http://slc3web00/scexchangestaging/testfill.aspx 
// var x = '{"o": [{"radius": 0,"height": 0,"center": {"lat": 0, "lon": 0}}],' +
//         '"m": [{"id": 0,"pitch": 22,"points": [[-122.267425, 37.483357], [-122.267215, 37.483461],' +
//         '[-122.267259, 37.483503], [-122.267361, 37.483449]]}]}';


  // {"0":[[[-122.26738126703643,37.483442928542537],[-122.26739036860511,37.483429854505623],[-122.2673991399386,37.4834336995205],[-122.26739003837099,37.4834467735581]],[[-122.26739003837099,37.4834467735581],[-122.2673991399386,37.4834336995205],[-122.26740791127301,37.483437544534752],[-122.26739880970646,37.483450618573016]],[[-122.26739880970646,37.483450618573016],[-122.26740791127301,37.483437544534752],[-122.26741668260834,37.483441389548339],[-122.26740758104285,37.483454463587265]],[[-122.26740758104285,37.483454463587265],[-122.26741668260834,37.483441389548339],[-122.26742545394454,37.483445234561273],[-122.26741635238011,37.483458308600881]],[[-122.26741635238011,37.483458308600881],[-122.26742545394454,37.483445234561273],[-122.26743422528168,37.483449079573568],[-122.26742512371831,37.483462153613857]],[[-122.26742512371831,37.483462153613857],[-122.26743422528168,37.483449079573568],[-122.26744299661968,37.483452924585208],[-122.26743389505738,37.483465998626158]],[[-122.26743389505738,37.483465998626158],[-122.26744299661968,37.483452924585208],[-122.26745176795859,37.4834567695962],[-122.26744266639736,37.483469843637835]]]};
//   {"0":[[[-122.26742704433559, 37.48315520675591],
// [-122.2671212725079, 37.482953007690064],
// [-122.26629246992229, 37.483606429934426],
// [-122.26657946628688, 37.483855454047095],
// [-122.26710786146282, 37.48354470600906]]]};


// var x = '{"o": [{"radius": 224,"height": 0,"center": {"lat": 37.483357, "lon": -122.267425}}' +
//         ',{"radius": 64,"height": 0,"center": {"lat": 37.483407, "lon": -122.267325}}' +
//         ',{"radius": 64,"height": 0,"center": {"lat": 37.483503, "lon": -122.267259}}' +
//         '],' +
//         '"m": [{"id": 0,"pitch": 0,"points": [[-122.267425, 37.483357], [-122.267215, 37.483461],' +
//         '[-122.267259, 37.483503], [-122.267361, 37.483449]]}]}';
 
// $.ajax({
//     type: "POST",
//     url: "http://slc3web00/scexchangestaging/testfill.aspx",
//     data: {
//         "TestJSON": x
//     },
//     success: function(data){
//               var t = JSON.parse(data);
// }
// });
 


// Object sent to API: 
// {"m":[{"id":"0","pitch":"0","points":[[-122.26785351556896,37.48373839143003],[-122.2679152063763,37.4830445293725],[-122.26693351787685,37.4830445293725]]}],"o":[{"radius":"224","height":"0","center":{"lat":-122.26753969711422,"lon":37.48336166264419}}]}

