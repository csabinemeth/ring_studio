<template>
  <div class="printPage">
  
    <div id="paper" class="printPaper">

    <div class="btn-group dropdown">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        id="printButtonSzamla"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-print"></i> Nyomtatás
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#"
          ><i class="fas fa-print"></i> Nyomtatás</a
        >
        <a class="dropdown-item" href="#"
          ><i class="fas fa-print"></i> Nyomtatás fedlappal</a
        >
        <a class="dropdown-item" href="#"
          ><i class="fas fa-print"></i> Nyomtatás összesítővel</a
        >
        <a class="dropdown-item" href="#"
          ><i class="fas fa-print"></i> Nyomtatás fedlappal és összesítővel</a
        >
      </div>
    </div>
      <div class="printHeader">
        <div class="logoHeaderSzamla">
          <div class="ringLogo"></div>
          <h6 class="companyData">Eladó: Ring Studio Kft.</h6>
          <br />
          <h6 class="companyData">Cím: 9025 Győr, Bercsényi liget 26/b</h6>
          <br />
          <h6 class="companyData">Adószám: 23520451-2-08 </h6>
          <br/>
          <h6 class="companyData">Bankszámlaszám: 11773377-00000000 </h6>
          
        </div>
        <div class="titleHeaderSzamla">
          <h2 class="printTitleSzamla">Számla</h2>
          <h6 class="printTitleSzamla2">Projekt kód: 123456</h6>
          <h6 class="printTitle3">Projekt megnevezése: P-20-14</h6>
          <h6 class="printDate">Dátum: 2022.01.21</h6>
       
          <h6 class="printBank">Bankszámlaszám: 11773377-00000000 </h6>
        </div>
        <div class="dataHeaderSzamla">
          <h6 class="printData">Vevő: Sibalin Milán</h6>
          <br />
        </div>
      </div>
    
      <table class="table table-bordered" id="printTable">
        <thead>
          <tr class="headerRow">
            <th scope="col">Megnevezés</th>
            <th scope="col">Mennyiség</th>
            <th scope="col">Egységár</th>
            <th scope="col">ÁFA</th>
            <th scope="col">ÁFA érték</th>
            <th scope="col">Bruttó ár</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>Falikar</td>
            <td class="mennyisegi-egyseg">5 db</td>
            <td class="right">30 000 Ft</td>
            <td class="right">27%</td>
            <td class="right">8100 Ft</td>
            <td class="right">38 100 Ft</td>
          </tr>
          <tr>
          
            <td>Falikar</td>
            <td class="mennyisegi-egyseg">5 db</td>
            <td class="right">30 000 Ft</td>
            <td class="right">27%</td>
            <td class="right">8100 Ft</td>
            <td class="right">38 100 Ft</td>
          </tr>
          <tr>
        
            <td>Falikar</td>
            <td class="mennyisegi-egyseg">5 db</td>
            <td class="right">30 000 Ft</td>
            <td class="right">27%</td>
            <td class="right">8100 Ft</td>
           <td class="right">38 100 Ft</td>
          </tr>
          <tr>
          
            <td>Falikar</td>
            <td class="mennyisegi-egyseg">5 db</td>
            <td class="right">30 000 Ft</td>
            <td class="right">27%</td>
            <td class="right">8100 Ft</td>
            <td class="right">38 100 Ft</td>
          </tr>
          <tr>
          <th colspan="5">Kedvezmény:</th>
          <th class="right">- 50 000 Ft</th>
          </tr>
          <tr>
          <th colspan="5">Nettó  összesen:</th>
          <th class="right">120 000 Ft</th>
          </tr>
            <tr>
          <th colspan="5">Nettó előleg:</th>
          <th class="right">0 Ft</th>
          </tr>
           <tr>
          <th colspan="5">ÁFA:</th>
          <th class="right">32 400 Ft</th>
          </tr>
           <tr>
          <th colspan="5">Bruttó összesen:</th>
          <th class="right">152 400 Ft</th>
          </tr>
          <tr>
            <td colspan="7" class="printComment">
              Ajánlatunk a teljes ajánlati mennyiség 30 napon belüli rendelése
              esetére érvényes. Amennyiben nem a teljes mennyiség kerül
              megrendelésre, vagy termékek kiváltása szükséges abban az esetben
              az árak változhatnak. Pót rendelés esetén az ajánlatban szereplő
              árakat nem tudjuk garantálni, illetve a szállítási határidő gyári
              készleteket figyelembe véve eltérő lehet a korábban vásárolt
              tétellel összehasonlítva. A termékeknél feltüntetett egységárak
              tájékoztató jellegűek, szállítási költséget nem tartalmaznak.
              Ajánlatunk a teljes ajánlati mennyiség 30 napon belüli rendelése
              esetére érvényes. Amennyiben nem a teljes mennyiség kerül
              megrendelésre, vagy termékek kiváltása szükséges abban az esetben
              az árak változhatnak. Pót rendelés esetén az ajánlatban szereplő
              árakat nem tudjuk garantálni, illetve a szállítási határidő gyári
              készleteket figyelembe véve eltérő lehet a korábban vásárolt
              tétellel összehasonlítva.A termékeknél feltüntetett egységárak
              tájékoztató jellegűek, szállítási költséget nem tartalmaznak.
              Ajánlatunk a teljes ajánlati mennyiség 30 napon belüli rendelése
              esetére érvényes. Amennyiben nem a teljes mennyiség kerül
              megrendelésre, vagy termékek kiváltása szükséges abban az esetben
              az árak változhatnak. Pót rendelés esetén az ajánlatban szereplő
              árakat nem tudjuk garantálni, illetve a szállítási határidő gyári
              készleteket figyelembe véve eltérő lehet a korábban vásárolt
              tétellel összehasonlítva.A termékeknél feltüntetett egységárak
              tájékoztató jellegűek, szállítási költséget nem tartalmaznak.
              Ajánlatunk a teljes ajánlati mennyiség 30 napon belüli rendelése
              esetére érvényes. Amennyiben nem a teljes mennyiség kerül
              megrendelésre, vagy termékek kiváltása szükséges abban az esetben
              az árak változhatnak. Pót rendelés esetén az ajánlatban szereplő
              árakat nem tudjuk garantálni, illetve a szállítási határidő gyári
              készleteket figyelembe véve eltérő lehet a korábban vásárolt
              tétellel összehasonlítva.A termékeknél feltüntetett egységárak
              tájékoztató jellegűek, szállítási költséget nem tartalmaznak.
              Ajánlatunk a teljes ajánlati mennyiség 30 napon belüli rendelése
              esetére érvényes.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

   
  </div>
</template>

<script>
export default {
  name: "Szamla_print",
  path: "/szamla_print",

  methods: {
    print() {
      var prtContent = document.getElementById("paper");
      var WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.document.write(print);
      WinPrint.close();
    },

    navToBecslesCover() {
      this.$router.push("becslesCover_print");
    },
    navToBecslesSum() {
      this.$router.push("becslesSum_print");
    },
  },
};
</script>

<style>
.printPage {
  width: 90vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.printPaper {
  position: relative;
  top: 1vh;
}

#printNavButton {
  background-color: white;
  color: black;
  border: 0;
  position: relative;
  top: 4vh;
  font-size: 20px;
  left: 2vw;
}

#printNavButton_Active {
  background-color: white;
  color: #9ec520;
  border: 1px solid #9ec520;
  position: relative;
  top: 4vh;
  font-size: 20px;
  left: 2vw;
}

#kep1 {
  background-image: url("../../assets/lamp.png");
  background-size: cover;
  width: 80px;
  height: 60px;
}

#kep2 {
  background-image: url("../../assets/lampa.png");
  background-size: cover;
  width: 80px;
  height: 90px;
}

#kep3 {
  background-image: url("../../assets/lampa_fuggesztett.png");
  background-size: cover;
  width: 80px;
  height: 90px;
}

#formInput {
  width: 30px;
}

#printTable {
  width: 82vw;
  position: relative;
  left: 2vw;
  top: 4vh;
  font-size: 14px;
}

.printData {
  position: relative;
  float: right;
  right: 10px;
  font-size: 13px;
  top: 1vh;
}

.printComment {
  font-size: 12px;
}

.companyData {
  position: relative;
  float: left;
  left: 5px;
  font-size: 8px;
  top: 1vh;
}

#printButtonSzamla {
    position: relative;
  left: 75vw;
  top: -3vh;
  background-color: #9ec520;
  border: 0;
  margin-right: 10px;
}

.printHeader {
  display: flex;
}

.ringLogo {
  background-image: url("../../assets/logo.png");
  background-size: cover;
  width: 110px;
  height: 50px;
}

.logoHeaderSzamla {
  width: 27.3vw;
  border: 1px solid #e0e4e7;
  height: 25vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.titleHeaderSzamla {
  width: 27.4vw;
  border: 1px solid #e0e4e7;
  height: 25vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.dataHeaderSzamla{
  width: 27.3vw;
  border: 1px solid #e0e4e7;
  height: 25vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.printTitleSzamla {
  position: relative;
  left: 9vw;
}

.printTitleSzamla2 {
  position: relative;
  left: 8.5vw;
  font-size: 13px;
}

.printTitle3 {
  position: relative;
  left: 6.5vw;
  font-size: 13px;
}

.printDate {
  font-size: 13px;
  position: relative;
  left: 9vw;
}

.printBank {
  font-size: 13px;
  position: relative;
  left: 6vw;
}
</style>
