/**
 * Created by admin on 2016/9/9.
 */
$(function(){
    //导航
    (function(){
        $('.logo ul li').hover(function(){
            $(this).find('span').animate({'height':'45px'},100);
            var dataN=$(this).attr('dataName');
            $('#music').get(0).src="mp3/"+dataN+".mp3";
            $('#music').get(0).play();
        },function(){
            $(this).find('span').animate({'height':'0px'},100);
            $('#music').get(0).pause();
        });
    })();
   /* //图片拖拽上传
    (function(){
        $('.imgbut').click(function(){
            $('.mesagebut').slideToggle();
        });
        $('.edit').click(function(){
            $('.mesagebut').slideDown();
        });
        $('.tzspan').click(function(){
            $('.tzimg').slideToggle();
        });
        //找到要拖拽的区域
        var odiv=$('.tzimg').get(0);
        var op=$('#ts');
        odiv.ondragenter=function(){
            op.html('可以释放元素');
        };
        odiv.ondragenleave=function(){
            op.html('请将图片拖到此区域');
        }
        odiv.ondragover=function(e){
            e.preventDefault();
        }
        odiv.ondrop=function(e){
            e.preventDefault();
            var fs= e.dataTransfer.files;//获取文件的集合
            var len=fs.length;
            for(var i=0;i<len;i++){
                var type=fs[i].type;
                if(type.indexOf("image")!=-1){
                    var fd=new FileReader();//创建文件流
                    fd.readAsDataURL(fs[i]);
                    //文件读取成功
                    fd.onload=function(){
                        var oimg=$("<img src='' />");
                        oimg.attr('src',this.result);
                        $('.tzimg').append(oimg);
                        op.html("");
                    }
                }else{
                    alert('请上传图片');
                }
            }
        }
    })();*/
    //二级菜单
    (function(){
        var index;
        $('.ulfirst li').hover(function(){
            var index=$(this).index();
            $('.logosecond').find('.logo_ul1').eq(index).css('opacity','1').siblings('.logo_ul1').css('opacity','0');
            $('.logosecond').find('.logo_ul1').eq(index).css('z-index','999').siblings('.logo_ul1').css('z-index','1');
            //$('.logosecond').find('.logo_ul1').eq(index).fadeIn().siblings('.logo_ul1').fadeOut();
        },function(){

        });
    })();
});