<template>
<div class="FavouritesBackGround">
<div class="topLine">
 <h5 class="homeTitle"><i class="fa-solid fa-heart" id="avatarIcon-Partners"></i>&nbsp;Kedvencek</h5> 
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
<div >


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


<table class="table table-dark" id="FavouritesListTable">
      <thead>
        <tr>
        <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></th>
          <th scope="col">Termék kód</th>
          <th scope="col">Termék név</th>
          <th scope="col">Kép</th>
          <th scope="col">Beszerzési ár</th>
          <th scope="col">Eladási ár</th>
          <th scope="col">Árrés</th>
                    <th scope="col">Státusz</th>

        </tr>
      </thead>
      <tbody>
        <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
          <td><div class="productImage"></div></td>
          <td>76.235 FT</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
          <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
           <td><div class="productImage"></div></td>
          <td>76.235 FT</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
             <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
           <td><div class="productImage"></div></td>
          <td>76.235 FT</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
            <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
           <td><div class="productImage"></div></td>
          <td>76.235 FT</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
         <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultFavourites"
            /></td>
          <td>BÉ-L101</td>
          <td>Spot</td>
           <td><div class="productImage"></div></td>
          <td>76.235 FT</td>
          <td>86.235 Ft</td>
          <td>10.000 Ft</td>
          <td>Megrendelve</td>
        </tr>
      </tbody>
    </table>

</div>

</div>
</template>

<script>

export default {
      name: "Favourites",
      path: "/favourites",

      methods: {

          navToCreatePRoduct() {
            this.$router.push("/createProduct");
          }
      }
};
</script>

<style>

.FavouritesTopLine{
  display: flex;
}


.addressD{
    font-size: 9px;
}

#flexCheckDefaultFavourites{
  position: relative;
  left: 20px;
}

#iconButton{
    width: 100px;
}
.FavouritesBackGround{
    height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
  color: white;
}

.productImage{
    width: 50px;
    height: 30px;
    background-image: url("../assets/watch.jpg");
    background-size: cover;

}

.FavouritesTitle{
      position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
}
 


#FavouritesListTable{
 position: relative;
  top: 2vh;
  width: 84.5vw;
  left: 1vw;
  background-color: #2a2b2d;
  font-size: 14px;
}
.FavouritesDateText{
    color: white;
    position: relative;
    top: 2vh;
    left: 49vw;
    color:#68686a;
}

#plusButtonFavourites{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 49.5vw;
}

@media(max-width: 900px){
  

  .FavouritesDateText{
    left: 20px;
  }

  #FavouritesListTable{
    height: 90vw;
  }
}


</style>

