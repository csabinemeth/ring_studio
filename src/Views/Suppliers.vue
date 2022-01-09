<template>
<div class="SuppliersBackGround">
<div class="SuppliersTopLine">
 <h5 class="homeTitle">Beszállítók</h5> 
 <input class="form-control mr-sm-2" id="SuppliersSearchBar" type="search" placeholder="Search" aria-label="Search">
 <text class="SuppliersDateText">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButtonSuppliers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új beszállító</a>
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
    font-size: 9px;
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
  overflow: hidden;
  color: white;
}

.SuppliersTitle{
      position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
}
 
#SuppliersSearchBar{
  width: 10vw;
    position: relative;
    left: 53.5vw;
    top: 2vh;
    height: 4vh;
    background-color: #1e1f21;
}

#supplierListTable{
 position: relative;
  top: 10vh;
  width: 84.5vw;
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
  #SuppliersSearchBar{
    left: 20px;
    width: 100px;
    top: 12px;
  }

  .SuppliersDateText{
    left: 30px;
  }

  #supplierListTable{
    height: 90vw;
    top: 20px;
  }
}


</style>

