function preify() {
  if ( $('#tmplPaging').css('display') == 'none' ) {
    setTimeout( preify, 1000);
  } else {
  $('#offline_occurrences li h2')
    .replaceWith(function() { return '<pre>' + $(this).text() + '</pre>' });
  }
}

$(document).ready( preify );
