let chartInstance; // Simpan instance chart untuk diperbarui

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculateBtn").addEventListener("click", handleCalculation);
});

/**
 * Fungsi utama untuk menangani perhitungan dan rendering
 */
function handleCalculation() {
  const age = parseInt(document.getElementById("age").value, 10);
  const heartRate = parseInt(document.getElementById("heartRate").value, 10);

  if (!validateInput(age, heartRate)) return;

  const mhr = calculateMHR(age);
  const percentage = calculatePercentage(heartRate, mhr);
  const { zone, zoneColor } = determineHeartRateZone(percentage);

  updateUI(mhr, zone, zoneColor);
  renderChart(percentage, zoneColor);
}

/**
 * Validasi input dari user
 */
function validateInput(age, heartRate) {
  if (!age || !heartRate) {
    alert("Harap masukkan usia dan detak jantung dengan benar.");
    return false;
  }
  return true;
}

/**
 * Hitung nilai MHR
 */
function calculateMHR(age) {
  return 220 - age;
}

/**
 * Menghitung persentase detak jantung terhadap MHR
 */
function calculatePercentage(heartRate, mhr) {
  return (heartRate / mhr) * 100;
}

/**
 * Tentukan zona berdasarkan persentase detak jantung
 */
function determineHeartRateZone(percentage) {
  if (percentage >= 90) return { zone: "Zona 5: 90%-100% (Sprint)", zoneColor: "red" };
  if (percentage >= 80) return { zone: "Zona 4: 80%-90% (Intensitas Tinggi)", zoneColor: "orange" };
  if (percentage >= 70) return { zone: "Zona 3: 70%-80% (Meningkatkan Stamina)", zoneColor: "yellow" };
  if (percentage >= 60) return { zone: "Zona 2: 60%-70% (Daya Tahan)", zoneColor: "green" };
  return { zone: "Zona 1: 50%-60% (Pemulihan)", zoneColor: "lightblue" };
}

/**
 * Perbarui UI dengan data hasil kalkulasi
 */
function updateUI(mhr, zone, zoneColor) {
  document.getElementById("mhrOutput").innerText = `MHR Anda: ${mhr} bpm`;
  document.getElementById("zoneOutput").innerText = zone;
}

/**
 * Render atau perbarui chart menggunakan data
 */
function renderChart(percentage, zoneColor) {
  const ctx = document.getElementById("myChart").getContext("2d");

  if (chartInstance) {
    chartInstance.data.datasets[0].data = [percentage, 100 - percentage];
    chartInstance.data.datasets[0].backgroundColor = [zoneColor, "#ddd"];
    chartInstance.update();
  } else {
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Zona Anda", "Lainnya"],
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: [zoneColor, "#ddd"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
