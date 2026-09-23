window.onload = function() {
    visaHem();
};

function visaHem() {
    document.getElementById("hem").classList.remove("dold");
    document.getElementById("om-oss").classList.add("dold");
}

function visaOmOss() {
    document.getElementById("hem").classList.add("dold");
    document.getElementById("om-oss").classList.remove("dold");
}

