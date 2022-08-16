
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
})

$(document).ready(function() {
    $('#example').DataTable({
        "dom": '<"top">rt<"bottom"lfp><"clear">',
        "searching": false,
        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"]
        ]
    });
})
$(document).ready(function() {
    $('#example2').DataTable({
        "dom": '<"top">rt<"bottom"lfp><"clear">',
        "searching": false,
        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"]
        ]
    })
})

$(document).on('change', '.custom-file-input', function (event) {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})
