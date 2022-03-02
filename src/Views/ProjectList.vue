<template>
  <div class="projectListBackGround">
  <div class="partnersTopLine">
    <div class="dropdown">
      <button
        class="btn btn-secondary "
        type="button"
        id="projectListDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
       <div class="projectsAvatar"><i class="fas fa-list" id="avatarIconProjects"></i></div>Projektek<i class="fa-solid fa-caret-down" id="projectsCaret"></i>
      </button>
      <div
        class="dropdown-menu"
        id="openedDrowdownProjectList"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" id="dropdownItem">Ügyfél</a>
        <a class="dropdown-item" id="dropdownItem">
          <text>Projekt:</text>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkBox1"
          />
          <label class="form-check-label" id="active" for="flexCheckDisabled">
            Aktív
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkBox2"
          />
          <label class="form-check-label" id="archive" for="flexCheckDisabled">
            Archív
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkBox3"
          />
          <label class="form-check-label" id="all" for="flexCheckDisabled">
            Összes
          </label></a
        >
      </div>
    </div>
 <input class="form-control mr-sm-2" id="searchBar1" type="search" placeholder="Search" aria-label="Search">
 <text class="dateText1">2021.12.23 csütörtök</text>
 <div class="dropdown1">
  <button class="btn btn-secondary " type="button" id="plusButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-plus"></i>
  </button>
  <div class="dropdown-menu" id="openedDrowdown" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="dropdownItem" @click="newProject" > Új projekt</a>
  </div>
</div>
</div>

     <div class="szures">
      <text class="szuroText">Szűrés:</text>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ügyfél
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Ügyfél 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Projektkód
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszállító 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Projektnév
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 1</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 2</a>
          <a class="dropdown-item" id="szuroDropdownItem">Szekció 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Telefon
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés A</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés B</a>
          <a class="dropdown-item" id="szuroDropdownItem">Beszerzés C</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="szuroDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          E-mail
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
          <a class="dropdown-item" id="szuroDropdownItem">BÉ-L101</a>
        </div>
      </div>
      
     
      <div class="dropdown" id="csoportDiv">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="csoportositas1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Csoportosítás
        </button>
        <div
          class="dropdown-menu"
          id="openedDrowdown"
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
          <a class="dropdown-item" id="szuroDropdownItem">Spot</a>
        </div>
      </div>
    </div>

    <div class="aktivSzurok">
      <text class="aktivSzuroText">BÉ-L101</text>
      <text class="aktivSzuroText">Beszállító 1</text>
      <text class="aktivSzuroText">Szekció 1</text>
      <text class="deleteActive">Szűrők törlése <i class="fas fa-times"></i></text>
    </div>

  <div id="responsiveTable">
    <table class="table table-dark" id="projectListTable">
      <thead>
        <tr>
          <th scope="col">  <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            /></th>
          <th scope="col">Projektkód</th>
          <th scope="col">Projektnév</th>
          <th scope="col">Ügyfél</th>
          <th scope="col">Telefon</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="projectRow" @click="toProject">
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td class="projectFlex"><div class="projectAvatar1"></div>&ensp; P-22-03 Projekt</td>
          <td>Project neve</td>
          <td>Lölő</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>
        </tr>
        <tr class="projectRow" @click="toProject">
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td class="projectFlex"><div class="projectAvatar1"></div>&ensp; P-22-03 Projekt</td>
          <td>Project neve</td>
          <td>Lölő</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
                    <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>

        </tr>
        <tr class="projectRow" @click="toProject">
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td class="projectFlex"><div class="projectAvatar1"></div>&ensp; P-22-03 Projekt</td>
          <td>Project neve</td>
          <td>Lölő</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
                    <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>

        </tr>
        <tr class="projectRow" @click="toProject">
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td class="projectFlex"><div class="projectAvatar1"></div>&ensp; P-22-03 Projekt</td>
          <td>Project neve</td>
          <td>Lölő</td>
          <td>+36201212112</td>
          <td>info@lolo.hu</td>
          <td class="iconCell"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></td>

        </tr>
      </tbody>
    </table>
    </div>
     <div class="divider2"></div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  path: "/projectList",

  methods: {
    toProject() {
      this.$router.push("/project");
    },

    newProject() {
        this.$router.push("/createproject")
    }
  },
};
</script>

<style>
.projectListBackGround {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: hidden;
}

.projectFlex{
  display: flex;
}

#projectsCaret{
  position:relative;
  top: 6px;
}

.projectListTitle {
  position: relative;
  left: 2vw;
  color: white;
  top: 2vh;
}

.projectsAvatar{
  color: white;
  width: 35px;
  text-align: center;
  height: 35px;
   border-radius: 15%;
}


#avatarIconProjects{
  position: relative;
  top: 2px;
 
}

.iconLine{
  color: white;
  position: relative;
  top: 16vh;
  left: 2vw;
  display: flex;
}

#projectListDropdown {
  background-color: #2a2b2d;
  border: 0;
  position: relative;
  background-color: #1e1f21;
  left: 2vw;
  top:-25px;
  display: flex;
  font-size: 20px;
  text-decoration: underline;
}




.divider {
  width: 83vw;
  position: relative;
  left: 2vw;
  height: 1px;
  background-color: #68686e;
  top: 7vh;
}


.divider2 {
  width: 83vw;
  position: relative;
  left: 2vw;
  height: 1px;
  background-color: #68686e;
  top: 15vh;
}


#active {
  left: 30px;
  position: relative;
}

#archive {
  left: 60px;
  position: relative;
}

#all {
  left: 86px;
  position: relative;
}

#checkBox1 {
  position: relative;
  left: 25px;
}

.iconCell{
  color: #2a2b2d;
}

#checkBox2 {
  position: relative;
  left: 55px;
}



#checkBox3 {
  position: relative;
  left: 85px;
}

#projectListTable {
  position: relative;
  top: 12vh;
  width: 83vw;
  left: 2vw;
  background-color: #2a2b2d;
}

.projectRow:hover {
}

.projectRow {
  border: 0;
}

#flexCheckDefault {
  position: relative;
  left: 27px;
}
#openedDrowdownProjectList {
  width: 22vw;
  background-color: #1e1f21;
}

.titleLine {
  display: flex;
}



#plusButtonProjects{
  background-color: #2a2b2d;
  border: 0;
  top: 7vh;
  position: relative;
  left: 52vw;
}

.projectsDateText{
  color: white;
    position: relative;
    top: 8vh;
    left: 51.5vw;
    color:#68686a;
}



@media(max-width:1000px){

 
.projectListBackGround{
  overflow: scroll;
}


}


</style>
