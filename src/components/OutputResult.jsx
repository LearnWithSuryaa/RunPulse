import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

// Registrasi elemen Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const OutputResult = ({ data }) => {
  const [zones, setZones] = useState([]);
  const [mhr, setMhr] = useState(0);

  useEffect(() => {
    if (!data) return;
    console.log("Data diterima oleh OutputResult:", data);

    const { age, restingHeartRate } = data;

    const mhrCalculated = 220 - age;
    setMhr(mhrCalculated);

    const calculatedZones = calculateZones(restingHeartRate, mhrCalculated);
    setZones(calculatedZones);
  }, [data]);

  const calculateTargetHeartRate = (rhr, mhr, intensity) => {
    return Math.round((mhr - rhr) * intensity + rhr);
  };

  const calculateZones = (rhr, mhr) => {
    const zones = [
      {
        name: "Very Light (Warm Up)",
        intensity: [0.5, 0.6],
        color: "#A8D5BA",
        description: "Zona untuk pemanasan, detak jantung paling rendah.",
      },
      {
        name: "Light (Fat Burn)",
        intensity: [0.6, 0.7],
        color: "#81C784",
        description: "Zona pembakaran lemak, cocok untuk latihan ringan.",
      },
      {
        name: "Moderate (Aerobic)",
        intensity: [0.7, 0.8],
        color: "#66BB6A",
        description: "Zona meningkatkan stamina aerobik, latihan lebih intens.",
      },
      {
        name: "Hard (Anaerobic)",
        intensity: [0.8, 0.9],
        color: "#43A047",
        description: "Zona untuk meningkatkan kekuatan dan daya tahan maksimal.",
      },
      {
        name: "Maximum (VO2 Max)",
        intensity: [0.9, 1.0],
        color: "#388E3C",
        description: "Zona tertinggi, digunakan untuk latihan intensitas sangat tinggi.",
      },
    ];

    return zones.map((zone) => {
      const minTHR = calculateTargetHeartRate(rhr, mhr, zone.intensity[0]);
      const maxTHR = calculateTargetHeartRate(rhr, mhr, zone.intensity[1]);
      return { ...zone, range: [minTHR, maxTHR] };
    });
  };

  const chartData = {
    labels: zones.map((zone) => zone.name),
    datasets: [
      {
        data: zones.map((zone) => zone.range[1] - zone.range[0]),
        backgroundColor: zones.map((zone) => zone.color),
      },
    ],
  };

  if (!data) {
    return (
      <p className="text-center text-gray-500">
        Tidak ada data untuk ditampilkan. Harap isi formulir terlebih dahulu.
      </p>
    );
  }

  return (
    <motion.section
      id="output"
      className="py-12 bg-green-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
            MHR Anda: {mhr} bpm
          </h3>

          <div className="w-full h-72 mb-8">
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        const zone = zones[tooltipItem.dataIndex];
                        return `${zone.name}: ${zone.range[0]} - ${zone.range[1]} bpm`;
                      },
                    },
                  },
                },
              }}
            />
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="table-auto w-full text-left text-sm">
              <thead>
                <tr className="bg-green-100">
                  <th className="px-6 py-4 text-green-950">Zona</th>
                  <th className="px-6 py-4 text-green-950">
                    Rentang Detak Jantung (bpm)
                  </th>
                  <th className="px-6 py-4 text-green-950">Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((zone, index) => (
                  <tr
                    key={index}
                    className="border-b"
                    style={{ backgroundColor: zone.color }}
                  >
                    <td className="px-6 py-4 font-medium text-green-950">
                      {zone.name}
                    </td>
                    <td className="px-6 py-4 font-medium text-green-950">
                      {zone.range[0]} - {zone.range[1]}
                    </td>
                    <td className="px-6 py-4 font-medium text-green-950">
                      {zone.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OutputResult;
