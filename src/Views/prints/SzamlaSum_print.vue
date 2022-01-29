<template>
  <div class="printPage">
    <button
      type="button"
      class="btn btn-primary"
      @click="navToBecslesCover"
      id="printNavButton"
    >
      <i class="fas fa-align-center"></i> Fedlap
    </button>
    <button
      type="button"
      @click="navToBecslesContent"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-table"></i> Törzs
    </button>
    <button
      type="button"
      
      class="btn btn-primary"
      id="printNavButton_Active"
    >
      <i class="fas fa-filter"></i> Összesítő
    </button>
    <div id="paper" class="printPaper">
    <div class="ringLogo" id="ringLogoSum"></div>
    <h1 class="sumTitle"> Projekt: P-20-14</h1>
    <h6 class="sumTitle2">Helyszín: Budapest</h6>
     <h5 class="sumTitleSzamla">SZÁMLA ÖSSZESÍTŐ TÁBLÁZAT</h5>

     <table class="table table-bordered" id="sumTable">
  <thead>
    <tr>
      <th scope="col">Terméknév</th>
      <th scope="col">Öszes mennyiség</th>
      <th scope="col">Mennyiségi egység</th>
      <th scope="col">Nettó összár</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Falikar</td>
      <td>20</td>
      <td>db</td>
      <td>600 000 Ft</td>
    </tr>
    <tr>
       <th colspan="3">Kedvezmény:</th>
      <th>-50 000 Ft</th>
    </tr>
    <tr>
      <th colspan="3">ÁFA:</th>
      <th>98 313 Ft</th>
    </tr>
    <tr>
      <th colspan="3">Bruttó:</th>
      <th>578 313 Ft</th>
    </tr>
  </tbody>
</table>
    <div class="compInfoContainer">
     <h6 id="sumCompanyInfoTk">Eladó: Ring Studio Kft.</h6> <br/>
     <h6 id="sumCompanyInfoTk2">Cím: 9085 Győr, Bercsényi Liget 26/b</h6><br/>
     <h6 id="sumCompanyInfoTk3">Adószám: 23520451-2-08</h6><br/>
     <h6 id="sumCompanyInfoSzamla">Bankszámlaszám: 11773377-00000000</h6>
     </div>
    </div>

    <button
      type="button"
      @click="print"
      class="btn btn-primary"
      id="printButtonSum"
    >
      <i class="fas fa-print"></i> Nyomtatás
    </button>
    <br/>
  </div>
</template>

<script>
export default {
  name: "SzamlaSum_print",
  path: "/szamlaSum_print",

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

    navToBecslesContent(){
        this.$router.push("/becsles_print");
    },
     navToBecslesCover(){
      this.$router.push("becslesCover_print");
    }, 
  },
};
</script>

<style>


.printPaper{
  position: relative;
  top: 1vh;
}

.sumTitle{
    position: relative;
    left: 36vw;
    top: 10vh;
    font-size: 25px;
}

.sumTitle2{
    position: relative;
    left: 37.5vw;
    top: 12vh;
}

.sumTitleSzamla{
    position: relative;
    left: 33.5vw;
    top: 15vh;
}

#sumTable{
    position: relative;
    top: 20vh;
    width: 82vw;
    left: 2vw;
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

#ringLogoSum{
    position: relative;
    top: 5vh;
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

#sumCompanyInfoTk{
    float: right;
    position: relative;
    right: 1vw;
    top: 20vh;
}

#sumCompanyInfoTk2{
    float: right;
    position: relative;
    right:-10vw;
    top: 20vh;
}

#sumCompanyInfoTk3{
    float: right;
    top: 20vh;
    position: relative;
    right: -29vw;
}

#sumCompanyInfoSzamla{
    float: right;
    top: 20vh;
    position: relative;
    right: -42.5vw;
}


#printButtonSum {
  position: relative;
  left: 2vw;
  top: 25vh;
  background-color: #9ec520;
  border: 0;
}

.compInfoContainer{
    display: contents;
}

</style>
