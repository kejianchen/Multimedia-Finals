app.directive('asset',[
  function(){
    return {
      replace:true,
      transclude:true,
      template: `
      <div class='clickable asset' style='{{style}}'>
        <ng-transclude/>
      </div>`,
      scope : {
        src:'@',
        pos:'@'
      },
      link : function($s,$e,$a){
        switch($s.pos){
          case 'fixed':
            var style = 'position:fixed; '
            $a.b && (style += 'bottom: ' + $a.b + ';')
            $a.r && (style += 'right: ' + $a.r + ';')
            $a.t && (style += 'top: ' + $a.t + ';')
            $a.l && (style += 'left: ' + $a.l + ';')
            $s.style=style
            break;
          default:
            $s.style=''
            break;
        }
      }//link
    } // return
  }
])
