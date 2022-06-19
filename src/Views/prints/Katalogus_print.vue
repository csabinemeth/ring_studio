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

    <div class="btn-group dropup">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        id="printButtonNew"
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
        id="printButtonNew"
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
    
    <div id="paper" class="printPaper">
      
      <table class="table table-bordered" id="printTable">
        <thead>
        </thead>
        <tbody>
          <tr>
            
            <th class="catalogCell" colspan="3">Lámpák
            </th>

          </tr>
          <tr>
            
            <th class="catalogCell">Falikar
            <div class="catalogPic"></div>
            
            <br/>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Terméknév</th>
      <th scope="col">Falikar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Méret</th>
      <td>200x10 cm</td>

    </tr>
    <tr>
      <th>Szín</th>
      <td>Fekete</td>

    </tr>
    <tr>
      <th>Gyártó</th>
      <td>Gyártó kft.</td>

    </tr>
     <tr>
      <th>Műszaki tartalom</th>
      <td>Függesztett falikar </td>

    </tr>
     <tr>
      <th>Helyiség</th>
      <td>Nappali</td>

    </tr>
     <tr>
      <th>Ajánlati ár</th>
      <td>20 000 Ft</td>

    </tr>
  </tbody>
</table>
            </th>
            <th class="catalogCell" >Függesztett lámpa 
            <div class="catalogPic"></div>
            <br/>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Terméknév</th>
      <th scope="col">Falikar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Méret</th>
      <td>200x10 cm</td>

    </tr>
    <tr>
      <th>Szín</th>
      <td>Fekete</td>

    </tr>
    <tr>
      <th>Gyártó</th>
      <td>Gyártó kft.</td>

    </tr>
     <tr>
      <th>Műszaki tartalom</th>
      <td>Függesztett falikar </td>

    </tr>
     <tr>
      <th>Helyiség</th>
      <td>Nappali</td>

    </tr>
     <tr>
      <th>Ajánlati ár</th>
      <td>20 000 Ft</td>

    </tr>
  </tbody>
</table>
            </th>
            <th class="catalogCell">Lámpa
            <div class="catalogPic"></div>
            <br/>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Terméknév</th>
      <th scope="col">Falikar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Méret</th>
      <td>200x10 cm</td>

    </tr>
    <tr>
      <th>Szín</th>
      <td>Fekete</td>

    </tr>
    <tr>
      <th>Gyártó</th>
      <td>Gyártó kft.</td>

    </tr>
     <tr>
      <th>Műszaki tartalom</th>
      <td>Függesztett falikar </td>

    </tr>
     <tr>
      <th>Helyiség</th>
      <td>Nappali</td>

    </tr>
     <tr>
      <th>Ajánlati ár</th>
      <td>20 000 Ft</td>

    </tr>
  </tbody>
</table>
            </th>

          </tr>
      
       
        </tbody>
      </table>
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
  width: 395px;
  height: 280px;
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

#printButtonNew {
  position: relative;
  float: right;
  left: 44.4vw;
  top: 4vh;
  background-color: #9ec520;
  border: 0;
  margin-right: 10px;
}
</style>
