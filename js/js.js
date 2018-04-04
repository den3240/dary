$(document).on('ready', function() {
	
    	$('.news-img-slider').bxSlider({
			auto: false,
			pager: false,
			controls: true
		});
	

	$('.fb_file').change(upload_click);

	
	$('.prev-next-recipe').click(function() {
		$('.cookbook-modal').modal('hide');
		idmod=$(this).attr('data-target');
		$('.cookbook-modal').on('hidden.bs.modal', function(){
			$(idmod).modal('show');
			//setTimeout(function() {$(idmod).modal('show');}, 1000);
			
		});
		return false;
	});
	
	
	$('#qualForm').submit(function() {
			var noerrors = check();	
			if (noerrors) {
				var formData = new FormData($('form')[0]);
				$.ajax({
					type: "POST",
					processData: false,
					contentType: false,
					url: "/netcat/add.php?isNaked=1",
					data:  formData 
				})
				.done(function( data ) {
					$('#fb_send').fadeOut(0);
					$('.thanks').fadeIn(0);			   
				});
			}
			return false;
	});	
	
	
	function checkEmail(emailAddress) {
		var pattern  = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return !pattern.test(emailAddress);
	}
	
	function check(){
		flag = true;
		if($('#fb_FIO1').val() == ''){flag=false; $('#fb_FIO1').addClass('has-error');} else {$('#fb_FIO1').removeClass('has-error');}
		if($('#fb_FIO2').val() == ''){flag=false; $('#fb_FIO2').addClass('has-error');} else {$('#fb_FIO2').removeClass('has-error');}
		if($('#fb_PHONE').val() == ''){flag=false; $('#fb_PHONE').addClass('has-error');} else {$('#fb_PHONE').removeClass('has-error');}
		if($('#fb_EMAIL').val() == '' || checkEmail($('#fb_EMAIL').val())){flag=false; $('#fb_EMAIL').addClass('has-error');} else {$('#fb_EMAIL').removeClass('has-error');}
		if($('#fb_ADRES').val() == ''){flag=false; $('#fb_ADRES').addClass('has-error');} else {$('#fb_ADRES').removeClass('has-error');}
		if($('#fb_CNT').val() == ''){flag=false; $('#fb_CNT').addClass('has-error');} else {$('#fb_CNT').removeClass('has-error');}
		if($('#fb_LABEL').val() == ''){flag=false; $('#fb_LABEL').addClass('has-error');} else {$('#fb_LABEL').removeClass('has-error');}
		if($('#fb_TEXT').val() == ''){flag=false; $('#fb_TEXT').addClass('has-error');} else {$('#fb_TEXT').removeClass('has-error');}

		var lim=10;
		var sum=0;
		$('#qualForm input[type=file]').each(function() {
			if (this.files[0]) {sum=sum+this.files[0].size}
			if (lim<Math.ceil((sum/(1024*1024-1024)))) {
				flag=false;
				$('.fb_err_text span').remove();
				$('.fb_err_text').append('<span><br>Общий объём загружаемых файлов не должен превышать '+lim+' мегабайтов.<br><br></span>');
			}
		});
						//return true;						
		if(flag){
			$('.fb_err_text').fadeOut(0);
		} else {
			$('.fb_err_text').fadeIn(0);
		}

		return flag;
	};
	
	function upload_click(){
		if($(this).val()!=''){
			flag=true;
			$('fb_add .fb_file').each(function(){
				if($(this).val()=='') flag=false;
			});
			if($(this).attr('add')>0 && flag){
				cnt = $('.fb_add').length;
				if (cnt<9) {	
					$('.fb_more').append(
					"<div class='col-md-6'><div class='form-group fb_add'><p>Прочие прикрепленные файлы</p>"+
					"<input name='f_FILE_DOP_"+(cnt+2)+"' add='"+(cnt+2)+"' type='file' class='fb_file form-control' data-browse='Обзор' data-placeholder='файл до 10мб'>"+
					"</div></div>");
					$('.fb_file').change(upload_click);
					$('input[type="file"]').styler();
				}
			} 
		} 
	}
	
						
					

});

$(document).ready(function() {
	function afterajx(){
		$('.eq-height.item').css('min-height', 'auto');
		$('.eq-height.text').css('min-height', 'auto');
		$('.eq-height.item').equalHeights();
		$('.eq-height.text').equalHeights();
	}
	
	$('.subcategory-filter a').on('click', function() {
		var url = $(this).attr('href');
		$.get(url+"?isNaked=1", function(data){ 
			$('#contajx').html(data);
			afterajx();
		});
		return false;
	})
	
	$('.ajxpag a').on('click', function() {
		var url = $(this).attr('data-url');
		$.get(url, function(data){ 
			$('#contajx').html(data);
			afterajx();
		});
		return false;
	})
	
	$(document).bind("ajaxComplete",function(){
		
		$('.subcategory-filter a').on('click', function() {
			var url = $(this).attr('href');
			$.get(url+"?isNaked=1", function(data){ 
				$('#contajx').html(data);
				afterajx();
			});
			return false;
		})
		
		$('.ajxpag a').on('click', function() {
			var url = $(this).attr('data-url');
			$.get(url, function(data){ 
				$('#contajx').html(data);
				afterajx();
			});
			return false;
		})
		
		$('.prev-next-recipe').click(function() {
			$('.cookbook-modal').modal('hide');
			idmod=$(this).attr('data-target');
			$('.cookbook-modal').on('hidden.bs.modal', function(){
				$(idmod).modal('show');
				//setTimeout(function() {$(idmod).modal('show');}, 1000);
				
			});
			return false;
		});
		
	});	
});	
function check_sogl(){
    if( $("#sogl").prop("checked") ){ return true;}else{return false;}
}
