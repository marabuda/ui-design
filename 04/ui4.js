$( document ).ready(function() {

			/*for (let i = 0; i < 24; i++) {
  			let temp = $('<option>').attr('value', i).text(i);
  			if (i == 8) {
      		temp.attr('selected', 'selected');
     		 }
  			$("#hour").append(temp);
 			} */

 		for (let i = 0; i < 24; i++) {
    		let showText = (i < 10) ? '0' + i : i;
    		let temp = $('<option>').attr('value', i).text(showText);
    		if (i == 8) {
       		temp.attr('selected', 'selected');
    		}
    			$("#hour").append(temp);
			}
		// 第二個
 		for (let i = 0; i < 60; i++) {
 		let showText = (i < 10 ) ? '0' + i :i;
  		$('#minute').append($('<option>').attr('value', i).text(showText));
  		}

  		// 第三個
  		$('#mu').change(function() {
       if ($('#mu').prop("checked")) {
            $('#ring').attr('disabled', false);
            $('#ring').attr('placeholder',"選擇鈴聲");
            $('#ring').css('background-color',' rgba(223, 223, 223, 0.7)');
        	} 
        else {
            $('#ring').attr('disabled', true);
            $('#ring').attr('placeholder',"請開啟鈴聲設定");
             $('#ring').css('background-color',' rgba(223, 223, 223, 0.2)');
        }
    });
	
	//開頭的
	    });
	
	