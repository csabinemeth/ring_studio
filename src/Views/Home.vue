<template>
<div class="homeBackground">
<div class="topLine">
 <h5 class="homeTitle">Home</h5> 
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
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
<h3 class="greetingsText">Szia, Bori!</h3>
<div class="tableLineHome">
<table class="table table-dark" id="projectsTable">
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

<table class="table table-dark" id="projectsTable">
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
      name: "Home",
      path: "/",

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

.homeTitle{
    position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
    
}

#plusButton1{
  background-color: #9ec520;
  border: 0;
  position: relative;
  float: right;
  right: 10px;
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
.greetingsText{
   position: relative;
    left: 2vw;
    color: white;
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



.homeBackground{
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

.topLine{
    display: flex;
}

#searchBar1{
    width: 10vw;
    position:fixed;
    top: 2vh;
    right: 210px;
    height: 4vh;
    background-color: #1e1f21;

}

.dateText1{
    color: white;
     position: relative;
     right: 55px;
    
    color:#68686a;
}

#projectsTable{
    width: 35vw;
    position: relative;
    left:4.5vw;
    top: 10vh;
    margin-left: 3vw;
    background-color: #2a2b2d;
    margin-bottom: 10vh;
}

.projectRow{
    border: 2px solid #68686a;
}

.projectRow:hover{
   background-color: #68686a;
   color: #1e1f21;
   cursor: pointer;

}

.tableLineHome{
    display: flex;
}

.actionIcon1{
    width: 25px;
    height: 25px;
    background: #ffa800;
     top: 15vh;
    position: relative;
    left: 28vw;
    margin-right: 1vw;
    
}
.actionIcon2{
    width: 25px;
    height: 25px;
    background: #abe70d;
     top: 15vh;
    position: relative;
    left: 28vw;
    margin-right: 1vw;
    
}
.actionIcon3{
    width: 25px;
    height: 25px;
    background: #fb5779;
     top: 15vh;
    position: relative;
    left: 28vw;
    margin-right: 1vw;
    
}
.actionIcon4{
    width: 25px;
    height: 25px;
    background: #47dafc;
     top: 15vh;
    position: relative;
    left: 28vw;
    margin-right: 1vw;
    
}

@media(max-width:900px){


  #projectsTable
  {
    overflow: scroll;
  }
}
</style>