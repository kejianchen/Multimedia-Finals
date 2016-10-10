app.directive('viewAboutProjects',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="about-projects" class="view">
        <style>
          #about-projects .wrapper {
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;
            height:470px;
            width: 100%;
          }


          #about-projects #back {
            margin:0.5em;
            font-size: 24px;
          }

        </style>
        <div class="wrapper center-top center-left">
          <img
            id="works"
            class="clickable center-top center-left"
            src="assets/buttons/weaponry-zoomed.gif"
            ng-click="setView('about')"
            usemap="#WeaponMap"
            >
            <map name="WeaponMap" id="WeaponMap">
    <!-- <area alt="" title="" ng-click="setView('acc-dagger-gun')" shape="poly" coords="14,43,12,155,31,166,87,168,116,47" /> -->
    <area alt="" title="" ng-click="setView('acc-404')" shape="poly" coords="14,43,12,155,31,166,87,168,116,47" />
    <area alt="" title="" ng-click="setView('acc-pot')" shape="poly" coords="24,168,97,173,84,240,58,241,20,237,17,177" />
    <area alt="" title="" ng-click="setView('acc-crossbow-skull')" shape="poly" coords="3,246,106,245,108,294,76,313,67,352,46,358,29,344,28,302,7,298,2,258" />
    <area alt="" title="" ng-click="setView('acc-belt')" shape="poly" coords="123,40,128,168,116,192,114,209,126,219,125,335,146,350,164,322,162,217,172,192,156,165,159,39" />
    <area alt="" title="" ng-click="setView('acc-sword-shield')" shape="poly" coords="209,10,221,31,259,4,288,8,319,12,348,34,334,55,328,88,326,108,317,118,303,146,365,152,388,158,381,178,356,181,319,181,279,180,250,182,239,188,228,201,208,185,178,172,171,162,218,143,230,112,231,62" />
    <area alt="" title="" ng-click="setView('acc-arrow-quiver')" shape="poly" coords="174,222,283,195,348,196,387,222,391,246,349,279,298,285,230,285,182,249" />
    <area alt="" title="" ng-click="setView('acc-404')" shape="poly" coords="172,299,384,277,381,340,341,358,232,339,183,336,169,328,169,299" />
    <area alt="" title="" ng-click="setView('acc-claymore')" shape="poly" coords="373,123,398,76,413,44,459,118,450,132,431,158,423,201,427,326,415,346,395,298,393,133" />
    <area alt="" title="" ng-click="setView('acc-goat-skull')" shape="poly" coords="520,176,461,96,477,43,518,39,565,44,581,71,574,115" />
    <area alt="" title="" ng-click="setView('acc-404')" shape="poly" coords="428,190,432,301,457,346,476,365,505,352,555,360,594,349,596,237,612,214,603,172,558,163,461,170" />
            </map>
        </div>
        <b id="back" class="clickable" ng-click="setView('about')">Back</b>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
