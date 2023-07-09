//! Functions
function Generate_Content_HTML_Version_Grid()
{
    /*
        Generate HTML code to display notes in form of a grid.
    */

    Temp_HTML = ""

    for (var x = 0; x < Notes.length; x++)
    {
        Temp_HTML += "<div class='col-sm-4 mt-4 p-4 Note'>"
        Temp_HTML += "<p>"
        Temp_HTML += "<b class='border-bottom border-primary'>" + Notes[x]["Nazwa"] + "</b> <br>"
        Temp_HTML += "<small>" + Notes[x]["Przedmiot"] + "</small> <br>"
        Temp_HTML += "<i title='Semestr:  " + Notes[x]["Semestr"] + "\nTyp: " + Notes[x]["Typ"] + "'>" + Notes[x]["Semestr"] + " " + Notes[x]["Typ"] + " </i> " + Notes[x]["Data"] + "<br>"
        Temp_HTML += "<div class='d-grid'> <a href='" + Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>" + "Link" + "</button> </a> </div> <br>"
        Temp_HTML += "<hr>" + "<b>Tagi:</b> " + Get_Tags(x) + "<br>"
        Temp_HTML += "<hr>" + Notes[x]["Opis"] + "<br>"
        Temp_HTML += "</p>"
        Temp_HTML += "<div class='Note_Counter text-primary'> <p>#" + (x+1) + "</p> </div>"
        Temp_HTML += "</div>"
    }

    Temp_HTML += "<hr>"
    document.getElementById("Content").innerHTML = Temp_HTML
}

function Generate_Content_HTML_Version_Table()
{
    /*
        Generate HTML code to display notes in form of a table.
    */

    Temp_HTML = "<div class='overflow-auto'><table class='table table-hover table-striped border border-primary' id='Notes_Table'>"

    for (var x = 0; x < Notes.length; x++)
    {
        if (x == 0) // Table Header
        {
            Temp_HTML += "<thead class='align-middle text-center'><tr class='table-primary'>"
            Temp_HTML += "<th>Nazwa</th>"
            Temp_HTML += "<th>Przedmiot</th>"
            Temp_HTML += "<th>Semestr</th>"
            Temp_HTML += "<th>Typ</th>"
            Temp_HTML += "<th>Data Dodania</th>"
            Temp_HTML += "<th>Tagi</th>"
            Temp_HTML += "<th>Opis</th>"
            Temp_HTML += "<th>Link</th>"
            Temp_HTML += "</tr></thead><tbody>"
        }
        else
        {
            Temp_HTML += "<tr>"
        }
        
        Temp_HTML += "<td>"+Notes[x]["Nazwa"]+"</td>"
        Temp_HTML += "<td>"+Notes[x]["Przedmiot"]+"</td>"
        Temp_HTML += "<td>"+Notes[x]["Semestr"]+"</td>"
        Temp_HTML += "<td>"+Notes[x]["Typ"]+"</td>"
        Temp_HTML += "<td>"+Notes[x]["Data"]+"</td>"
        Temp_HTML += "<td>"+Get_Tags(x)+"</td>"
        Temp_HTML += "<td>"+Notes[x]["Opis"]+"</td>"
        Temp_HTML += "<td> <a href='" + Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>  "+ "Link" + "</button> </a> </td>"

        Temp_HTML += "</tr>"
    }

    Temp_HTML += "</tbody></table></div>"
    document.getElementById("Content").innerHTML = Temp_HTML
}

function Get_Tags(Index)
{
    /*
        Generate HTML code to display correctly formatted tags
    */

    if (!("Tagi" in Notes[Index]) || (Notes[Index]["Tagi"].length == 0)) // If there are not any tags
    {
        return "Brak"
    }

    var Temp_HTML = ""

    for (var x = 0; x < Notes[Index]["Tagi"].length; x++)
    {
        Temp_HTML += "<div class='badge " + Notes[Index]["Tagi"][x][1] + "'> " + Notes[Index]["Tagi"][x][0] + "</div>"
    }

    return Temp_HTML
}

function Filter_Notes()
{
    /* 
        Filter content of Grid/Table depending on user input.
    */

    var Dane = {
        "Nazwa": 0,
        "Przedmiot": 1,
        "Semestr": 2,
        "Typ": 3,
        "Data Dodania": 4,
        "Tagi": 5,
        "Opis": 6,
    }
    var Temp_Grid = document.getElementsByClassName("Note")[0]
    var Temp_Table = document.getElementById("Notes_Table")

    // Grid View TODO:
    if (Temp_Grid !== undefined)
    {
        //var Blocks = document.getElementsByClassName("Note")

        // for (var x = 0; x < Blocks.length; x++)
        // {
        // }
    }

    // Table View
    else if (Temp_Table !== null)
    {
        var Input = document.getElementById("Filter_Text").value.toLocaleLowerCase()
        var Filtr = document.getElementById("Filter_Select").value
        var Table = document.getElementById("Notes_Table")
        var Table_tr = Table.getElementsByTagName("tr")

        for (var x = 0; x < Table_tr.length; x++)
        {
            var Table_td = Table_tr[x].getElementsByTagName("td")[Dane[Filtr]]
            if (Table_td)
            {
                var Temp  = Table_td.textContent || Table_td.innerText
                
                if (Temp.toLocaleLowerCase().indexOf(Input) > -1)
                {
                    Table_tr[x].style.display = ""
                }
                else
                {
                    Table_tr[x].style.display = "none"
                }
            }
        }
    }
}

function Disable_Search_Menu()
{
    /*
        Disable input for filtering notes
        TODO: Not finished
    */

    var Current_Mode = document.querySelector("input[name='Content_Mode']:checked").value
    
    if (Current_Mode == "Grid")
    {
        document.getElementById("Filter_Text").disabled = true
        document.getElementById("Filter_Select").disabled = true
        document.getElementById("Filter_TODO").style.display = "initial"
    }
    else if (Current_Mode == "Table")
    {
        document.getElementById("Filter_Text").disabled = false
        document.getElementById("Filter_Select").disabled = false
        document.getElementById("Filter_TODO").style.display = "none"
    }
}

function Random_Message_Banner()
{
    /*
        Set text on banner to randomly selected text from the Array
        
        TODO: Add more texts
    */

    Texts = [
        "Z jakimiś tam notakami",
        "Bierzcie i uczcie się z tego wszyscy",
        "Nie obiecuje że zdasz...",
        "Za frekwencję moją i waszą",
    ]

    document.getElementById("Random_Message").innerHTML = Texts[Math.floor(Math.random() * Texts.length)]

}

//! On Load
window.addEventListener("load", function()
    {
        Random_Message_Banner();

        Generate_Content_HTML_Version_Grid()
        //Generate_Content_HTML_Version_Table()

        document.getElementById("Filter_Text").disabled = true // ONLY IF Grid View should be default TODO:
        document.getElementById("Filter_Select").disabled = true // ONLY IF Grid View should be default TODO:
        document.getElementById("Filter_TODO").style.display = "initial" // ONLY IF Grid View should be default TODO:
    }
)