function savefrom(e) {
    if (!document.getElementById(e).value) {
        alert('File Kosong Ngapain Di download');
    } else {
        let t = document.getElementById(e).value;
        t = t.replace(/\n/g,"\r\n");
        const n = new Blob([t],{type:"text/plain"}),o = document.createElement("a");
        date = new Date;
        o.download = document.getElementById('namafile').value;
        o.href = window.URL.createObjectURL(n);
        o.target = "_blank";
        o.style.display = "none";
        document.body.appendChild(o);
        o.click();
        document.body.removeChild(o);
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle2="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
