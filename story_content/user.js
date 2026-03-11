function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ibevZwQUK2":
        Script1();
        break;
      case "6BOccb7ZVHv":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musical.mp3";
audio.load();
audio.play();
}

function Script2()
{
  // Storyline Execute JavaScript
var player = GetPlayer();

// Sesuai nama variabel Storyline
var nama = player.GetVar("nama");         // variabel nama
var nomor_urut = player.GetVar("nomor");       // variabel nomor urut
var nilai = player.GetVar("nilai");       // variabel nilai

// Menyiapkan data sebagai form-urlencoded
var params = new URLSearchParams();
params.append('nama', nama);
params.append('nomor', nomor_urut);
params.append('nilai', nilai);

// URL Web Apps Script
var url = "https://script.google.com/macros/s/AKfycbx6H3yZ7B9UE6KW-AnFyMaE7h29mB-WvQ5vvZ8nM8cAQqaI-tcfCfbca8ZIo5afUJ3w/exec";

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: params.toString()
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Server response:", data);
  // opsional: set variabel Storyline sesuai respon
  if (data && data.status === "success") {
    player.SetVar("kirim_status", "tersimpan");
  } else {
    player.SetVar("kirim_status", "gagal");
  }
})
.catch(function(err) {
  console.error("Error mengirim ke Google:", err);
  player.SetVar("kirim_status", "gagal");
});
}

