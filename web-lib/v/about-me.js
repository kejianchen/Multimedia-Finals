app.directive('viewAboutMe',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="about-me" class="view">
        <style>
          #about-me .wrapper {
            background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;
            height:470px;
            width: 100%;
          }

          #about-me #works {
            height:80%;
            padding: 5% 0;
          }

          #about-me #chair {
            max-height: 90%;
            position: absolute;
            right: -15em;
            bottom:-14px;
          }
          #about-me #david {
            max-height: 90%;
            position: absolute;
            right: -15em;
            bottom:-14px;
          }
          #about-me section {
            font-size: 1.5em;
          }
          #about-me section .label {
            padding: 0.5em;
          }

          #about-me section .answer {
            margin-left: 2em;
            font-size: 0.5em;
          }

          #about-me #list-content {
            height:80%;
            margin-left: 2em;
            display:block;
            background: rgba(0,0,0,0.7);
            border: 2px solid white;
            width: 600px;
          }

        </style>
        <b id="back" class="global-back clickable" ng-click="setView('about')">Back</b>
        <div class="wrapper center-top center-left">
          <section id="list-content" class="center-top">
            <p class='label'>Name:</p>
            <p class='answer'>Davidson Cua</p>
            <p class='label'>Birth Date:</p>
            <p class='answer'>July 14, 1993</p>
            <p class='label'>Birth Place:</p>
            <p class='answer'>Cebu City, Cebu, Philippines</p>
            <img
              id="chair"
              class="clickable"
              src="assets/buttons/Chair-zoomed.gif"
              ng-click="setView('about')"
              />
            <img
              id="david"
              class="clickable"
              src="assets/buttons/David-zoomed.gif"
              ng-click="setView('about')"
              />
          </section>
        </div>
      </div>
      `,
      link : function($s,$e,$a){

      }//link
    } // return
  }
])
