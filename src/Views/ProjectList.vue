<template>
  <div class="projectListBackGround">
  <div class="partnersTopLine">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="projectListDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Projektek
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

    <div class="divider"></div>
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
          <td>P-22-03 Projekt</td>
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
          <td>P-22-03 Projekt</td>
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
          <td>P-22-03 Projekt</td>
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
          <td>P-22-03 Projekt</td>
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
     <div class="iconLine"><i class="far fa-edit"></i>&nbsp;<i class="fas fa-arrow-right"></i>&nbsp;<i class="far fa-trash-alt"></i></div>
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
.projectListTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: underline;
  top: 2vh;
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

#projectsSearchBar{
  width: 10vw;
    position: relative;
    left: 51.5vw;
    top: 8vh;
    height: 4vh;
    background-color: #1e1f21;
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
