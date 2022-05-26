function calculaNota(ex, p1, p2) {
   var media = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (3+1+2)



    if(media >= 9){
     return  media = "A"
    }
    if(media < 9 && media>= 7.5){
    return media = "B"
    }
    if(media<7.5 && media >= 6){
        return media = "C"
    }

    if(media <6){
return media= "D"
    }

  }