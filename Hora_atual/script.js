function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "manha.png"
        document.body.style.background = "#696969"
        msg.innerHTML = `<strong> Agora são ${hora} horas. <p> Bom dia, Sr. Gean Carlos!</p> </strong>`
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#e16300"
        msg.innerHTML = `<strong> Agora são ${hora} horas. <p>Boa tarde, Sr. Gean Carlos!</p></strong`
    } else {
        //Boa noite
        img.src = "noite.png"
        document.body.style.background = "#002032"
        msg.innerHTML = `<strong> Agora são ${hora} horas. <p>Boa noite, Sr. Gean Carlos!</p> </strong>`
    }
}
 
