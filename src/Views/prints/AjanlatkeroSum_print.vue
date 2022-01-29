<template>
  <div class="printPage">
    <button
      type="button"
      class="btn btn-primary"
      @click="navToAkCover"
      id="printNavButton"
    >
      <i class="fas fa-align-center"></i> Fedlap
    </button>
    <button
      type="button"
      @click="navToAkContent"
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
     <h5 class="sumTitleAk">AJÁNLATKÉRÉS ÖSSZESÍTŐ TÁBLÁZAT</h5>

     <table class="table table-bordered" id="sumTable">
  <thead>
    <tr>
      <th scope="col">Megnevezés</th>
      <th scope="col">Öszes mennyiség</th>
      <th scope="col">Mennyiségi egység</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lámpatestek, fényforrások</td>
      <td>15</td>
      <td>db</td>
    </tr>
    <tr>
      <td>Burkolatok</td>
      <td>20</td>
      <td>db</td>
    </tr>
     <tr>
      <td colspan="3" id="sumComment">Megjegyzés</td>
    </tr>
  </tbody>
</table>
    <div class="compInfoContainer">
     <h6 id="sumCompanyInfo1">Ajánlatkérő: Ring Studio Kft.</h6> <br/>
     <h6 id="sumCompanyInfo2">Cím: 9085 Győr, Bercsényi Liget 26/b</h6><br/>
     <h6 id="sumCompanyInfo3">Adószám: 23520451-2-08</h6>
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
  name: "AjanlatkeroSum_print",
  path: "/ajanlatkeroSum_print",

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

    navToAkContent(){
        this.$router.push("/ajanlatkero_print");
    },
     navToAkCover(){
      this.$router.push("ajanlatkeroCover_print");
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

.sumTitleAk{
    position: relative;
    left: 30vw;
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

#sumCompanyInfo1{
    float: right;
    position: relative;
    right: 1.5vw;
    top: 20vh;
}

#sumCompanyInfo2{
    float: right;
    position: relative;
    right:-13.2vw;
    top: 20vh;
}

#sumCompanyInfo3{
    float: right;
    top: 20vh;
    position: relative;
    right: -32.5vw;
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
