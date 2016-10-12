app.directive('btnHome',[
  function(){
    return {
      replace:true,
      template: `
      <div>
        <img id='house' class='clickable center-top center-left' src="assets/Hillside.gif" style="width:450px;"/>
      </div>`
    } // return
  }
])
