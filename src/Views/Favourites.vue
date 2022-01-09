<template>
<div class="FavouritesBackGround">
<div class="FavouritesTopLine">
 <h5 class="FavouritesTitle">Kedvenc termékek</h5> 
 <input class="form-control mr-sm-2" id="FavouritesSearchBar" type="search" placeholder="Search" aria-label="Search">
 <text class="FavouritesDateText">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonFavourites" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új termék</a>
  </div>
</div>
 
    
</div>
<div >

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
 
#FavouritesSearchBar{
  width: 10vw;
    position: relative;
    left: 49vw;
    top: 2vh;
    height: 4vh;
    background-color: #1e1f21;
}

#FavouritesListTable{
 position: relative;
  top: 10vh;
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
  #FavouritesSearchBar{
    left: 0;
    width: 100px;
    top: 25px;
  }

  .FavouritesDateText{
    left: 20px;
  }

  #FavouritesListTable{
    height: 90vw;
  }
}


</style>

