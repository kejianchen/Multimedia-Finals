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

          #about-projects #works {
            height:80%;
            padding: 5% 0;
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
            src="assets/buttons/Weaponry.gif"
            ng-click="setView('about')"
            >
        </div>
        <b id="back" class="clickable" ng-click="setView('about')">Back</b>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
