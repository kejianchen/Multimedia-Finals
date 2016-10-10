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
            opacity: 0.5;
          }

          #about-social #desk {
            left:50px;
            bottom:33px;
            position: absolute ;
          }

          #about-social section{
            color:#FFF;
            width: calc( 100% - 2em );
            height: calc( 100% - 2em);
            z-index:100;
            text-align: center;
          }

          #about-social label{
            font-size:48px;
          }

          #about-social #list{
            background: rgba(0,0,0,0.7);
            width:100%;
            height:calc( 100% - 48px );
          }

        </style>
        <section class="center-top center-left">
          <label>SOCIAL</label>
          <div id="list">
          </div>
        </section>
        <div class="wrapper center-top center-left">
          <img
            id="desk"
            class="clickable"
            src="assets/buttons/Desk.gif"
            ng-click="setView('about')"
            >
        </div>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
