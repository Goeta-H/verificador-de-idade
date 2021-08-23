function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERRO] Vefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = ' a Diversidade'
            if (age >= 0 && age < 10) {
                //kid
                img.setAttribute('src', './images/lgbtqi.png')
            } else if (age < 23) {
                //Jovem
                img.setAttribute('src', './images/young-lgbtqi.png')
            } else if (age < 50) {
                //Adulto
                img.setAttribute('src', './images/adult-lgbtqi.png')
            } else if (age < 110) {
                //Idoso
                img.setAttribute('src', './images/old-lgbtqi.png')
            } else {
                img.setAttribute('src', './images/die.png')
            }
        } else if (fsex[1].checked) {
            gender = 'uma Mulher'
            if (age >= 0 && age < 10) {
                //kid
                img.setAttribute('src', './images/kid-girl.png')
            } else if (age < 23) {
                //Jovem
                img.setAttribute('src', './images/young-girl.png')
            } else if (age < 50) {
                //Adulto
                img.setAttribute('src', './images/adult-women.png')
            } else if (age < 100) {
                //idoso
                img.setAttribute('src', './images/old-women.png')
            } else {
                img.setAttribute('src', './images/die.png')
            }
        } else if (fsex[2].checked) {
            gender = 'um Homem'
            if (age >= 0 && age < 10) {
                //kid
                img.setAttribute('src', './images/kid-boy.png')
            } else if (age < 23) {
                //Jovem
                img.setAttribute('src', './images/young-boy.png')
            } else if (age < 50) {
                //Adulto
                img.setAttribute('src', './images/adult-men.png')
            } else if (age < 110) {
                //Velho mesmo
                img.setAttribute('src', './images/old-men.png')
            } else {
                img.setAttribute('src', './images/die.png')
            }
        } else if (fsex[3].checked) {            
            if (age >= 0 && age < 10) {
                gender = 'uma Pedra'
                img.setAttribute('src', './images/rock.png')
            } else if (age < 23) {
                gender = 'um Girassol'
                img.setAttribute('src', './images/sun.png')
            } else if (age < 50) {
                gender = 'uma Árvore'
                img.setAttribute('src', './images/tree.png')
            } else if (age < 110) {
                gender = 'uma Múmia'
                img.setAttribute('src', './images/mummy.png')
            } else {
                gender = 'um Dinossauro'
                img.setAttribute('src', './images/dino.png')
            }            
        }
        res.style.textAlign = 'center'
        if (age < 110) {
            res.innerHTML = `Olha só ${gender} com ${age} anos.`
        } else if (age > 111) {
            res.innerHTML = `Você morreu, descanse em paz.` 
        }  
        res.appendChild(img)
    }
}
