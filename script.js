$(document).ready(function(){
    $("img").on("click",function(){
        casa = $(this).attr("id")
        $.get(`https://www.anapioficeandfire.com/api/houses/${casa}`,function(data){
            lista_titulos = "";
            for(title of data.titles){
                lista_titulos += `<li class="display-6">${title}</li>`
            }
            $("#gotModalTitle").text(data.name)

            $(".modal-body").html(
                `
                <p class="h3 text-start">Lema</p>
                <p class="display-6 fst-italic text-center"> "${data.words}"</p>
                <p class="h3 text-start border-top">Titulos</p>
                <ul class="list-unstyled text-center">
                    ${lista_titulos}
                </ul>
                
                `
            )
        })
    })
})