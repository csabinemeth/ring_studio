<template>
  <div class="printPage">
    <button
      type="button"
      @click="navToCover"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-align-center"></i> Fedlap
    </button>
    <button
      type="button"
      class="btn btn-primary"
      id="printNavButton_Active"
    >
      <i class="fas fa-table"></i> Törzs
    </button>
    <button
      type="button"
      @click="navToSum"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-filter"></i> Összesítő
    </button>
      <div class="btn-group dropdown">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="printButton1" aria-haspopup="true" aria-expanded="false">
    <i class="fa-solid fa-layer-group"></i> Csoportosítás
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><i class="fa-solid fa-layer-group"></i> Csoport1</a>
    <a class="dropdown-item" href="#"><i class="fa-solid fa-layer-group"></i> Csoport2</a>
    <a class="dropdown-item" href="#"><i class="fa-solid fa-layer-group"></i> Csoport3</a>
  </div>
</div>
    <div class="btn-group dropdown">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="printButton1" aria-haspopup="true" aria-expanded="false">
    <i class="fas fa-print"></i> Nyomtatás
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><i class="fas fa-print"></i> Nyomtatás</a>
    <a class="dropdown-item" href="#"><i class="fas fa-print"></i> Nyomtatás fedlappal</a>
    <a class="dropdown-item" href="#"><i class="fas fa-print"></i> Nyomtatás összesítővel</a>
    <a class="dropdown-item" href="#"><i class="fas fa-print"></i> Nyomtatás fedlappal és összesítővel</a>
  </div>
</div>


 <div class="btn-group dropdown">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="printButton1" aria-haspopup="true" aria-expanded="false">
    <i class="fas fa-cog"></i> Törzs szerkesztése
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Terméknév</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Műszaki tartalom</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Mennyiség</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Mennyiségi egység</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Nettó egységár</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> Nettó összár</a>

    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"> Divíziók</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"> Kategória</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"> Termékfajta</a>
    <a class="dropdown-item" href="#"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"> Kép</a>
  </div>
</div>
    <div id="paper" class="printPaper">
      <div class="printHeader">
        <div class="logoHeader">
          <div class="ringLogo"></div>
          <h6 class="companyData">Ajánlatadó: Ring Studio Kft.</h6>
          <br />
          <h6 class="companyData">Cím: 9025 Győr, Bercsényi liget 26/b</h6>
          <br />
          <h6 class="companyData">Adószám: 23520451-2-08</h6>
        </div>
        <div class="titleHeader">
          <h1 class="printTitle">Ajánlat</h1>
          <h6 class="printTitle2">Tárgy: Lámpatestek, fényforrások</h6>
          <h6 class="printTitle3">Projekt megnevezése: P-20-14</h6>
          <h6 class="printDate">Dátum: 2022.01.21</h6>
        </div>
        <div class="dataHeader">
          <h6 class="printData">Ajánlatkérő: Sibalin Milán</h6>
          <br />
          <h6 class="printData">Szervezet: Sibalin Kft.</h6>
          <br />
          <h6 class="printData">Címe: 9082, Nyúl Fő út 3</h6>
          <br />
          <h6 class="printData">Telefon: +36204321123</h6>
          <br />
          <h6 class="printData">E-mail: sibalin.milan@gmail.com</h6>
        </div>
      </div>
      <table class="table table-bordered" id="printTable">
        <thead>
          <tr class="headerRow">
            <th scope="col">Sorszám</th>
            <th scope="col">Divizió</th>
            <th scope="col">Termékfajta</th>
            <th scope="col">Terméknév</th>
            <th scope="col">Műszaki tartalom</th>
            <th scope="col">Menny.</th>
            <th scope="col">M.e.</th>
            <th scope="col">Nettó egység ár</th>
            <th scope="col">Nettó össz.ár</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BÉ-L01</td>
            <td>Váró,mosdó</td>
            <td>Falikar</td>
            <td>falikar</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
            <td>35 480 Ft</td>
            <td>177 398 Ft</td>
          </tr>
          <tr>
            <td>BÉ-L02</td>
            <td>recepció</td>
            <td>függesztett lámpa</td>
            <td>függesztett lámpa</td>
            <td>Lámpatest arany színnel 1</td>
            <td>2</td>
            <td>db</td>
            <td>43 943 Ft</td>
            <td>87 885 Ft</td>
          </tr>
          <tr>
            <td>BÉ-L02</td>
            <td>recepció</td>
            <td>függesztett lámpa</td>
            <td>függesztett lámpa</td>
            <td>Lámpatest arany színnel 1</td>
            <td>2</td>
            <td>db</td>
            <td>43 943 Ft</td>
            <td>87 885 Ft</td>
          </tr>
          <tr>
            <td colspan="6">Szállítási költség (becsült összeg):</td>
            <td>1</td>
            <td>alk.</td>
            <td>90 000 Ft</td>
            <td>90 000 Ft</td>
          </tr>
          <tr>
            <th colspan="8" rowspan="2">
              Megjegyzés: szállítási határidő terméktől függően 6-8 hét is
              lehet, mely a gyártó felé adott rendeléstől számítandó! Becsatolt
              fotón a termék minden esetben a beárazott szímnebn és
              felszereltségben látható!
            </th>
            <th>Öszesen nettó:</th>
            <th>846 535 Ft</th>
          </tr>
          <tr>
            <th>Öszesen bruttó:</th>
            <th>1 075 099 Ft</th>
          </tr>
          
        </tbody>
      </table>
    </div>

   

  </div>
</template>

<script>
export default {
  name: "Ajanlat_print",
  path: "/ajanlat_print",

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

    navToCover(){
      this.$router.push("ajanlatFedlap_print");
    }, 
    navToSum(){
      this.$router.push("ajanlatSum_print");
    }

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

.printPaper{
  position: relative;
  top: 1vh;
  
}

#printNavButton{
  background-color: white;
  color: black;
  border: 0;
  position:relative;
  top: 4vh;
  font-size: 20px;
  left: 2vw;
}

#printNavButton_Active{
  background-color: white;
  color: #9ec520;
  border: 1px solid #9ec520;
  position:relative;
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

.printComment{
  font-size: 12px;
}


.companyData {
  position: relative;
  float: left;
  left: 5px;
  font-size: 13px;
  top: 1vh;
}

#printButton1 {
  position: relative;
  left: 22.3vw;
  top: -1vh;
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

.logoHeader {
  width: 27.3vw;
  border: 1px solid #e0e4e7;
  height: 19vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.titleHeader {
  width: 27.4vw;
  border: 1px solid #e0e4e7;
  height: 19vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.dataHeader {
  width: 27.3vw;
  border: 1px solid #e0e4e7;
  height: 19vh;
  left: 2vw;
  position: relative;
  top: 4vh;
}

.printTitle {
  position: relative;
  left: 8.5vw;
}

.printTitle2 {
  position: relative;
  left: 6vw;
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
</style>
