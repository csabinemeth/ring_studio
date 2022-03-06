<template>
  <div class="createBackgroundTermek">
  <div class="topLine">
      <h5 class="projectTitle">
        <div class="projectAvatar1"></div>&ensp;P-22-03_projekt:<text class="dashboard">Új termék</text>
      </h5>
      <input
        class="form-control mr-sm-2"
        id="searchBar1"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
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
    <div class="inputs">
     <div class="formLine">
        <input class="form-control" id="inputBoxProduct1" placeholder="Termékkód" />
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProduct" placeholder="Terméknév" />
      </div>
       <div class="formLine">
        <input class="form-control" id="inputBoxProduct" placeholder="Státusz" />
      </div>
      </div>
<div class="bothSide">
  <div class="leftSide">
    <p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
    Alapadatok <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse" id="collapseExample1">
  <div class="card card-body" id="contentCollapse">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
 <p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
    Árak <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse.show" id="collapseExample2">
  <div class="card card-body" id="contentCollapse">
      <div class="formLine">
        <input class="form-control" id="inputBoxProductAr" placeholder="Beszerzési ár" />
      </div>
        <div class="formLine">
        <input class="form-control" id="inputBoxProductAr" placeholder="Eladási ár" />
      </div>
        <div class="formLine">
        <input class="form-control" id="inputBoxProductAr" placeholder="Árrés" />
      </div>
  </div>
</div>
 <p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
    Beszerzés / Eladás <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse" id="collapseExample3">
  <div class="card card-body" id="contentCollapse">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
 <p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
    Rendszeradatok <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse" id="collapseExample4" >
  <div class="card card-body" id="contentCollapse">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
  </div>
  <div class="rightSide"><p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
    Előzmények <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse.show" id="collapseExample5" >
  <div class="card card-body" id="contentCollapse">
    <label class="post">02.05 - Horváth Borbála létehozta a terméket!</label>
    <label class="post">02.10 - Horváth Borbála rendelést adott le a termékre!</label>
    <label class="post">02.20 - A rendelés megérkezett!</label>
  </div>
</div>
<p>
  <a class="btn btn-primary" id="collapses" data-toggle="collapse in" href="#collapseExample6" role="button" aria-expanded="true" aria-controls="collapseExample">
    Kommentek <i class="fa-solid fa-caret-down"></i>
  </a>
</p>
<div class="collapse.show" id="collapseExample6" >
  <div class="card card-body in" id="contentCollapse">

    <div class="comment">
      <div class="commentter">
     <div class="profileAvatar"> </div> &ensp; Horváth Borbála: <text class="dateLabel">02.10 10:05</text>
     </div>
      <br/>
      <div class="comment-content">
      Ebből rendelni kell!
      </div>
      </div>

    <div class="comment">
      <div class="commentter">
     <div class="profileAvatar"> </div> &ensp; Horváth Borbála: <text class="dateLabel">02.20 11:20</text>
     </div>
      <br/>
      <div class="comment-content">
      Megrendelve! 
      </div>
      </div>
        <div class="comment">
      <div class="commentter">
     <div class="profileAvatar"> </div> &ensp; Horváth Borbála: <text class="dateLabel">03.02 15:44</text>
     </div>
      <br/>
      <div class="comment-content">
      A rendelés megérkezett!
      </div>
      </div>

      <div class="writeComment">
      <div class="commentter">
     <div class="profileAvatar"> </div> &ensp; Horváth Borbála: 
     </div>
      <br/>
      <div class="comment-content">
       <div class="form-group">
   
    <textarea class="form-control" id="commentWriteSpace" rows="3"></textarea>
    <button class="commentButton"><i class="fa-solid fa-plus"></i> Comment</button>
  </div>
      </div>
      </div>


  </div>
</div></div>
</div>


    </div>
</template>

<script>
export default {
  name: "CreateProduct",
  path: "/createproduct",

  methods: {
    create() {
      this.$router.push("/favourites");
    },

    back() {
      this.$router.push("/project");
    },
  },
};
</script>

<style>

.dateLabel{
  float: right;
  position: relative;
  right: -210px;
  color: grey;
}

#commentWriteSpace{
  background-color: #1e1f21;
  position: relative;
  left: -65px;
  width: 35vw;
  border: 0;
  color: white;
}
.writeComment{
  background-color: #2a2b2d;
  border-radius: 10px;
}

.post{
  font-size: 15px;
  color: grey;
  position: relative;
  left: 1vw;
}



.commentButton{
  background-color: #2a2b2d;
  border: 0;
  color: white;
  position: relative;
  float: right;
  right: 70px;
  cursor: pointer;
  top: 5px;
  margin-bottom: 10px;
}

.createBackgroundTermek {
  height: 100vh;
  width: 90vw;
  background-color: #1e1f21;
  overflow: scroll;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
}


.commentter{
  display: flex;
  position: relative;
  left: 1vw;
  top: 5px;
}

.comment-content{
  position: relative;
  left: 5vw;
  margin-bottom: 20px;
}

#collapses{
  background-color:#9ec520;
  border: 0;
  position: relative;
  left: 1vw;
  top: 10px;
}

.inputs{
  display: flex;
}

#contentCollapse{
  background-color:#1e1f21;
}

.leftSide{
  height: auto;
  min-height: 80vh;
  border:0;
  width: 40vw;
  border-radius: 10px;
  position: relative;
  top: 60px;
  left: 2vw;
  box-shadow: 5px 5px 8px 5px rgba(0,0,0,0.20);
}


.comment{
  border: 0;
  background-color: #2a2b2d;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 8px 5px rgba(0,0,0,0.15);
}

#inputBoxProduct1{
  background-color: #1e1f21;
  width: 150px;
  position: relative;
  left: 2vw;
}


#inputBoxProductAr{
  background-color: #1e1f21;
  width: 170px;
  position: relative;
  left: 0vw;
  bottom: 50px;
}

#inputBoxProduct{
  background-color: #1e1f21;
  margin-left: 10px;
  width: 150px;
  position: relative;
  left: 2vw;
}

.bothSide{
  display: flex;
}

.rightSide{
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80vh;
  border: 0;
  box-shadow: 5px 5px 8px 5px rgba(0,0,0,0.20);
  width: 40vw;
  border-radius: 10px;
  position: relative;
  top: 60px;
  float: right;
  left: 4vw;
}

#cancelButton{
    position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: red;
  border: 0;
}

#textArea{
  background-color: #1e1f21;
}

.telText {
  margin-right: 18px;
}

#createButton {
  position: relative;
  top: 8vh;
  margin-right: 10px;
  background-color: #9ec520;
  border: 0;
}

.formStuff {
  position: relative;
  left: 2vw;
  top: 0vh;
  font-size: 20px;
}

.formLine {
  display: flex;
  margin-top: 17px;
}

#inputBoxSmall {
  width: 137px;
  height: 28px;
  margin-left: 10px;
  margin-right: 10px;
}

.createTitle {
  position: relative;
  left: 2vw;
  color: white;
  text-decoration: underline;
  top: 2vh;
}
#inputBox {
  width: 400px;
  height: 28px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
}

#fileUpload {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
  background-color: #1e1f21;
}

#fileUpload.button{
  background-color: #1e1f21;
}

#textArea {
  width: 400px;
  height: 40px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
}

#FormControlSelect {
  width: 400px;
  height: 35px;
  margin-left: 10px;
  position: absolute;
  left: 25vw;
  background-color: #1e1f21;
}
</style>
