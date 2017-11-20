angular.module('starter.controllers', ['ui.router'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state, $ionicSideMenuDelegate,$ionicPopover,$ionicSlideBoxDelegate,$ionicScrollDelegate,$ionicPopup,$ionicNavBarDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.zoomMin = 1;
  $scope.imageSrc = 'images/image1.png';
  $scope.lessText = "Show less";
  $scope.moreText = "Show more";
  $scope.dotsClass = "toggle-dots-grey";
  $scope.linkClass = "toggle-link-yellow";
  $scope.moreA = false;
  $scope.moreB = false;
  $scope.moreC = false;
  $scope.moreD = false;
  $scope.moreE = false;
  $scope.moreF = false;
  $scope.moreG = false;
  $scope.alertPopup = null;

  $scope.groups = [];
  $scope.groups = [
        { name: 'Introduction',
          items : [],
          url   : "anubis-introduction.html",
          show: false
        },
        { name: 'Guidelines',
          items : [
            {item_name  : 'General Instructions', url:"anubis-generalinstructions.html"},
            {item_name  : 'Medical Certification of Death', url:"anubis-medicalcertification.html"}
          ],
          url   : "anubis-guidelines.html",
          show: false
        },
        { name: 'Pronouncing Death',
      items : [

      ],
      url   : "anubis-pronouncingdeath.html",
      show: false
    },
        { name: 'Certifying Cause of Death',
      items : [

      ],
      url   : "anubis-certifyingdeath.html",
      show: false
    },
        { name: 'Completing Part I and II',
          items : [
                    {item_name  : 'Part I', url:"anubis-part1.html"},
                    {item_name  : 'Part II', url:"anubis-part2.html"}
                  ],
          show: false
        },

        { name  : 'Common Problems',
          items : [
                  {item_name  : 'Uncertainty', url :"anubis-problems-uncertainty.html" },
                  {item_name  : 'Advanced Age', url :"anubis-problems-advancedage.html" },
                  {item_name  : 'Infants', url :"anubis-problems-infants.html" },
                  {item_name  : 'Specificity', url :"anubis-problems-specificity.html" },
                  {item_name:'Possible Injuries or Poisonings', url:"anubis-problems-unnaturalcauses.html"}

          ],
          show: false
        },
        { name  : 'Other Parts of The Certification',
          items : [
            {item_name  : 'Autopsy', url :"anubis-autopsy.html" },
            {item_name  : 'Tobacco Use', url :"anubis-tobacco.html" },
            {item_name  : 'Pregancy', url :"anubis-pregnancy.html" },
            {item_name  : 'Manner of Death', url :"anubis-mannerofdeath.html" }
          ],
          show: false
    },
    { name  : 'Amending Cause of Death',
      items : [
      ],
      url   : "anubis-causeofdeath.html",
      show: false
    },
    {
        name: 'Examples',
        items: [
            { item_name: '48-year-old Male with Cramping', url: "anubis-examples-ch1.html" },
            { item_name: '68-year-old Male with Progressive Lower Quadrant Pain', url: "anubis-examples-ch2.html" },
            { item_name: '75-year-old Male Complaining of Severe Chest Pain', url: "anubis-examples-ch3.html" },
            { item_name: '68-year-old Female with Dyspnea and Moderate Retrosternal Pain', url: "anubis-examples-ch4.html" },
            { item_name: '78-year-old Female with Temperature of 102.6F', url: "anubis-examples-ch5.html" },
            { item_name: '34-year-old Male with Severe Shortness of Breath', url: "anubis-examples-ch6.html" },
            { item_name: '75-year-old Male with History of Chronic Bronchitis', url: "anubis-examples-ch7.html" },
            { item_name: '75-year-old Female with History of Diabetes Mellitus, Hypertension, and Myocardial Infarction', url: "anubis-examples-ch8.html" },
            { item_name: '53-year-old Male with Intermittent Midepigastric and Left-Sided Chest Pain', url: "anubis-examples-ch9.html" },
            { item_name: '1,480-gram Male Infant Born at 32 Weeks Gestation to a 20-year-old Primiparous Woman', url: "anubis-examples-ch10.html" },
            { item_name: '30-year-old Gravida-six, Para-five, with a History of Gestational Hypertension', url: "anubis-examples-ch11.html" },
            { item_name: '92-year-old Male Found Dead', url: "anubis-examples-ch12.html" },
            { item_name: '102-year-old Female with Sudden Onset of Speech Abnormality', url: "anubis-examples-ch13.html" }
        ],
        show: false
    },
        { name  : 'Additional Resources',
          items : [],
          url   : 'anubis-additionalresources.html',
          show: false
        }
   ]
  $scope.etiologyGroups = [
    {
      "name": "Blood, Renal, Immune",
      "items": [
        "Anemia","Coagulopathy",
        "Disseminated intravascular coagulopathy",
        "End-stage renal disease",
        "Hepatorenal syndrome",
        "Immunosuppression",
        "Pancytopenia",
        "Renal failure",
        "Thrombocytopenia",
        "Urinary tract infection"
      ]
    },
    {"name":"Cardiovascular",
      "items":[
        "Acute myocardial infarction",
        "Arrhythmia",
        "Atrial fibrillation",
        "Cardiac arrest",
        "Cardiac dysrhythmia",
        "Cardiomyopathy",
        "Cardiopulmonary arrest",
        "Congestive heart failure",
        "Dysrhythmia",
        "Heart failure",
        "Hypotension",
        "Hypovolemic shock",
        "Myocardial infarction",
        "Shock",
        "Ventricular fibrillation",
        "Ventricular tachycardia"
      ]
    },
    {
      "name":"Central Nervous System",
      "items": [
          "Altered mental status",
        "Anoxic encephalopathy",
        "Brain injury",
        "Brain stem herniation",
        "Cerebellar tonsillar herniation",
        "Cerebral edema",
        "Cerebrovascular accident",
        "Convulsions",
        "Dementia (when not otherwise specified)",
        "Epidural hematoma",
        "Increased intracranial pressure",
        "Intracranial hemorrhage",
        "Metabolic encephalopathy",
        "Open (or closed) head injury",
        "Paralysis",
        "Seizures",
        "Subarachnoid hemorrhage",
        "Subdural hematoma",
        "Uncal herniation"
      ]
    },
    {   "name":"Gastrointestinal",
        "items":[
        "	Adhesions	",
        "	Biliary obstruction	",
        "	Bowel obstruction	",
        "	Cirrhosis	",
        "	Diarrhea	",
        "	End-stage liver disease	",
        "	Gastrointestinal hemorrhage	",
        "	Hepatic failure	",
        "	Hepatitis	",
        "	Hepatorenal syndrome	",
        "	Malnutrition	",
        "	Perforated gallbladder	",
        "	Starvation	"
      ]
    },
    {
      "name":"Musculoskeletal",
      "items":[

        "Compression fracture",
        "Fracture"
      ]
    },
    { "name": "Respiratory",
      "items":[
        "Acute respiratory distress syndrome	",
        "Aspiration	",
        "Cardiopulmonary arrest	",
        "Pleural effusions	",
        "Pneumonia	",
        "Pulmonary arrest	",
        "Pulmonary edema	",
        "Pulmonary embolism	",
        "Pulmonary insufficiency	",
        "Respiratory arrest	"
      ]
      },
    { "name": "Not System-Oriented",
      "items":[
        "Abdominal hemorrhage",
        "Abscess",
        "Adhesions",
        "Anoxia",
        "Ascites",
        "Bacteremia",
        "Bedridden",
        "Carcinomatosis",
        "Cardiopulmonary arrest",
        "Cellulitis",
        "Chronic bedridden state",
        "Decubitus ulcers",
        "Dehydration",
        "Exsanguination",
        "Failure to thrive",
        "Gangrene",
        "Hemothorax",
        "Hyperglycemia",
        "Hyperkalemia",
        "Hyponatremia",
        "Hypovolemic shock",
        "Malnutrition",
        "Multi-organ failure",
        "Multi-system organ failure",
        "Necrotizing soft-tissue infection",
        "Old age",
        "Peritonitis",
        "Sepsis",
        "Septic shock",
        "Shock",
        "Starvation",
        "Sudden death",
        "Volume depletion"
      ]
    }

  ];
   $scope.showAboutUs = function() {
      $state.go('app.aboutus');
   }
  $scope.toggleGroup = function(group) {

    if (group.items.length === 0) {
        $location.path("/app/sidemenu/"+group.url);
      //  $state.go('app.sidemenu', {'menuItemUrl' : group.url});

    }
    group.show = !group.show;
  };

  $scope.isGroupShown = function(group) {
    return group.show;
  };

  $scope.toggleEitGroup = function(group) {
    if ($scope.isEitGroupShown(group)) {
      $scope.shownEitGroup = null;
    } else {
      $scope.shownEitGroup = group;
    }
  };
  $scope.isEitGroupShown = function(group) {
    return $scope.shownEitGroup === group;
  };

// image modal
$scope.showImages = function(index,imageSrc) {
  $scope.activeSlide = index;
  $scope.imageSrc = imageSrc;
  $scope.showModal('templates/sidemenu/img-modal-zoom.html');
};

$scope.showModal = function(templateUrl) {
  $ionicModal.fromTemplateUrl(templateUrl, {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });
}
  $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      //console.log('Modal is shown!');
    });


//pop over menu

$ionicPopover.fromTemplateUrl('templates/popover-menu.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.showPopOverMenu = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
  $scope.showTextbox = function(id){
    $scope.dOne = true;
  }

  $scope.openD = function(id){
    var templateId = 'templates/d'+id+'.html'
    $scope.alertPopup = $ionicPopup.alert({
      templateUrl: templateId,
      cssClass: 'custom-class', // Add
      scope: $scope
    });
  };

  $scope.toggleMoreA = function(){
    $scope.moreA = !$scope.moreA;
  };
  $scope.toggleMoreB = function(){
    $scope.moreB = !$scope.moreB;
  };
  $scope.toggleMoreC = function(){
    $scope.moreC = !$scope.moreC;
  };

  $scope.toggleMoreD = function(){
    $scope.moreD = !$scope.moreD;
  };
  $scope.toggleMoreG = function(){
    $scope.moreG = !$scope.moreG;
  };

  $scope.toggleMoreE = function(){
    $scope.moreE = !$scope.moreE;
  };
  $scope.toggleMoreF = function(){
    $scope.moreF = !$scope.moreF;
  };

  $scope.openUrl=function(URL){
    window.open(URL, '_system');
  };

  $scope.showExamples = function(){
    $scope.toggleGroup($scope.groups[8]);
  };

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if ($scope.alertPopup){
      $scope.alertPopup.close();
    }

    // alert('something changes');
  });
})

.controller('HomeCtrl', function($scope) {
})
.controller('AboutUsCtrl', function($scope) {
})
.controller('SideMenuCtrl', function($scope) {
})
.controller('GeneralCtrl', function($scope) {
});

