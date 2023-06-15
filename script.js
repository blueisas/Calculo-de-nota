let resultado = window.document.querySelector('div.resultado')
let fundo = window.document.querySelector('div.containera')

        function clicar(){
        
            let av1 = Number(window.document.querySelector('input#av1').value)
            let av2 = Number(window.document.querySelector('input#av2').value)
            let media = [(av1*4)+(av2*6)]/10
            let mediaFinal = (media>=6 && av1>6 && av2>6?"Aprovado":"Reprovado")

            if ((av1 >= 0 && av1 < 11) && (av2 >= 0 && av2 < 11)){

                resultado.innerHTML = (`A sua nota final é ${media} <br><br>`)
                resultado.innerHTML += mediaFinal
                resultado.innerHTML += '<br><br>'+(av1<6 || av2<6?"Você precisa tirar 6 ou mais em ambas as avaliações para passar":'')

            } else {

                resultado.innerHTML = 'Adicione uma nota real'

            }

            switch (mediaFinal) {
                case "Aprovado":
                    window.document.body.style.background = '#87986a'
                    break;
            
                default:
                    window.document.body.style.background = '#df7373'
                    break;
            }
        
        }