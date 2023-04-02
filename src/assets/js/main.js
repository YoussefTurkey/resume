import $ from 'jquery';

$(document).ready(function () {
    
    $('#downlaod').on('click', function(){
        window.print();
    })

    // Selection requierd imgs
    let file;
        // ---- If user Drag file over dropArea ----
    $('.drag_area').on('dragenter', function(e){
        e.preventDefault();
        $('.drag_area').addClass('active')
    });

        // ---- If user leave file over dropArea ----
    $('.drag_area').on('dragleave', function(){
        $('.drag_area').removeClass('active')
    })

        // ---- If user drop file on dropArea ----
    $('.drag_area').on('drop', function(e){
        e.preventDefault();
        file = e.dataTransfer.files[0];
        console.log(file)
    })
    
})