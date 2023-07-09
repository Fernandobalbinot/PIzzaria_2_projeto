menuListArray = [ "Marguerita",                  
                  "Pizza de Calabresa",                        //Adicione mais nomes de pizza
                  "Pizza Quatro Queijos",
                  "Pizza de Lombo",
                  "Pizza Portuguesa",
                  "Pizza de Atum"];


function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("displayMenu").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push(item);
}

