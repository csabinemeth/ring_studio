<template>
  <div class="printPage">
    <button
      type="button"
      class="btn btn-primary"
      @click="navToCover"
      id="printNavButton"
    >
      <i class="fas fa-align-center"></i> Fedlap
    </button>
    <button
      type="button"
      @click="navToContent"
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
    
    <button
      type="button"
      @click="print"
      class="btn btn-primary"
      id="printButtonSum1"
    >
      <i class="fas fa-print"></i> Nyomtatás
    </button>
    <div id="paper" class="printPaper">
    <div class="ringLogo" id="ringLogoSum"></div>
    <h1 class="sumTitle"> Projekt: P-20-14</h1>
    <h6 class="sumTitle2">Helyszín: Budapest</h6>
     <h5 class="sumTitle3">AJÁNLAT</h5>

     <table class="table table-bordered" id="sumTable">
  <thead>
    <tr>
      <th scope="col">Megnevezés</th>
      <th scope="col">Összesen Nettó</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lámpatestek, fényforrások</td>
      <td class="right">846 535 Ft</td>
    </tr>
    <tr>
      <td>Burkolatok</td>
      <td class="right">1 022 923 Ft</td>
    </tr>
    <tr>
      <th>Kedvezmény:</th>
      <th class="right">100 000 Ft</th>
    </tr>
    
    <tr>
      <th>Összesen nettó:</th>
      <th class="right">1 869 458 Ft</th>
    </tr>
    <tr>
      <th>ÁFA:</th>
      <th class="right">382 901</th>
    </tr>
     <tr>
      <th>Összes bruttó:</th>
      <th class="right">2 252 359 Ft</th>
    </tr>
     <tr>
      <td colspan="3" id="sumComment">Ajánlatunk a kiadástól számított max. 30 napig érvényes, azt követően az árakat újra egyeztetni szükséges!</td>
    </tr>
  </tbody>
</table>
    <div class="compInfoContainer">
     <h6 id="sumCompanyInfo1">Ajánlatadó: Ring Studio Kft.</h6> <br/>
     <h6 id="sumCompanyInfo2">Cím: 9085 Győr, Bercsényi Liget 26/b</h6><br/>
     <h6 id="sumCompanyInfo3">Adószám: 23520451-2-08</h6>
     </div>
    </div>

    <br/>
  </div>
</template>

<script>
export default {
  name: "AjanlatSum_print",
  path: "/ajanlatSum_print",

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

    navToContent(){
        this.$router.push("/ajanlat_print");
    },
     navToCover(){
      this.$router.push("ajanlatFedlap_print");
    }, 
  },
};
</script>

<style>


.printPaper{
  position: relative;
  top: 1vh;
}

.right{
  text-align: right;
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

.sumTitle3{
    position: relative;
    left: 39.5vw;
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


#printButtonSum1 {
  position: relative;
  float: right;
  right: 2vw;
  top: 4vh;
  background-color: #9ec520;
  border: 0;
}

.compInfoContainer{
    display: contents;
}

</style>
