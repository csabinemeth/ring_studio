<template>
<div class="SuppliersBackGround">
<div class="topLine">
 <h5 class="homeTitle"><i class="fa-solid fa-truck" id="avatarIcon-Partners"></i>&nbsp;Beszállítók</h5> 
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


<table class="table table-dark" id="supplierListTable">
      <thead>
        <tr>
        <th><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></th>
          <th scope="col">Név</th>
          <th scope="col">Cím</th>
          <th scope="col">Adószám</th>
          <th scope="col">Bankszámlaszámok</th>
          <th scope="col">Kapcsolattartó</th>
          <th scope="col">Telefon</th>
          <th scope="col">Email</th>
          <th scope="col">Gyártó/Kereskedő</th>
          <th scope="col">Kedvezmény</th>
          <th scope="col">Kondíció</th>
          <th scope="col">Előleg</th>
        </tr>
      </thead>
      <tbody>
        <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>Horváth Péter</td>
          <td class="addressD">9082, Nyúl, Fő út 2</td>
          <td>12345678</td>
          <td>11773377-01010101</td>
          <td>Kovács Miklós</td>
          <td>06205972296</td>
          <td>lolo@info.hu</td>
          <td>Gyártó</td>
          <td>27%</td>
          <td>Kondició</td>
          <td>10%</td>
        </tr>
           <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>Horváth Péter</td>
          <td class="addressD" >9082, Nyúl, Fő út 2</td>
          <td>12345678</td>
          <td>11773377-01010101</td>
          <td>Kovács Miklós</td>
          <td>06205972296</td>
          <td>lolo@info.hu</td>
          <td>Gyártó</td>
          <td>27%</td>
          <td>Kondició</td>
          <td>10%</td>
        </tr>
          <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>Horváth Péter</td>
          <td class="addressD" >9082, Nyúl, Fő út 2</td>
          <td>12345678</td>
          <td>11773377-01010101</td>
          <td>Kovács Miklós</td>
          <td>06205972296</td>
          <td>lolo@info.hu</td>
          <td>Gyártó</td>
          <td>27%</td>
          <td>Kondició</td>
          <td>10%</td>
        </tr>
           <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td class="addressD">Horváth Péter</td>
          <td class="addressD" >9082, Nyúl, Fő út 2</td>
          <td>12345678</td>
          <td>11773377-01010101</td>
          <td>Kovács Miklós</td>
          <td>06205972296</td>
          <td>lolo@info.hu</td>
          <td>Gyártó</td>
          <td>27%</td>
          <td>Kondició</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>



</div>
</template>

<script>

export default {
      name: "Suppliers",
      path: "/suppliers",
};
</script>

<style>

.SuppliersTopLine{
  display: flex;
}


.addressD{
  
  min-width: 150px;
  position: relative;
  font-size: 15px;
  top: -1px;
}

#flexCheckDefaultPartners{
  position: relative;
  left: 20px;
}


#iconButton{
    width: 100px;
}
.SuppliersBackGround{
    height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow-y: scroll;
  overflow-x: hidden;
  color: white;
}

.SuppliersTitle{
      position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
}
 

#supplierListTable{
 position: relative;
  top: 2vh;
  width: 84.5vw;
  overflow-x: scroll;
  overflow-y: visible;
  left: 1vw;
  background-color: #2a2b2d;
  font-size: 14px;
}
.SuppliersDateText{
    color: white;
    position: relative;
    top: 2vh;
    left: 53.5vw;
    color:#68686a;
}

#plusButtonSuppliers{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 54vw;
}


@media(max-width: 900px){
 

  .SuppliersDateText{
    left: 30px;
  }

  #supplierListTable{
    height: 90vw;
    top: 20px;
  }
}


</style>

