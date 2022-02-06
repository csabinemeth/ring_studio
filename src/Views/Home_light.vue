<template>
<div class="homeBackgroundlight">
<div class="topLine">
 <h5 class="homeTitleLight">Home</h5> 
 <input class="form-control mr-sm-2" id="searchBar2" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
<div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
    <a class="dropdown-item" id="dropdownItem" @click="navToCreateProject" >Új projekt</a>
    <a class="dropdown-item" id="dropdownItem" @click="navToCreateProduct">Új Termék</a>
    <a class="dropdown-item" id="dropdownItem" >Új Beszállító</a>
  </div>
</div>

    
</div>
<h3 class="greetingsTextLight">Szia, Bori!</h3>
<div class="tableLineHome">
<table class="table" id="projectsTableLight">
  <thead>
    <th>Projektjeim</th>
  </thead>
  <tbody>
    <tr class="projectRow">
      <td>P-22-03_projekt </td>
      <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
    <tr class="projectRow">
      <td >P-22-03_projekt</td>
      <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
    <tr class="projectRow">
      <td >P-22-03_projekt</td>
      <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
  
  </tbody>
</table>

<table class="table" id="projectsTableLight">
  <thead>
  <th>Feladatok</th>
  </thead>
  <tbody>
    <tr class="projectRow">
      <td class="projectRow">
      Feladat: P-22-03_projekt 
      <br/>
       Feladat és projekt leírása
       <br/>
       2021.12.10 10.05 am

      </td>
       <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
    <tr class="projectRow">
      <td class="projectRow">Feladat: P-22-03_projekt 
      <br/>
       Feladat és projekt leírása
       <br/>
       2021.12.10 10.05 am</td>
        <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
    <tr class="projectRow">
      <td class="projectRow">Feladat: P-22-03_projekt 
      <br/>
       Feladat és projekt leírása
       <br/>
       2021.12.10 10.05 am</td>
        <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
    </tr>
    
  </tbody>
</table>

</div>
<div class="divider"></div>

  </div>
</template>

<script>
export default {
      name: "Home_Light",
      path: "/home_light",

      methods:{

        navToCreateProject(){
          this.$router.push('../Createproject')
        },
        navToCreateProduct(){
          this.$router.push('../Createproduct')
        }
      }
};
</script>


<style>

.homeTitleLight{
    position: relative;
    left: 2vw;
    color: black;
    text-decoration: underline;
    top: 2vh;
    
}

#plusButton{
  background-color: #9ec520;
  border: 0;
  top: 1vh;
  position: relative;
  left: 57vw;
}

.iconCell{
  text-align: right;
}

.divider{
    width: 84vw;
    position: relative;
    left: 2vw;
    height: 1px;
    background-color: #68686e;
    top: 10vh;
}
.greetingsTextLight{
   position: relative;
    left: 2vw;
    color: black;
    top: 5vh;
}

.actionButtons{
    display: flex;
}

.actionTexts{
    color: white;
    margin-right: 2vw;
    top: 15vh;
    position: relative;
    left: 28vw;
}



.homeBackgroundlight{
  height: 100vh;
  width: 90vw;
  background-color: white;
  overflow: hidden;
}

.topLine{
    display: flex;
    
}

#searchBar2{
    width: 10vw;
    position: absolute;
    top: 2vh;
    right: 210px;
    height: 4vh;
    background-color: white;
    border: 1px solid black;
}

.dateText{
    color: white;
    position: relative;
    top: 2vh;
    left: 56vw;
    color:#68686a;
}

#projectsTableLight{
    width: 35vw;
    position: relative;
    left:4.5vw;
    top: 10vh;
    background-color: #d4d9dd;
    margin-left: 3vw;
    margin-bottom: 10vh;
}

.tableLineHomLighte{
    display: flex;
}





</style>