$(function(){
    $('#console-box').append('console is ready...');
    
    var year = "";
    var numClick = 0;

    $('.btn').click(function(){
      $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
      year += $(this).text();  
      numClick++;
      if (numClick == 4) {
        $('#console-box').prepend('<br>Year Selected:'+year);
      }
    });
  });
  