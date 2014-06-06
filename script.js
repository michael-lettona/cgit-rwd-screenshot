(function() {

var init = function() {

    var form = document.getElementById('demo');
    var input = document.getElementById('url');
    var error = document.getElementById('error');
    var frames = document.getElementsByTagName('iframe');

    form.addEventListener('submit', function(e) {

        e.preventDefault();

        var url = input.value;

        if (url === '' || url.indexOf('.') === -1) {
            error.innerHTML = 'Is that a valid URL?';
            return;
        }

        error.innerHTML = '';

        if ( ! url.match(/^https?:\/\//) ) {
            url = 'http://' + url;
        }

        for (var i = 0, len = frames.length; i < len; i++) {
            frames[i].setAttribute('src', url);
        }

    });

};

document.addEventListener('DOMContentLoaded', init);

})();
