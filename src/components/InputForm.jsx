import React, { useState } from "react";
import { motion } from "framer-motion";

const InputForm = ({ onCalculate }) => {
  const [age, setAge] = useState("");
  const [restingHeartRate, setRestingHeartRate] = useState("");
  const [exerciseHeartRate, setExerciseHeartRate] = useState("");

  const handleScroll = () => {
    const target = document.getElementById("output");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUseAverageRHR = () => {
    if (age && age > 0) {
      const averageRHR =
        age <= 20
          ? 65
          : age <= 30
          ? 68
          : age <= 40
          ? 72
          : age <= 50
          ? 75
          : age <= 60
          ? 78
          : 80; // Default untuk usia > 60

      setRestingHeartRate(averageRHR);
    } else {
      alert(
        "Harap masukkan usia terlebih dahulu untuk menghitung RHR rata-rata."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age || age <= 0) {
      alert("Harap masukkan usia yang valid.");
      return;
    }

    if (!restingHeartRate || restingHeartRate <= 0) {
      alert("Harap masukkan Resting Heart Rate (RHR) yang valid.");
      return;
    }

    if (!exerciseHeartRate || exerciseHeartRate <= 0) {
      alert("Harap masukkan detak jantung latihan yang valid.");
      return;
    }

    const data = {
      age: parseInt(age, 10),
      restingHeartRate: parseInt(restingHeartRate, 10),
      exerciseHeartRate: parseInt(exerciseHeartRate, 10),
    };

    // Mengirimkan data ke fungsi onCalculate untuk proses lebih lanjut
    onCalculate(data);

    // Scroll to the output section after submission
    handleScroll();
  };

  return (
    <motion.section
      id="calculator"
      className="py-12 bg-green-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Masukkan Informasi Anda
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="age" className="block text-lg font-medium mb-2">
                Usia Anda:
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan usia Anda"
                required
              />
            </div>
            <div>
              <label
                htmlFor="restingHeartRate"
                className="block text-lg font-medium mb-2"
              >
                Resting Heart Rate (RHR):
              </label>
              <input
                type="number"
                id="restingHeartRate"
                value={restingHeartRate}
                onChange={(e) => setRestingHeartRate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan RHR Anda"
                required
              />
              <p className="text-sm text-gray-600 mt-2">
                * Jika tidak tahu, Anda dapat menghitung RHR dengan mengukur
                detak jantung saat istirahat total (contoh: pagi hari setelah
                bangun tidur).
              </p>
              <button
                type="button"
                onClick={handleUseAverageRHR}
                className="mt-2 text-green-600 underline hover:text-green-800"
              >
                Gunakan RHR rata-rata berdasarkan usia
              </button>
            </div>
            <div>
              <label
                htmlFor="exerciseHeartRate"
                className="block text-lg font-medium mb-2"
              >
                Detak Jantung Saat Latihan (bpm):
              </label>
              <input
                type="number"
                id="exerciseHeartRate"
                value={exerciseHeartRate}
                onChange={(e) => setExerciseHeartRate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan detak jantung Anda"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Hitung Zona Heart Rate
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default InputForm;
