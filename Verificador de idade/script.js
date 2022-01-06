function verificar() {
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERROR] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'hbebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'hjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'hadulto.png')
            } else {
                //Idoso
                img.setAttribute('src' , 'hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'mbebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'mjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'madulta.png')
            } else {
                //Idoso
                img.setAttribute('src' , 'mvelha.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}