		$(function(){
          $("#keyword").keyup(function(){
          	// keyup键盘松开
             var kw=$(this).val();
             // console.qlog(kw);
             $.ajax({
              url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
              jsonp:'cb',
              data:{wd:kw},
              dataType:'jsonp',
              success:function(data){
              	// console.log(data);
              	var sug=data.s;
              	var tag='<ul>';
              	$.each(sug,function(i,e){
                tag+='<li>'+e+'</li>';
              	});
              		tag+='</ul>';
              		$("#info").html(tag);
              		$("#info").find('li').hover(function(){
              			$(this).css('backgroundColor','lightblue');

              		},function(){
              			$(this).css('backgroundColor','lightgray');
                  })
              }
             });
          });
		});
