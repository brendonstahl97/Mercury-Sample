$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('#pickup-modal').modal('show');

    $(".img-upload")[0].onchange = changeFilename;

});

function changeFilename() {
    let filename = this.value;

    const lastIndex = filename.lastIndexOf("\\");
    if (lastIndex >= 0) {
       filename = filename.substring(lastIndex + 1);
    }
    $(".filename")[0].innerHTML = filename;
}