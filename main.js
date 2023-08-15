const navigation = document.getElementsByClassName("nav");

navigation.addEventListerner('click', e =>{
    if(this.classList.contains("active")){
        this.classList.remove("active");
    }else this.classList.add("active");

});