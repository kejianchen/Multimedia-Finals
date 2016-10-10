app.directive('viewAccSwordHammer',[
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

          #about-projects #works {
            height:80%;
            margin: auto;
            border: 38px solid rgba(0,0,0,0.70);
            outline: 2px solid #FFF;
          }

        </style>
        <div class="wrapper center-top center-left">
          <img
            id="works"
            class="clickable center-top center-left"
            src="assets/Bloodshine/Balor Raganus/Dragonborn.gif"
            ng-click="setView('about')"
            >
        </div>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
