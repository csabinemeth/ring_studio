<template>
  <div class="printPage">
    <button
      type="button"
      @click="navToBecslesCover"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-align-center"></i> Fedlap
    </button>
    <button type="button" class="btn btn-primary" id="printNavButton_Active">
      <i class="fas fa-table"></i> Törzs
    </button>
    <button
      type="button"
      @click="navToBecslesSum"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-filter"></i> Összesítő
    </button>
    <div id="paper" class="printPaper">
      <div class="printHeader">
        <div class="logoHeader">
          <div class="ringLogo"></div>
          <h6 class="companyData">Eladó: Ring Studio Kft.</h6>
          <br />
          <h6 class="companyData">Cím: 9025 Győr, Bercsényi liget 26/b</h6>
          <br />
          <h6 class="companyData">Adószám: 23520451-2-08</h6>
        </div>
        <div class="titleHeader">
          <h2 class="printTitleTb">Katalógus</h2>
          <h6 class="printTitle3">Projekt megnevezése: P-20-14</h6>
          <h6 class="printDate">Dátum: 2022.01.21</h6>
        </div>
        <div class="dataHeader">
          <h6 class="printData">Megbízó: Sibalin Milán</h6>
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
        </thead>
        <tbody>
          <tr>
            
            <th class="catalogCell">Falikar
            <div class="catalogPic"></div>
            </th>
            <th class="catalogCell" >Függesztett lámpa 
            <div class="catalogPic"></div>
            </th>
            <th class="catalogCell">Lámpa
            <div class="catalogPic"></div>
            </th>

          </tr>
       
        </tbody>
      </table>
    </div>

    <div class="btn-group dropup">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        id="printButton"
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
          ><i class="fas fa-print"></i> Nyomtatás összesítővel</a
        >
      </div>
    </div>

    <div class="btn-group dropup">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        id="printButton"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-cog"></i> Törzs szerkesztése
      </button>
      <div class="dropdown-menu">
        
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          Terméknév</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          Kép</a
        >
       
       
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Divíziók</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Kategória</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Termékfajta</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Műszaki tartalom</a
        >
        
       
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Katalogus_print",
  path: "/katalogus_print",

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

.catalogPic{
     background-image: url("../../assets/lamp.png");
  background-size: cover;
  width: 340px;
  height: 200px;
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
  left: 150px;
  font-size: 10px;
  top: -15px;
}

#printButton {
  position: relative;
  left: 2vw;
  top: 4vh;
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
  top: 50px;
  position: relative;

}

.catalogCell{
    text-align: center;
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

.printTitleTb {
  position: relative;
  left: 7vw;
}

.printTitleTb2 {
  position: relative;
  left: 7vw;
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
