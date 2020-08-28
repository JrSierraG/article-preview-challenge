var $btnShare = document.querySelector("#btnShare");
var $modal = document.querySelector("#modal");

$btnShare.addEventListener("click", () => {
    if ($btnShare.classList.contains("activate")) {
        $modal.classList.remove("show");
        $btnShare.classList.remove("activate");
    } else {
        $modal.classList.add("show");
        $btnShare.classList.add("activate");
    }
});