app.directive('viewAcc404',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="viewAcc404" class="view">
        <style>
          #viewAcc404 .wrapper {
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;
            height:470px;
            width: 100%;
          }

          #viewAcc404 #works {
            height:80%;
            margin: auto;
            border: 38px solid rgba(0,0,0,0.70);
            outline: 2px solid #FFF;
          }

        </style>
        <b id="back" class="global-back clickable" ng-click="setView('about-projects')">Back</b>
        <div class="wrapper center-top center-left">
          <h3
            id="works"
            class="clickable center-top center-left"
            >under construction</h3>
        </div>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
