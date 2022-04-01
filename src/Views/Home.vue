<template>
<div class="homeBackground">
<div class="topLine">
 <h5 class="homeTitle"><i class="fas fa-home" id="avatarIcon"></i>&nbsp;Home</h5> 
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        id="homeSearchTop"
        data-target="#collapseSearchTop"
        aria-expanded="false"
        aria-controls="collapseSearchTop"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
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
<br/>
<div class="collapse" id="collapseSearchTop">
      <div class="card card-body" id="searchBarTop">
        <div class="searchLine">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchBarInput"
          />
          <button class="btn btn-success" type="submit" id="searchButtonTop">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>

<div class="tableLineHome">
<table class="table table-dark" id="projectsTable">
  <thead>
    <th>Projektjeim</th>
  </thead>
  <tbody>
    <tr class="projectRow">
      <td class="projectD"> <div class="projectAvatar1"></div>&ensp; P-22-03_projekt </td>
    
    </tr>
    <tr class="projectRow">
      <td class="projectD" > <div class="projectAvatar1"></div>&ensp; P-22-03_projekt</td>
    </tr>
    <tr class="projectRow">
      <td class="projectD" > <div class="projectAvatar1"></div>&ensp; P-22-03_projekt</td>
      
    </tr>

    
     <tr class="projectRow">
      <td class="more">Mutass többet</td>
        
    </tr>
  
  </tbody>
</table>

<table class="table table-dark" id="projectsTable">
  <thead>
  <th class="titleRow">Üzeneteim</th>
  </thead>
  <tbody>
    <tr class="projectRow">
      <td class="projectRow">
      Cím
      
      Feladó: Hováth István

      P-22-03_projekt 
     
       2021.12.10 10.05 am

      <i class="fa-solid fa-envelope"></i>

      </td>
       
    </tr>
    <tr class="projectRow">
        <td class="projectRow">
      Cím
      
      Feladó: Hováth István

      P-22-03_projekt 
     
       2021.12.10 10.05 am

      <i class="fa-solid fa-envelope-open"></i>

      </td>
       
    </tr>
    <tr class="projectRow">
        <td class="projectRow">
      Cím
      
      Feladó: Hováth István

      P-22-03_projekt 
     
       2021.12.10 10.05 am

       <i class="fa-solid fa-envelope-open"></i>

      </td>
        
    </tr>
     <tr class="projectRow">
      <td class="more">Mutass többet</td>
        
    </tr>
    
    
  </tbody>
</table>

</div>


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
    display: flex;
    
}

#plusButton1{
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  float: right;
  right: 10px;
}

.iconCell{
  text-align: right;
}

.more{
  text-align: center;
}

.more:hover{
  border-radius: 0 0 10px 10px;
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
    position: relative;
    border-left: 2px solid #1e1f21;
}

#searchBar1{
    width: 10vw;
    position:absolute;
    top: 2vh;
    right: 210px;
    height: 4vh;
    background-color: #1e1f21;

}

.homeAvatar{

  color: white;
  width: 35px;
  text-align: center;
  height: 35px;
   border-radius: 15%;
}


#avatarIcon{
  position: relative;
  top: 4.5px;
 
}

.dateText1{
    color: white;
     position: relative;
    right: 55px;
    color:#68686a;
}

#projectsTable{
    width: 40vw;
    position: relative;
    left:-1vw;
    top: 10vh;
    margin-left: 3vw;
    background-color: #2a2b2d;
    margin-bottom: 10vh;
    border-radius: 10px;
    border: 0;
 
  
}

 #homeSearchTop {
  background-color: #2a2b2d;
  border: 0;
  float: right;
  right: 70px;
  top: 8px;
  position: absolute;

  }


.projectD{
  display: flex;
}

.projectRow:hover{
   background-color: #68686a;
   color: #1e1f21;
   cursor: pointer;

}

.tableLineHome{
    display: flex;
    top: -8vh;
    position: relative;
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

tr{
  border-top: hidden;
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