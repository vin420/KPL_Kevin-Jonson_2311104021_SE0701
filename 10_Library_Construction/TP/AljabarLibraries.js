const AljabarLibraries = {
    /**
     * Menghitung akar-akar dari persamaan kuadrat ax² + bx + c = 0
     * @param {number[]} persamaan - [a, b, c]
     * @returns {number[]} - Akar-akar persamaan
     */
    AkarPersamaanKuadrat: function(persamaan) {
      const [a, b, c] = persamaan;
      const D = b * b - 4 * a * c;
  
      if (D < 0) {
        return []; // Tidak ada akar real
      }
  
      const akar1 = (-b + Math.sqrt(D)) / (2 * a);
      const akar2 = (-b - Math.sqrt(D)) / (2 * a);
  
      return [akar1, akar2];
    },
  
    /**
     * Menghitung kuadrat dari persamaan linier (a dan b)
     * @param {number[]} persamaan - [a, b]
     * @returns {number[]} - Hasil kuadrat dalam bentuk [a^2, 2ab, b^2]
     */
    HasilKuadrat: function(persamaan) {
      const [a, b] = persamaan;
      const a2 = a * a;
      const b2 = b * b;
      const ab2 = 2 * a * b;
  
      return [a2, ab2, b2];
    }
  };
  
  export default AljabarLibraries;
  