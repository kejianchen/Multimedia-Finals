app.directive('viewAbout',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div
        id="about"
        class="view"
        >
        <style>
          #about .about-wrapper{
            height:350px;
            width:100%;
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 350px;
          }

          #about .about-wrapper > * {
            position: absolute;
            bottom: 25px;
          }

        </style>
        <div class="about-wrapper center-top">

            <img label="Home" class="clickable"
              style="left:42px;"
              src="assets/buttons/Door.gif"
              ng-click="setView('home')"/>
            <div label="About Me" style="left:169px;">
              <img  class="clickable"
                src="assets/buttons/David.gif"
                ng-click="setView('about-me')"/>
              <img class="clickable"
                style="left:264px;"
                src="assets/buttons/Chair.gif"
                ng-click="setView('about-me')"/>
            </div>
            <img label="Accomplishments" class="clickable"
              style="left:372px;"
              src="assets/buttons/Fireplace.gif"
              ng-click="setView('about-accomplishments')"/>
            <img label="Projects"  class="clickable"
              style="left:531px;"
              src="assets/buttons/Weaponry.gif"
              ng-click="setView('about-projects')"/>
            <img label="Contact Me"  class="clickable"
              style="left:1009;"
              src="assets/buttons/Desk.gif"
              ng-click="setView('about-social')"/>
        </div>
      </div>`,
      link : function($s,$e,$a){

      }//link
    } // return
  }
])
