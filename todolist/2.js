/**
 * Created by darling on 2017/10/7.
 */
$(document).ready(function () {
    // $(".enter").change(function (event) {
    //     if ($(".enter").value != "") {
    //         var todo_item = $("<li></li>").text($(".enter").val());
    //         if (event.keyCode == 13) {
    //             $(".todolist").append(todo_item);
    //             $(".enter").val("");
    //
    //         }
    //     }
    // })

    $(".enter").keyup(function (event) {
        var todo_item = $("<li></li>").text($(this).val());

        if(event.keyCode == 13 && $(this).val() != ""){
                $(".todolist").append(todo_item);
                $(this).val("");
                $(this).css("box-shadow","none");
                $("footer").css("display","block");

                //update_footer();
            var i=$(".todolist").children("li").length;
            var oldHeight=$("section").height();
            var newHeight=oldHeight+20*i;
            $("#num").text(i);
            if("li"){
                var close = $("<span></span>");
                $(".todolist li").append(close);
                $(".todolist span").addClass("close");
        }

        }
    });


    $(".close")

    $("#active").click(function () {

    });

    $("#completed").click(function () {

    });
});