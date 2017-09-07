$(function(){
    //音乐导航收放
    var i=0;
    $('.up').click(function(){
        if(i==0){
            $('.wrap').animate({'height':'0px'},600);
            $(this).text('展开');
            i=1;
        }
        else{
            $('.wrap').animate({'height':'250px'},600);
            $(this).text('展开');
            i=0;
        }
    });
    var i=0;
    $('.control .shousuo').find('img').click(function(){
        if(i==0){
            $('.menu').animate({'height':'0px'},500,function(){
                $('.control').animate({'width':'22px'},400);
            });
            i=1;
        }
        else{
            $('.control').animate({'width':'560px'},400);
            i=0;
        }
    });
    var MP3=null;
    var _index=0;
    var index2=0;
    //var array=['../music/蒋雪儿 - 梦的翅膀受了伤.mp3','../music/刘珂矣 - 半壶纱.mp3','../music/刘珂矣 - 渡风.mp3','../music/刘珂矣 - 忘尘谷.mp3'];
    $('.wrap ul li').click(function(){
        var _index=$(this).index();
        $(this).addClass('rotli').siblings().removeClass('rotli');
        $(this).find('img').addClass('rot').parent().siblings().find('img').removeClass('rot');
        //创建音乐播放器
        var osrc=$(this).find('img').attr('src');
        $('.img').find('img').attr('src',osrc);
        var otitle=$(this).find('img').attr('title');
        $('.img').find('span').html(otitle);
        var oul=$(this).find('img').attr('dataSrc');
        $('.player').find('img').attr('src','images/pause2.jpg');
        MP3=creatMusic(oul);
        MP3.play();
        //歌词部分
        var osing=$('.textarea').val();
        var olrc=osing.split('[');//分离时间和歌词
        var html='';
        for(var i=0;i<olrc.length;i++){
            var arr=olrc[i].split(']'); //完全分离时间和歌词
            var timer=arr[0].split('.');//时间
            var message=arr[1];//歌词
            var stime=timer[0].split(':');//分钟和妙
            var ms=stime[0]*60+stime[1]*1;
            var ih=$('.text').find('p').height();
            $('.text').animate({'top':-ih*i},9500);
            if(message){
                html+="<p id='"+ms+"'>"+message+"</p>"
            }
            $('.text').html(html);
        }
        setInterval(jd,1000);

    });
    var MS=0;
    $('.prev').click(function(){
        _index--;
        index2--;
        $('.wrap ul li').eq(_index).trigger('click');
        $('.menu ul li').eq(_index).addClass('border').siblings().removeClass('border');
        var usrc= $('.menu ul li').eq(index2).find('a').attr('dataSrc');
        MP3=creatMusic(usrc);
        MP3.play();
    });

    $('.next').click(function(){
        _index++;
        index2++;
        $('.wrap ul li').eq(_index).trigger('click');
        $('.menu ul li').eq(_index).addClass('border').siblings().removeClass('border');
        var usrc= $('.menu ul li').eq(index2).find('a').attr('dataSrc');
        MP3=creatMusic(usrc);
        MP3.play();
    });
    var s=0;
    $('.player').click(function(){
        if(s==0){
            MP3.pause();//暂停
            $('.menu ul li').removeClass();
            $(this).find('img').attr('src','images/player.jpg');
            $('.wrap ul li').find('img').removeClass('rot');
            s++;
        }
        else{
            MP3.play();
            $('.menu ul li').eq(_index).addClass('border').siblings().removeClass('border');
            $('.wrap ul li.rotli').find('img').addClass('rot');
            $('.player').find('img').attr('src','images/pause2.jpg');
            s=0;
        }
    });
    //进度条
    function jd(){
        var cTime=MS.currentTime;   //设置返回音频的当前播放位置。
        var aTime=MS.duration;
        var bl=(cTime/aTime)*$('.jd1').width();
        $('.jd2').css('width',bl);
        $('.jd3').animate({'left':bl-11},400);
        //歌词的事件监听
        MS.addEventListener("timeupdate",function(){
            var s = parseInt(cTime);
            for(var i = 0; i < s; i++){
                $("#"+i).addClass("red");
            }
        });
    }
    //列表控制
    $('.listimg').click(function(){
        $('.menu').animate({'height':'210px'},500);
    });
    //双击列表播放音乐
    (function(){
        $('.menu ul li').dblclick(function(){
            var index2=$(this).index();
            var usrc= $(this).find('a').attr('dataSrc');
            creatMusic(usrc);
            creatMusic(usrc).play();
            $(this).addClass('border').siblings().removeClass('border');
        });
    })();
    //播放器
    function creatMusic(src){
        var ms=$("<audio src='"+src+"'></audio>").get(0);
        $(".MUSIC").html("");
        $('.MUSIC').append(ms);
        MS=ms;
        return ms;
    };
    //导航轮播
    (function(){
        var length=$('.nav .pic ul li').size();
        var iw=$('.pic').width();
        var hiw=Math.floor(iw/2);
        var timer=null;
        for(i=0;i<length;i++){
            if(i<length/2){
                $('.nav .pic ul li').eq(i).removeClass().addClass('font');
            }
            else if(i>length/2){
                $('.nav .pic ul li').eq(i).removeClass().addClass('late');
            }
            else{
                $('.nav .pic ul li').eq(i).removeClass().addClass('new');
            }
        }
        //下
        $('.oulbtn li').eq(4).addClass('active');
        $('.pic ul li.new span').animate({'height':'40px'},1500);
        var Nindex;
        $('.nextb').click(function(){
            Next();
        });
        function Next(){
            $('.pic ul li span').css('height','0px');
            Nindex=$('.nav .pic ul li.new').index();
            $('.oulbtn li').eq(Nindex).addClass('active').siblings().removeClass('active');
            $('.nav .pic ul li').eq(0).removeClass().addClass('late');
            Nindex++;
            $('.nav .pic ul li').removeClass();
            if(Nindex<length-1){
                $('.nav .pic ul li').eq(Nindex-1).removeClass().addClass('font');
                $('.nav .pic ul li').eq(Nindex).removeClass().addClass('new');
                $('.nav .pic ul li').eq(Nindex+1).removeClass().addClass('late');
                $('.pic ul li.new').find('span').animate({'height':'40px'},1300);
            }
            else if(Nindex==length-1){
                $('.nav .pic ul li').eq(Nindex).removeClass().addClass('new');
                $('.nav .pic ul li').eq(length-2).removeClass().addClass('font');
                $('.nav .pic ul li').eq(0).removeClass().addClass('late');
                $('.pic ul li.new').find('span').animate({'height':'40px'},1300);
            }
            else{
                Nindex=0;
                $('.nav .pic ul li').eq(Nindex).removeClass().addClass('new');
                $('.nav .pic ul li').eq(length-1).removeClass().addClass('font');
                $('.nav .pic ul li').eq(Nindex+1).removeClass().addClass('late');
                $('.pic ul li.new').find('span').animate({'height':'40px'},1300);
            }
        }
        //上
        $('.prevb').click(function(){
            prev();
        });
        autoPlay();
        function autoPlay(){
            timer=setInterval(function(){
                Next();
            },2300);
        }
        $('.nav').mouseover(function(){
            clearInterval(timer);
        });
        $('.nav').mouseout(function(){
            autoPlay()
        });
        function prev(){
            $('.pic ul li span').css('height','0px');
            var Nindex=$('.new').index();
            $('.oulbtn li').eq(Nindex).addClass('active').siblings().removeClass('active');
            $('.nav .pic ul li').eq(0).removeClass().addClass('late');
            if(Nindex>0){
                Nindex--;
                $('.nav .pic ul li').removeClass();
                $('.nav .pic ul li').eq(Nindex-1).removeClass().addClass('font');
                $('.nav .pic ul li').eq(Nindex).removeClass().addClass('new');
                $('.nav .pic ul li').eq(Nindex+1).removeClass().addClass('late');
                $('.pic ul li.new').find('span').animate({'height':'40px'},1200);
            }
            else{
                Nindex=length-1;
                $('.nav .pic ul li').eq(Nindex).removeClass().addClass('new');
                $('.nav .pic ul li').eq(Nindex-1).removeClass().addClass('font');
                $('.nav .pic ul li').eq(0).removeClass().addClass('late');
            }
        }

    })();
    //在线首播
    (function(){
        $('.title ul li').click(function(){
            $(this).addClass('hover').siblings().removeClass('hover');
            var index=$(this).index();
            $('.listimg ul li').each(function(i){
                $(this).find('._img').addClass('roty');
                setTimeout(function(){
                    $('.listimg ul li').eq(i).find('._img').attr('src','images/'+(index+1)+'-'+(i+1)+".jpg");
                },1000);
            });
            setTimeout(function(){
                $('.listimg ul li ._img').removeClass('roty');
            },1200);
        });
    })();
    //最新推荐音乐菜单
    (function(){
    var listTop=$('._list').offset().top-$('_list').height()/5*6;
    var listTime=null;
    var index;
    var off=true;
    $(window).scroll(function(){
        var scrolltop=$(document).scrollTop();
        if(scrolltop>listTop-600){
            index=0;
            clearInterval(listTime);
            listTime=setInterval(function(){
                $('#ul_left li').addClass('rotate');
                $('#ul_Middle li').addClass('rotate');
                $('#ul_right li').addClass('rotate');
                index++;
                if(index==$('.list_Left li').length){
                    clearInterval(listTime);
                }
            },30);
        }
        else{
            index=('#ul_left li').length;
            clearInterval(listTime);
            listTime=setInterval(function(){
                $('#ul_left li').removeClass('rotate');
                $('#ul_Middle li').removeClass('rotate');
                $('#ul_right li').removeClass('rotate');
                index--;
                if(index<0){
                    clearInterval(listTime);
                }
            },100);
        }
    });
 })();

    /*mv首播*/
    (function(){
        var timer=null;
        $(".MVlistimg ul li").hover(function(){
            $(this).find('.div').animate({'height':'100%'},400);
            $(this).find('.MVspan').css('opacity',0);
        },function(){
            $(this).find('.div').animate({'height':'0px'},400);
            $(this).find('.MVspan').css('opacity',1);
        });
        $('.MVfirstbread ul li').click(function(){
            var index=$(this).index();
           //
            $('.MVlistimg ul li').each(function(i){
                timer=setTimeout(function(){
                    $('.MVlistimg ul li').fadeOut();
                    $('.MVlistimg ul li').addClass('translate');
                    $('.MVlistimg ul li').eq(i).find('._img').attr('src','images/'+index+'/'+(i+1)+'.jpg');
                },1000);
           });
            setTimeout(function(){
                $('.MVlistimg ul li').fadeIn();
                $('.MVlistimg ul li').removeClass('translate');

            },1400);

        });
    })();
    //精选集
    (function(){
        var odiv=$('#JXDIV');
        var ouli=$('.JX_list').find('li');
        var oli=$('.JXol').find('li');
        var op=$('.JXpic').find('p');
        var array=['你就是我的小苹果','神曲虐我千百遍','我待神曲如初恋','草原风'];
        var INOW=0;
        var timer=null;
        oli.click(function(){
            INOW=$(this).index();

           fade();
        });
        auto();
        function auto(){
            timer=setInterval(function(){
                INOW++;
                INOW%=array.length;
                fade();
            },1500);
        }
        odiv.hover(function(){
            clearInterval(timer);
        },auto);
        fade();
        function fade(){
            ouli.each(function(i){
                if(i!=INOW){
                    ouli.eq(i).fadeOut().css("zindex",1);
                    oli.eq(i).removeClass('active');
                }
                else{
                    ouli.eq(i).fadeIn().css("zindex",2);
                    oli.eq(i).addClass('active');
                }
              op.text(array[INOW]);
            });
        }
    })();
    //歌曲分类
    (function(){
       tab();
       function tab(){
           var ouli=$('.star_ul li');
           var obox=$('.star_box');
           obox.hide().eq(0).show();
           ouli.each(function(index){
               $(this).mouseover(function(){
                   ouli.removeClass();
                   $(this).addClass('bord');
                   obox.hide().eq(index).show();
               });
           });
       }
    })();

    //折纸风云榜
    (function(){
        var owrap=$('.JXpic2');
        var adiv=owrap.find('div');
        var otitle=$('.JXpic2').find('h2');
        var i=0;
        var timer=null;
        var onoff=true;
        otitle.click(function(){
            clearInterval(timer);
            if(timer){
                return ;
            }
            if(onoff){
                i=0;
                timer=setInterval(function(){
                    adiv.eq(i).removeClass().addClass('open');
                    i++;
                    if(i==adiv.length){
                        clearInterval(timer);
                        timer=null;
                    }
                },150);
                onoff=false;
            }
            else{
                i=adiv.length;
                timer=setInterval(function(){
                    adiv.eq(i).removeClass().addClass('close');
                    i--;
                    if(i<0){
                        clearInterval(timer);
                        timer=null;
                    }
                },150);
                onoff=true;
            }
        });
    })();

});