app.directive('btnHome',[
  function(){
    return {
      replace:true,
      template: `
      <div>
        <img id='house' class='clickable' src="assets/buttons/Home.gif" style="width:450px;"/>
      </div>`
    } // return
  }
])
