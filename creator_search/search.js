$(document).ready(function() {
  $("#left-keyword").keyup(function() {
    var k = $(this).val();
    $("#lyricist-table > tbody > tr").hide();
    var temp = $("#lyricist-table > tbody > tr > td:nth-child(2n-1):contains('" + k + "')");

    $(temp).parent().show();
  })
})

$(document).ready(function() {
  $("#right-keyword").keyup(function() {
    var k = $(this).val();
    $("#lyricist-table > tbody > tr").hide();
    var temp = $("#lyricist-table > tbody > tr > td:nth-child(2n):contains('" + k + "')");

    $(temp).parent().show();
  })
})
