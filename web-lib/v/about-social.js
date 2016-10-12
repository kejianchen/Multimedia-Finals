app.directive('viewAboutSocial',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="about-social" class="view">
        <style>
          #about-social .wrapper {
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;
            height:470px;
            width: 100%;
          }
          #about-social #letter {
            box-shadow: 0px 0px 0px 0.55in #FFF;
            outline: 0.5in solid #101010;
            right: -12em;
          }

          #about-social #desk {
            position: absolute;
            bottom:35px;
            left: 6em;
          }

          #about-social {
            /*background: #1a4229;*/
          }

          #about-social #back {
            margin:0.5em;
            font-size: 24px;
          }
        </style>
        <div class="wrapper center-top center-left">
          <img  class="clickable"
            id='desk'
            src="assets/buttons/Desk.gif"
            ng-click="setView('about-social')"/>
          <img
            id='letter'
            src="assets/Letter.gif"
            class="center-top center-left"
            usemap="#LetterMap"
          />
        </div>
        <map name="LetterMap" id="LetterMap">
            <area alt="" title="" href="https://www.facebook.com/davidson.cua" shape="poly" coords="121,85,124,180,536,184,545,103,126,85" />
            <area alt="" title="davidson.cua@gmail.com" href="mailto:davidson.cua@gmail.com" shape="poly" coords="114,213,111,309,539,311,538,223,113,213" />
            <area alt="" title="" shape="poly" coords="116,332,119,464,530,454,536,331" />
            <area alt="" title="" shape="poly" coords="543,522,564,323,585,295,560,238,552,131,565,54,608,15,646,6,664,7,692,74,665,248,666,310,688,372,696,524,543,522" />
        </map>
        <b id="back" class="clickable" ng-click="setView('about')">Back</b>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
