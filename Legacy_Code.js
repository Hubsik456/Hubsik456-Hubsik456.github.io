function Filter_Notes_v1()
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
        var Input = document.getElementById("Filter_Text").value.toLowerCase()
        var Filtr = document.getElementById("Filter_Select").value
        var Table = document.getElementById("Notes_Table")
        var Table_tr = Table.getElementsByTagName("tr")

        for (var x = 0; x < Table_tr.length; x++)
        {
            var Table_td = Table_tr[x].getElementsByTagName("td")[Dane[Filtr]]
            if (Table_td)
            {
                var Temp  = Table_td.textContent || Table_td.innerText
                
                if (Temp.toLowerCase().indexOf(Input) > -1)
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