const MatematikaLibraries = {
    FPB: function(a, b) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    },
  
    KPK: function(a, b) {
      const fpb = this.FPB(a, b);
      return (a * b) / fpb;
    },
  
    Turunan: function(koefisien) {
      let hasil = [];
      const n = koefisien.length;
      for (let i = 0; i < n - 1; i++) {
        const pangkat = n - i - 1;
        const nilai = koefisien[i] * pangkat;
        if (nilai === 0) continue;
        const operator = nilai > 0 && hasil.length > 0 ? ' + ' : (nilai < 0 ? ' - ' : '');
        const absNilai = Math.abs(nilai);
        const x = pangkat - 1 > 0 ? `x${pangkat - 1 > 1 ? pangkat - 1 : ''}` : '';
        hasil.push(`${operator}${absNilai}${x}`);
      }
      return hasil.join('').trim();
    },
  
    Integral: function(koefisien) {
      let hasil = [];
      const n = koefisien.length;
      for (let i = 0; i < n; i++) {
        const pangkatBaru = n - i;
        const nilai = koefisien[i] / pangkatBaru;
        const operator = nilai >= 0 && hasil.length > 0 ? ' + ' : (nilai < 0 ? ' - ' : '');
        const absNilai = Math.abs(nilai);
        const x = `x${pangkatBaru > 1 ? pangkatBaru : ''}`;
        hasil.push(`${operator}${absNilai}${x}`);
      }
      hasil.push('+ C');
      return hasil.join('').trim();
    }
  };
  
  export default MatematikaLibraries;
  