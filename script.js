let chartInstance;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculateBtn").addEventListener("click", handleCalculation);
});

function handleCalculation() {
  const age = parseInt(document.getElementById("age").value, 10);
  const heartRate = parseInt(document.getElementById("heartRate").value, 10);
  const rhrInput = parseInt(document.getElementById("restingHeartRate").value, 10);
  const activityLevel = document.getElementById("activityLevel").value;

  if (!validateInput(age, heartRate)) return;

  const mhr = calculateMHR(age);
  const rhr = rhrInput || getDefaultRHR(activityLevel);

  const zones = calculateZones(rhr, mhr);
  updateUI(mhr, zones);
  renderChart(zones);
}

function validateInput(age, heartRate) {
  if (!age || !heartRate || age <= 0 || heartRate <= 0) {
    alert("Harap masukkan usia dan detak jantung dengan benar.");
    return false;
  }
  return true;
}

function calculateMHR(age) {
  return 220 - age;
}

function getDefaultRHR(activityLevel) {
  return activityLevel === "athlete" ? 50 : 60;
}

function calculateTargetHeartRate(rhr, mhr, intensity) {
  return ((mhr - rhr) * intensity) + rhr;
}

const zones = [
  { name: "Very Light (Warm Up)", intensity: [0.5, 0.6], color: "#B3E5FC", description: "Zona untuk pemanasan, detak jantung paling rendah." },
  { name: "Light (Fat Burn)", intensity: [0.6, 0.7], color: "#81D4FA" , description: "Zona pembakaran lemak, cocok untuk latihan ringan." },
  { name: "Moderate (Aerobic)", intensity: [0.7, 0.8], color: "#4FC3F7" , description: "Zona meningkatkan stamina aerobik, latihan lebih intens." },
  { name: "Hard (Anaerobic)", intensity: [0.8, 0.9], color: "#29B6F6", description: "Zona untuk meningkatkan kekuatan dan daya tahan maksimal." },
  { name: "Maximum (VO2 Max)", intensity: [0.9, 1.0], color: "#039BE5", description: "Zona tertinggi, digunakan untuk latihan intensitas sangat tinggi." },
];

function calculateZones(rhr, mhr) {
  return zones.map(zone => {
    const minTHR = calculateTargetHeartRate(rhr, mhr, zone.intensity[0]);
    const maxTHR = calculateTargetHeartRate(rhr, mhr, zone.intensity[1]);
    return { ...zone, range: [Math.round(minTHR), Math.round(maxTHR)] };
  });
}

function updateUI(mhr, zones) {
  document.getElementById("mhrOutput").innerText = `MHR Anda: ${mhr} bpm`;

  // Update tabel output dengan warna
  const zoneTableBody = zones
    .map(zone => `
      <tr style="background-color: ${zone.color};">
        <td class="border px-4 py-2">${zone.name}</td>
        <td class="border px-4 py-2">${zone.range[0]} - ${zone.range[1]}</td>
      </tr>
    `)
    .join("");
  document.getElementById("zoneTableBody").innerHTML = zoneTableBody;

  // Deskripsi untuk setiap zona
  const zoneDescriptions = zones
    .map(zone => `
      <div class="mt-2">
        <strong>${zone.name}:</strong> ${zone.description}
      </div>
    `)
    .join("");
  document.getElementById("zoneDescriptions").innerHTML = zoneDescriptions;
}

function renderChart(zones) {
  const ctx = document.getElementById("myChart").getContext("2d");

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: zones.map(zone => zone.name),
      datasets: [
        {
          data: zones.map(zone => zone.range[1] - zone.range[0]),
          backgroundColor: zones.map(zone => zone.color),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
