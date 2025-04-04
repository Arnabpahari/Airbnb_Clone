// document.querySelectorAll('input[type=checkbox][data-toggle="toggle"]').forEach(function(ele) {
//     ele.bootstrapToggle();
// });

$('input[data-toggle="toggle"]').bootstrapToggle({
    on: 'On',
    off: 'Off',
});