<template>
<div class="partnersBackGround">
<div class="partnersTopLine">
 <h5 class="homeTitle">Ügyfelek</h5> 
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" > Új ügyfél</a>
  </div>
</div>
 
    
</div>

<table class="table table-dark" id="partnerListTable">
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
          <th scope="col">Szállítási cím</th>
          <th scope="col">Telefon</th>
          <th scope="col">Email</th>
          <th scope="col">Kapcsolattartó</th>
          <th scope="col">Magán/Cég </th>
          <th scope="col">Adószám</th>
          <th scope="col">ÁFA</th>
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
          <td>9082, Nyúl, Fő út 2</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td>Nagy Tamás</td>
          <td>Magán</td>
          <td>012345678</td>
          <td>27%</td>
        </tr>
        <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
         <td>Horváth Péter</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td>Nagy Tamás</td>
          <td>Magán</td>
          <td>012345678</td>
          <td>27%</td>
        </tr>
        <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>Horváth Péter</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td>Nagy Tamás</td>
          <td>Magán</td>
          <td>012345678</td>
          <td>27%</td>
        </tr>
        <tr class="projectRow" @click="toProject">
        <td><input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultPartners"
            /></td>
          <td>Horváth Péter</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>9082, Nyúl, Fő út 2</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td>Nagy Tamás</td>
          <td>Magán</td>
          <td>012345678</td>
          <td>27%</td>
        </tr>
      </tbody>
    </table>



</div>
</template>

<script>

export default {
      name: "Partners",
      path: "/partners",
};
</script>

<style>

.partnersTopLine{
  display: flex;
}

#flexCheckDefaultPartners{
  position: relative;
  left: 20px;
}

#iconButton{
    width: 100px;
}
.partnersBackGround{
    height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
  color: white;
}

.PartnersTitle{
      position: relative;
    left: 2vw;
    color: white;
    text-decoration: underline;
    top: 2vh;
}
 


#partnerListTable{
 position: relative;
  top: 10vh;
  width: 84vw;
  left: 1vw;
  background-color: #2a2b2d;
}

.partnersDateText{
    color: white;
    position: relative;
    top: 2vh;
    left: 55vw;
    color:#68686a;
}

#plusButtonPartners{
  background-color: #2a2b2d;
  border: 0;
  top: 1vh;
  position: relative;
  left: 55.5vw;
}


</style>

