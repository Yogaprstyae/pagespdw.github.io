document.addEventListener("DOMContentLoaded", function () {
    // Greeting
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greeting = "";
    if (currentHour < 12) {
    greeting = "Good Morning! Yoga!";
    } else if (currentHour < 18) {
    greeting = "Good Afternoon! Yoga";
    } else {
    greeting = "Good Evening! Yoga";
    } 
    document.getElementById("greeting").textContent = greeting;
    // Current date and time
    setInterval(function () {
    var now = new Date();
    var dateTime = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });
    document.getElementById("currentDateTime").textContent =
        now.toDateString() + " " + dateTime;
},1000);
});

        function updateClock() {
            var now = new Date();
            var hari = getNamaHari(now.getDay());
            var bulan = getNamaBulan(now.getMonth());
            var jam = now.getHours();
            var menit = now.getMinutes();
            var detik = now.getSeconds();
    
            jam = padZero(jam);
            menit = padZero(menit);
            detik = padZero(detik);
    
            var waktu = jam + ":" + menit + ":" + detik;
            var waktuLengkap = hari + ", " + bulan + " " + now.getDate() + ", " + waktu;
    
            document.getElementById("clock").textContent = waktuLengkap;
        }
    
        function padZero(value) {
            return value < 10 ? "0" + value : value;
        }
    
        function getNamaHari(day) {
            var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            return namaHari[day];
        }
    
        function getNamaBulan(month) {
            var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            return namaBulan[month];
        }
    
        setInterval(updateClock, 1000);