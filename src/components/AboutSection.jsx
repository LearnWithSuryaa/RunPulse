import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-green-50 to-green-100 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-12 md:mb-16">
          Tentang Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4 md:mb-6">
              Tujuan Program
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Program ini dirancang untuk membantu Anda memahami zona detak
              jantung dengan lebih baik. Dengan wawasan ini, Anda dapat merancang
              latihan yang efektif, meningkatkan performa olahraga, dan
              meminimalkan risiko cedera.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4 md:mb-6">
              Manfaat
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Meningkatkan daya tahan aerobik untuk aktivitas jangka panjang.</li>
              <li>Mendukung metabolisme lemak agar tubuh lebih efisien.</li>
              <li>Memaksimalkan pembakaran kalori selama latihan.</li>
              <li>Meningkatkan kekuatan otot dan kecepatan Anda.</li>
              <li>Membantu mencegah overtraining dan cedera otot.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4 md:mb-6">
              Pentingnya Zona
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Memahami zona detak jantung memungkinkan Anda menyesuaikan intensitas
              latihan dengan tujuan kebugaran pribadi. Setiap zona dirancang untuk
              memberikan manfaat spesifik yang mendukung kesehatan dan performa optimal.
            </p>
          </div>

          {/* Full-Width Card */}
          <div className="bg-gradient-to-br from-white to-green-50 p-8 sm:p-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500 md:col-span-2 lg:col-span-3">
            <h3 className="text-3xl md:text-4xl font-semibold text-green-800 mb-6 md:mb-10 text-center">
              Zona Detak Jantung
            </h3>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <ul className="space-y-6 text-gray-700 text-base md:text-lg flex-1">
                <li>
                  <strong className="text-green-800">Zona 1 (50%-60% MHR):</strong> Ideal
                  untuk pemulihan. Zona ini membantu memperbaiki sirkulasi darah,
                  melemaskan otot, dan mengurangi tingkat stres setelah latihan berat.
                </li>
                <li>
                  <strong className="text-green-800">Zona 2 (60%-70% MHR):</strong> Fokus
                  pada peningkatan daya tahan aerobik dan efisiensi metabolisme lemak.
                  Sangat cocok untuk sesi latihan dengan durasi panjang.
                </li>
                <li>
                  <strong className="text-green-800">Zona 3 (70%-80% MHR):</strong>
                  Mengasah stamina dan membantu tubuh menghadapi intensitas latihan lebih
                  tinggi tanpa cepat kelelahan.
                </li>
              </ul>
              <ul className="space-y-6 text-gray-700 text-base md:text-lg flex-1">
                <li>
                  <strong className="text-green-800">Zona 4 (80%-90% MHR):</strong>
                  Bertujuan meningkatkan kekuatan dan kecepatan dengan mendorong tubuh
                  melampaui ambang laktat.
                </li>
                <li>
                  <strong className="text-green-800">Zona 5 (90%-100% MHR):</strong> Zona
                  maksimal yang dirancang untuk latihan intensitas tinggi dan sprint.
                  Fokusnya adalah meningkatkan kekuatan eksplosif dan kapasitas maksimal
                  tubuh Anda.
                </li>
                <li>
                  <strong className="text-green-800">Catatan:</strong> Untuk hasil
                  terbaik, gunakan perangkat pengukur detak jantung agar Anda dapat
                  menentukan zona dengan akurasi tinggi.
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Information Card */}
          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500 md:col-span-2 lg:col-span-3">
            <h3 className="text-3xl md:text-4xl font-semibold text-green-800 mb-4 md:mb-6 text-center">
              Cara Membaca Hasil Kalkulasi
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Untuk menghitung zona detak jantung Anda, pertama-tama hitung <strong>MHR
              (Maximum Heart Rate)</strong> menggunakan rumus sederhana:
              <code>220 - usia Anda</code>. Setelah mendapatkan MHR, kalikan dengan
              persentase masing-masing zona untuk menentukan batas bawah dan atas detak
              jantung Anda dalam zona tersebut. Contoh:
            </p>
            <ul className="list-decimal list-inside text-gray-700 space-y-3 mt-4">
              <li>Jika usia Anda 30 tahun, MHR = 220 - 30 = 190 bpm.</li>
              <li>Zona 2 (60%-70%): 190 x 0.6 = 114 bpm dan 190 x 0.7 = 133 bpm. Jadi, zona ini adalah 114-133 bpm.</li>
              <li>Gunakan perangkat pengukur detak jantung untuk memantau intensitas latihan Anda secara real-time.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
