$(document).ready(function () {
    $( document ).on( "click","ul li", function() {
        $('#search_val').val($(this).find("span").text());
        $('#liste li').hide();
    });
    /*$("#liste li").on( "keypress","#liste li", function() {
        console.log("dddd");
    });*/
    $.ajax({
        url:"src/countries.csv",
        dataType:"Text",
        success:function(data){
            var countries_data = data.split(/\r?\n|\r/);
            div_data ="<ul>";
            for(var count=0;count < countries_data.length;count++){
                cell_data = countries_data[count].split(";");
                for(var cell_count=0;cell_count < cell_data.length;cell_count++){
                    if(cell_count === 0)
                       div_data += "<li data-value='"+cell_data['1']+"'><img src='src/img/"+cell_data['1']+".png'/><span>"+cell_data['0'].substr(0, 18);+"</span></li>"
                }
            }
            div_data +="</ul>";
            $("#liste input").after(div_data);
        }
    })

    $("#search_val").keyup(function (e) {
        $('#liste li').hide();
        if(e.keyCode==40){
            
        }
        text = $(this).val().toLowerCase();
        $('#liste li').each(function () {
            contry = $(this).find('span').text().toLowerCase().indexOf(text);
            if ((contry != -1)&&(contry == 0)) {
                $(this).show();
            }
        });
    });



});
