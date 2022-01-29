<template>
  <div class="printPage">
    <button
      type="button"
      class="btn btn-primary"
      id="printNavButton_Active"
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
      @click="navToBecslesSum"
      class="btn btn-primary"
      id="printNavButton"
    >
      <i class="fas fa-filter"></i> Összesítő
    </button>
    <div id="paper" class="printPaper">
    <h1 class="coverTitle"> Projekt: P-20-14</h1>
     <h5 class="coverTitleTb">BEVÉTELEZÉS</h5>
     <h6 class="coverTitle3">Szállító: Sibalin Miklós</h6>
     <h6 class="coverTitle4">Helyszín: Budapest</h6>
     <h6 class="coverTitle5">2022.01.21</h6>

     <div class="ringLogo" id="ringLogoCover"></div>
    <div class="compInfoContainer">
     <h6 id="companyInfoBesz">Megrendelő: Ring Studio Kft.</h6> <br/>
     <h6 id="companyInfo2">Cím: 9085 Győr, Bercsényi Liget 26/b</h6><br/>
     <h6 id="companyInfo3">Adószám: 23520451-2-08</h6>
     </div>
    </div>

    <button
      type="button"
      @click="print"
      class="btn btn-primary"
      id="printButtonCover"
    >
      <i class="fas fa-print"></i> Nyomtatás
    </button>
    <br/>
  </div>
</template>

<script>
export default {
  name: "TermekBeerkezCover_print",
  path: "/termekBeerkezCover_print",

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
    navToBecslesSum(){
      this.$router.push("becslesSum_print");
    }
  },
};
</script>

<style>


.printPaper{
  position: relative;
  top: 1vh;
}

.coverTitle{
    position: relative;
    left: 33vw;
    top: 18vh;
}

.coverTitleTb{
    position: relative;
    left: 39vw;
    top: 25vh;
}

.coverTitle3{
    position: relative;
    left: 37vw;
    top: 32vh;
}
.coverTitle4{
    position: relative;
    left: 38.5vw;
    top: 32vh;
}
.coverTitle5{
    position: relative;
    left: 41vw;
    top: 32vh;
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

#ringLogoCover{
    position: relative;
    top: 35vh;
    left: 40vw;
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

#companyInfoRv{
    float: right;
    position: relative;
    right: 3.5vw;
    top: 45vh;
}

#companyInfo2{
    float: right;
    position: relative;
    right:-9.5vw;
    top: 45vh;
}

#companyInfo3{
    float: right;
    top: 45vh;
    position: relative;
    right: -29vw;
}


#printButtonCover {
  position: relative;
  left: 2vw;
  top: 50vh;
  background-color: #9ec520;
  border: 0;
}

.compInfoContainer{
    display: contents;
}

</style>
