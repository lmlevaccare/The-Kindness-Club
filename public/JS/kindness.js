


var ptCount = 100;
// var ptBal=dbBadge[1].Points




$(document).ready(function () {


 $("#complete").on("click", function(){
   var newPoints = {
     points: 100
   }
   $.ajax({
     url: "/api/user", 
     method: "PUT",
     data: newPoints
   }).then(function(){
     window.location.reload()
   })
 })
 
  $.get("/api/task", function (task) {
     console.log("task", task);
    console.log("task", task.PointsEarned);


   
    var elTask = document.querySelector('#daily-task')
    elTask.textContent = task.TaskName + "" + "Points Earned" + task.PointsEarned
    // var elPts=document.querySelector('.pts')
    // elPts.textContent = task.PointsEarned
     
   

  });
})

let pointsAdded = document.getElementById('complete').addEventListener("click", function () {
  console.log("clicked")
  });



   

//     task.onclick = function () {
//       // append points to page for user id logged in
//       // this is keeping track of points and awarding them to the user id logged in
//       //added default value of 100 in task.js for models
//       var elPoints = document.getElementById('points')
//       elPoints.textContent = "Worth:"+ Tasks.pointsEarned
//       // new task is shown in div by refreshing the page
//       window.location.reload()

      /* 
      append task to page ---DONE
      get random task to append too page --- DONE
      get point value to append to page
      event handler to mark task complete to get points 
      button clicked =points are earned and new task is populated on kindness page -- DONE
      user id and task id are written to table 
      every time user clicks button update user score with points earned 
      */



    //  //mark task as completed in the db
    //  // if(task) {
    //  //    'complete' === clicked
    //  // }.then{(

    //  //    //completed  ===  true
    //  //    //award points to user id

    //  // )}


    //  // append points to page for user id logged in
    //  // this is keeping track of points and awarding them to the user id logged in
    //  //added default value of 100 in task.js for models



