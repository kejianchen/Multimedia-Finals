app.directive('viewAboutAccomplishments',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="about-accomplishments" class="view">
        <style>
          #about-accomplishments #list > * {
            padding: 12px;
          }

          #about-accomplishments #list label{
            color: #FFF;
            font-size:32px;
            margin-bottom: 6px;
            display:block;
            background: rgba(0,0,0,0.7);
            border: 2px solid white;
          }

          #about-accomplishments .list-content {

            display:block;
            background: rgba(0,0,0,0.7);
            border: 2px solid white;
          }
          #about-accomplishments .list-content p {
            line-height: 3em;
          }

          #about-accomplishments p{
            color: #FFF;
            font-size:12px;
          }

          #about-accomplishments .wrapper {
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;
            height:470px;
            width: 100%;

          }
          #about-accomplishments #fireplace {
            left:0.5em;
            bottom:34px;
            position: absolute;
            width:250px;
          }

          #about-accomplishments #list {
            left:300px;
            position: absolute;
            width: 700px;
            height: calc( 100% - 6em );
            top:-2.5em;
          }

          #about-accomplishments #return{
            position: absolute;
            bottom: -2em;
            left:5em;
            color:gray;
          }
          #about-accomplishments #fireplace:hover + #return{
            color:#FFF;
          }
        </style>
        <div class="wrapper center-top">
          <img
            id="fireplace"
            class="clickable"
            src="assets/buttons/Fireplace.gif"
            ng-click="setView('about')"
            >
          <label
            id="return"
            class="clickable"
            for="fireplace"
            ng-click="setView('about')">
            Return
          </label>
          <section id="list" class="center-top">
            <label>Accomplishments</label>
            <div class="list-content">
              <p>Elementary Degree - Centre for International Education</p>
              <p>Highschool Degree - Centre for International Education</p>
              <p>cambridge Certification</p>
              <p>Perfect attendance CIE</p>
              <p>1st year -3rd year Charles Darwin Award (for smarts)</p>
              <p>ARCHcon Head Organizer 2014-2015</p>
              <p>Bronze medalist Fencer 2009</p>
              <p>16th place in PFA 2010</p>
            </div>
          </section>
        </div>
      </div>`,
      link : function($s,$e,$a){
      }//link
    } // return
  }
])
