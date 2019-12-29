
$('#toRight').click(function (){
    $('#right>select').append($('#left>select>option:selected'));
});
$('#toLeft').click(function (){
$('#left>select').append($('#right>select>option:selected'));
});
$('#toALLRight').click(function(){
    $('#right>select').append($('#left>select>option'));
});
$('#toALLletf').click(function (){
    $('#left>select').append($('#right>select>option'));
});