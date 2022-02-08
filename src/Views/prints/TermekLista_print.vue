<template>
  <div class="printPage">
    
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
          <h2 class="printTitleTb">Terméklista</h2>
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
      <br/>
      <br/>
      <table class="table table-bordered" id="printTable">
        <thead>
          <tr class="headerRow">
            <th scope="col">Terméknév</th>
            <th scope="col">Műszaki tartalom</th>
            <th scope="col">Mennyiség</th>
            <th scope="col">Mennyiségi egység</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>Falikar</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
          <tr>
          
            <td>Falikar</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
          <tr>
        
            <td>Lámpatest</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
          <tr>
          
            <td>Lámpatest</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
             <tr>
          
            <td>Lámpatest</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
             <tr>
          
            <td>Lámpatest</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
          </tr>
             <tr>
          
            <td>Lámpatest</td>
            <td>Lámpatest mérete: 31x26,7x31 cm, Arany színnel</td>
            <td>5</td>
            <td>db</td>
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
          Műszaki tartalom</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          Mennyiség</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          Mennyiségi egység</a
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
            Kép</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Nettó egységár</a
        >
        <a class="dropdown-item" href="#"
          ><input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
            Nettó összár</a
        >
       
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermekLista_print",
  path: "/termekLista_print",

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


.headerRow{
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0px 0px -1px rgba(0, 0, 0, 0.4);
}

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
  font-size: 13px;
  top: 1vh;
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
