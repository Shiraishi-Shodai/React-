$("#push").on("click", () => {
    let memo = $("[name = 'memo']");
    // console.log(memo.val());
    $("ul").append(`<li>${memo.val()}<button type="button" class="remove">削除</button></li>`);
    memo.val(null);

});

$("ul").on("click", ".remove", function () {
    console.log("通過");
    console.log($(this).parent().remove());
});


