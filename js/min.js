$(document).ready(function(){
  
 //  active current page icon 

  var current = location.pathname.split("/");
  var navBtn = current[current.length - 1];
  var page = navBtn.split(".");
  var activePageIcon = page[0];   
      $('.' + activePageIcon).addClass('active-link').siblings().removeClass('active-link');



 $(function() {
  
  $('.dz-default').addClass('d-none')
  });
  








  $(document).on("click","#button-form",function(e){
    e.preventDefault();
    
  })
  // slide1
  
  
  
  

  
  
  $('.slide1').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
    });
  
 
  

  
  
  
  // proxy li
  
  var check = document.querySelector(".profile-info .check")
  var noCheck = document.querySelector(".profile-info .noCheck")
  var checkFiled = document.querySelector(".one .form-check")
  $('.profile-info ul li').on('click',function(){
    $(this).addClass('bg-y');
    $(this).siblings().removeClass('bg-y')
  })
  
  $(".profile-info .check").on('click',function(){
    
    $(".one .form-check").css("display","flex")
  })

  $(".profile-info .noCheck").on('click',function(){
    $(".one .form-check").css("display","none")
  })





  // taps
  $('.analytics-top .tabs .only-span').addClass("active-span")
  $('.analytics-top .tabs span').on("click",function(){
    $(this).toggleClass("active-span");
    $(this).siblings().removeClass('active-span')
  })






















    $("#add").on('click',function(){
      $(".overlay").css("display","block")
      console.log("click")
    })
    $(".new i.fa-times").on('click',function(){
      $(".overlay").css("display","none")
    })
  
  








    $("#open").on("click",function(){
      $(".overlay2").css("display","block")
    })


    $(".top-card  i.fa-times").on('click',function(){
      $(".overlay2").css("display","none")
    })




    // delete tr in taskPage
    $(document).on("click","#delete",function(){
      $(this).closest("tr").remove()
    })

    // delete all tr in taskPage

    $(document).on("click","#deleteAll",function(){
      $("#taskTable tr").remove()
    })


    // edit tr in task
    $(document).on("click","#edit",function(){
      $(this).removeClass("fa-pen").addClass("fa-save")
      $(this).closest("tr").find("input").attr('disabled',false);
    })

    $(document).on("click",".fa-save",function(){
      $(this).removeClass("fa-save").addClass("fa-pen")
      $(this).closest("tr").find("input[type='text']").attr('disabled',true);
    })

    // play task
    $(document).on("click","#play",function(){
      $(this).toggleClass("fa-play fa-pause")

      if($(this).hasClass("fa-pause")){
        $(this).closest("tr").find(".status").text("Running");
        $(this).closest("tr").find(".status").removeClass("orange")
      }else if($(this).hasClass("fa-play")){
        $(this).closest("tr").find(".status").text("ldle");
        $(this).closest("tr").find(".status").addClass("orange")
      }
    })

    // start all list in taskPage


    $(document).on("click","#startAll",function(){
      $("#taskTable tr").find("#play").removeClass("fa-pause fa-stop").addClass("fa-play");
      $("#taskTable tr").find(".status").text("ldle").addClass("orange")
    })

    // stop all list in taskPage
    $(document).on("click","#stop",function(){
      $("#taskTable #play").removeClass("fa-pause fa-play").addClass("fa-stop")
      $("#taskTable tr").find(".status").text("status").removeClass("orange").addClass("gray")
    })











    // clear1
    $(document).on("click","#clear1",function(){
      $(this).parent().parent().remove()
    })


    // pen1
    // $("pen1").on('click',function(){
    //   console.log($(this).parent().find("input"))
    // })




    // edit proxy table
    $(document).on('click', '#pen1', function () {
      $(this).closest("tr").find('input').each(function () {
        $(this).attr('disabled', false)
      })
      $(this).removeClass("fa-pen").addClass("fa-save")
    })

    // save edit proxy table
    $(document).on('click', '#listTable .fa-save', function () {
      $(this).closest("tr").find('input').each(function () {
        $(this).attr('disabled', true)
      })
      $(this).removeClass("fa-save").addClass("fa-pen")
    })

    // add new list
    $(document).on("click","#addList",function(){

      var listName = $("#listName").val();
      var tr = document.createElement("tr");
      var table = $("#listTable"); 
      var inputListName = "<input type='text' disabled='disabled' value='"+ listName+"' />"
      var tdListName = "<td> "+ inputListName+" <span>Number of Product: 34</span></td>"
      var d = new Date();
      var y = d.getFullYear();
      var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      var m = months[d.getMonth()];
      var day = d.getDate();
      var h =d.getHours();
      var min =d.getMinutes();
      var tdDate = "<td><h6>"+m+","+day+' '+y+"</h6><span>"+h+':'+min+'am'+"</span></td>";
      var save = "<i class='fas fa-save d-none' id='save1'></i>";
      var edit = "<i class='fas fa-pen'  id='pen1'></i>";
      var del = "<i class='fas fa-trash' id='clear1'></i>"
      var icons = "<td>"+save+edit+del+"</td>"
      
      $("#listTable").append(tr);
      var list = $("#listName").val('');
      if(listName.length > 0){
        tr.innerHTML = tdListName + tdDate + icons
      }

      

    })

















  // // overlay-button
  // $("#button-form").on('click',function(e){
  //   e.preventDefault();
  //   $(".overlay").css("display","none")
  //   $(".overlay2").css("display","block")

  // })
  // $(".top-card  i.fa-times").on('click',function(){
  //   $(".overlay2").css("display","none")
  // })
  
  












// setting




$(document).on("click","#spanEdit",function(){
  $(".account-info .emails input").attr('disabled', false)
})


$(document).on("click",".saveSitting",function(){
  $(".account-info .emails input").attr('disabled', true)
})




$("#taskTable thead").css("width","100px")
    
console.log($("#taskTable thead"))

    
})