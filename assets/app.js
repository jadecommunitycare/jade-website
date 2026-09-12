/* Jade Community Care — minimal interactions */
(function () {
  var pb = document.getElementById('printApp');
  if (pb) { pb.addEventListener('click', function () { window.print(); }); }

  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Pre-fill today's date on the signature field.
  var d = document.getElementById('sigdate');
  if (d && !d.value) {
    var n = new Date(), p = function (x) { return String(x).padStart(2, '0'); };
    d.value = n.getFullYear() + '-' + p(n.getMonth() + 1) + '-' + p(n.getDate());
  }

  // Require at least one shift checkbox before the application can be submitted.
  var form = document.querySelector('form[enctype="multipart/form-data"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      var shifts = form.querySelectorAll('input[name="Available shifts"]:checked');
      if (shifts.length === 0) {
        e.preventDefault();
        var first = form.querySelector('input[name="Available shifts"]');
        first.focus();
        first.closest('.field').scrollIntoView({ block: 'center' });
        alert('Please check at least one shift you are available to work.');
      }
    });
  }
})();
