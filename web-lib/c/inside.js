app.directive('btnInside',[
  function(){
    return {
      replace:true,
      template: `
      <div class='inside-obj'   style="left:{{left}}">
        <img
          class='clickable'
          ng-attr-src="{{path}}"
        />
      </div>`,
      scope : {
        left:'@',
        src:'@'
      },
      link : function($s,$e,$a){
        $s.path = `assets/buttons/${$s.src}`
        angular.element($e).ready(function(){
          var w= $($e).width()

          console.log("inside.js:18 ::",w)
        })

      }//link
    } // return
  }
])
