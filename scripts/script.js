$(function(){
    $('#console-box').append('console is ready...');
    
    var year = "";
    var numClick = 0;
    var time = "";

    $('.year').click(function(){
      $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
      year += $(this).text();  
      numClick++;
      if (numClick == 4) {
        $('#console-box').prepend('<br>Year Selected:'+year);
        numClick = 0;
        year='';
      }
    });

    $('.time').click(function(){
      time += $(this).text();  
      numClick++;
      if (numClick == 2) {
        time += ":"
      }
      if (numClick == 4) {
        $('#output').html('<h1>Time Selected ' + time + ' ' +$('#time').val() + '</h1>');
        numClick = 0;
        time = "";
      }
    });
    
  });
  