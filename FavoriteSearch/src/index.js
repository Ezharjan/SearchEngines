//改变样式
$(".cssnode").click(function () {
    $(this).toggleClass('hover');
    if ($(".cssnode.hover").length > 0) {
        $("#css").attr('href', 'css/block.css');
        $cookies("set", "css", 'ok');
        $("body").addClass('skin2');
    } else {
        $("#css").attr('href', '');
        $cookies("set", "css", '');
        $("body").removeClass('skin2');
    }

})
if ($cookies("get", "css") == 'ok') {
    $("#css").attr('href', 'css/block.css');
    $(".cssnode").toggleClass('hover');
    $("body").addClass('skin2');
}


function auto(tmp) {
    //自适应触发函数
    $(window).resize(function () {
        return tmp();
    });
    return tmp();
}
Search.init();

auto(function () {


    if ($(window).width() < 767) {
        $("body").addClass('phone').removeClass('pc');
    } else {
        $("body").addClass('pc').removeClass('phone');
    }
})
var num = 4; //左上角显示4个菜单
num++;
$(".categories a:nth-of-type(n+" + num + ")").wrapAll("<span class='morenav'></span>");
$(".searchtop .more").hover(function () {
    $(".searchtop").addClass('hover');
})
$(".searchtop").hover(function () { }, function () {
    $(this).removeClass('hover')
})

$("#btn_go,.history a").click(function () {

    if ($(window).width() < 767) {
        $(".sbox .navPanel #searches").removeClass('hover');
    }
})


$(".searchtop .nav,.menu .nav").click(function () {
    $(this).parent().toggleClass("hover");
    $(".history").css('visibility', 'hidden');
})
$(".menu a").click(function () {
    // $(".menu").toggleClass("hover");

})
$(".menu .bg,.searchtop .bg").click(function () {
    // $(this).parent().toggleClass("hover");

})
$(".searchtop a").click(function () {
    // $(".searchtop").toggleClass("hover");

})

$(".sbox .stype").click(function () {
    if ($(window).width() < 767) {
        $(".sbox .navPanel").toggleClass('hover')

    }
})
/*移动端鼠标离开搜索框，下拉搜索源隐藏*/
$(".sbox .navPanel").parent().hover(function () { }, function () {
    if ($(window).width() < 767) {
        $(".sbox .navPanel").removeClass('hover')
    }
})

$("#keyword").click(function () {
    //if($(window).width()<=767){
    //$(".history").css('visibility','visible');//搜索记录隐藏
    //}
    if ($.trim($(this).val()) != '') {
        getHotkeyword($.trim($(this).val()))
    }

})

$("#keyword").keyup(function (e) {
    if ($.trim($(this).val()) != '') {
        if (e.keyCode != 13) {
            getHotkeyword($.trim($(this).val()))
        } else {
            $("#kwhot").hide(); //回车热词隐藏
        }
        $(".history").css('visibility', 'hidden');
        if ($(window).width() < 767) {
            $(".sbox .navPanel #searches").removeClass('hover')
        }
    }
})


$("#keyword").change(function () {
    if ($.trim($(this).val()) != '') {
        //$("#btn_go").trigger('click');//改变输入框内容，搜索
        if ($(window).width() < 767) {
            $(".sbox .navPanel #searches").removeClass('hover')
        }
    }
})

$("body").click(function () {
    $("#kwhot").hide();
})
$(".searchboxs>div").hover(function () { }, function () {
    $("#kwhot").hide()
})


/*百度热词*/
function getHotkeyword(value) {
    var obj = $("#kwhot");
    $(obj).html('<ul></ul>')
    $.ajax({
        type: "GET",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        async: true,
        data: {
            wd: value
        },
        dataType: "jsonp",
        jsonp: "cb",
        success: function (res) {
            $(obj).find("ul").html("");
            hotList = res.s.length;
            if (hotList) {
                $(obj).show();
                for (var i = 0; i < hotList; i++) {
                    $(obj).find("ul").append("<li><span>" + (
                        i + 1
                    ) + "</span>" + res.s[i] + "</li>");
                    $(obj).find("ul li")
                        .eq(i)
                        .click(function () {
                            $('#keyword').val(this.childNodes[1].nodeValue);
                            $(obj).hide();
                            $("#btn_go").trigger('click');
                            // window.open(thisSearch + this.childNodes[1].nodeValue);

                        });
                    if (i === 0) {
                        $(obj).find("ul li")
                            .eq(i)
                            .css({
                                "border-top": "none"
                            });
                        $(obj).find(" ul span")
                            .eq(i)
                            .css({
                                "color": "#fff",
                                "background": "#f54545"
                            })
                    } else {
                        if (i === 1) {
                            $(obj).find(" ul span")
                                .eq(i)
                                .css({
                                    "color": "#fff",
                                    "background": "#ff8547"
                                })
                        } else {
                            if (i === 2) {
                                $(obj).find(" ul span")
                                    .eq(i)
                                    .css({
                                        "color": "#fff",
                                        "background": "#ffac38"
                                    })
                            }
                        }
                    }
                }
            } else {
                $(obj).hide();
            }

        },
        error: function (res) {
            console.log(res)
        }
    })
}