app.directive('label',[
  function(){
    return {
      link : function($s,$e,$a){

        angular.element($e).ready(function(){
          var p = $e.position()
          var w = $e.width()
          var s = `left:${p.left}; width:${w}; `
          $e.after(`<label class='btn-label' style="${s}">${$a.label}</label>`)
          console.log("inside.js:18 ::",s)
        })

      }//link
    } // return
  }
])
