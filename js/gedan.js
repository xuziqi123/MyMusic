/**
 * Created by admin on 2016/9/9.
 */
$(function(){
    /**�赥ҳ����߲˵���**/
    (function(){
        $(".GD_span").click(function(){
             $(this).parent('li').find('.con').slideToggle('slow');
            $(this).parent('li').siblings().find('.con').slideUp('slow');
        });
    })();
});