/**
 * Created by admin on 2016/9/9.
 */
$(function(){
    //����
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
   /* //ͼƬ��ק�ϴ�
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
        //�ҵ�Ҫ��ק������
        var odiv=$('.tzimg').get(0);
        var op=$('#ts');
        odiv.ondragenter=function(){
            op.html('�����ͷ�Ԫ��');
        };
        odiv.ondragenleave=function(){
            op.html('�뽫ͼƬ�ϵ�������');
        }
        odiv.ondragover=function(e){
            e.preventDefault();
        }
        odiv.ondrop=function(e){
            e.preventDefault();
            var fs= e.dataTransfer.files;//��ȡ�ļ��ļ���
            var len=fs.length;
            for(var i=0;i<len;i++){
                var type=fs[i].type;
                if(type.indexOf("image")!=-1){
                    var fd=new FileReader();//�����ļ���
                    fd.readAsDataURL(fs[i]);
                    //�ļ���ȡ�ɹ�
                    fd.onload=function(){
                        var oimg=$("<img src='' />");
                        oimg.attr('src',this.result);
                        $('.tzimg').append(oimg);
                        op.html("");
                    }
                }else{
                    alert('���ϴ�ͼƬ');
                }
            }
        }
    })();*/
    //�����˵�
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