jQuery(document).ready(function () {


    /*
     jQuery Colorbox language configuration
     language: German (de)
     translated by: wallenium
     */
    jQuery.extend(jQuery.colorbox.settings, {
        current: "Bild {current} von {total}",
        previous: "Zurück",
        next: "Vor",
        close: "Schließen",
        xhrError: "Dieser Inhalt konnte nicht geladen werden.",
        imgError: "Dieses Bild konnte nicht geladen werden.",
        slideshowStart: "Slideshow starten",
        slideshowStop: "Slideshow anhalten"
    });

    $('.table-responsive table').DataTable({
        responsive: true,
        pageLength: -1,
        lengthMenu: -1,
        "language": {
            "sEmptyTable":      "Keine Daten in der Tabelle vorhanden",
            "sInfo":            "_START_ bis _END_ von _TOTAL_ Einträgen",
            "sInfoEmpty":       "0 bis 0 von 0 Einträgen",
            "sInfoFiltered":    "(gefiltert von _MAX_ Einträgen)",
            "sInfoPostFix":     "",
            "sInfoThousands":   ".",
            "sLengthMenu":      "_MENU_ Einträge anzeigen",
            "sLoadingRecords":  "Wird geladen...",
            "sProcessing":      "Bitte warten...",
            "sSearch":          "Suchen",
            "sZeroRecords":     "Keine Einträge vorhanden.",
            "oPaginate": {
                "sFirst":       "Erste",
                "sPrevious":    "Zurück",
                "sNext":        "Nächste",
                "sLast":        "Letzte"
            },
            "oAria": {
                "sSortAscending":  ": aktivieren, um Spalte aufsteigend zu sortieren",
                "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
            }
        }
    });

    $('a.lightbox').colorbox({
        'height': '100%'

    });

});

