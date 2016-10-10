app.directive('viewAboutMe',[
  function(){
    return {
      replace:true,
      restrict:'A',
      template: `
      <div id="about-me" class="view">
        <style>
          #about-me .wrapper {
            /*background:url(assets/Background.gif);
            background-repeat: repeat-x;
            background-size: auto 470px;*/
            height:470px;
            width: 100%;
          }

          #about-me #works {
            height:80%;
            padding: 5% 0;
          }

          #about-me #chair {
            position: absolute;
            right: 2em;
            bottom:1em;
            max-height: 90%;
          }
          #about-me section {
            font-size: 2em;
          }
          #about-me section .label {
            padding: 0.5em;
          }

          #about-me section .answer {
            margin-left: 2em;
            font-size: 0.5em;
          }

        </style>
        <b id="back" class="global-back clickable" ng-click="setView('about')">Back</b>
        <div class="wrapper center-top center-left">
          <section>
            <p class='label'>Name:</p>
            <p class='answer'>Davidson Cua</p>
            <p class='label'>Birth Date:</p>
            <p class='answer'>July 14, 1993</p>
            <p class='label'>Birth Place:</p>
            <p class='answer'>Cebu City, Cebu, Philippines</p>
          </section>
          <img
            id="chair"
            class="clickable"
            src="assets/buttons/Chair-zoomed.gif"
            ng-click="setView('about')"
            />

        </div>
      </div>
      `,
      link : function($s,$e,$a){

      }//link
    } // return
  }
])
