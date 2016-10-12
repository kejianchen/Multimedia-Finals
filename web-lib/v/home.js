app.directive('viewHome',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="home" class="view">
        <style>
        #house {
          box-shadow: 0px 0px 0px 0.55in #FFF;
          outline: 0.5in solid #101010;
        }
        </style>
        <img id='house'
          class='center-top center-left'
          src="assets/Hillside.gif"
          usemap="#HouseMap"/>
        <map name="HouseMap" id="HouseMap">
          <area title="enter" ng-click="setView('about')" href="#" shape="poly" coords="171,232,292,231,281,189,277,170,285,172,270,146,222,112,245,55,186,62,186,116,188,134,191,142,166,173" />
        </map>
      </div>
      `,
      link : function($s,$e,$a){

      }//link
    } // return
  }
])
