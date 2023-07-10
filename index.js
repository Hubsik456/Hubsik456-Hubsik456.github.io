//! Variables
var Notes_Edited = Notes

//! Functions
function Generate_Content_HTML_Version_Grid(Array_With_Notes = Notes)
{
    /*
        Generate HTML code to display notes in form of a grid.
    */

    Temp_HTML = ""

    for (var x = 0; x < Array_With_Notes.length; x++)
    {
        Temp_HTML += "<div class='col-sm-4 mt-4 p-4 Note'>"
        Temp_HTML += "<p>"
        Temp_HTML += "<b class='border-bottom border-primary'>" + Array_With_Notes[x]["Nazwa"] + "</b> <br>"
        Temp_HTML += "<small>" + Array_With_Notes[x]["Przedmiot"] + "</small> <br>"
        Temp_HTML += "<i title='Semestr:  " + Array_With_Notes[x]["Semestr"] + "\nTyp: " + Array_With_Notes[x]["Typ"] + "'>" + Array_With_Notes[x]["Semestr"] + " " + Array_With_Notes[x]["Typ"] + " </i> " + Array_With_Notes[x]["Data Dodania"] + "<br>"
        Temp_HTML += "<div class='d-grid'> <a href='" + Array_With_Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>" + "Link" + "</button> </a> </div> <br>"
        Temp_HTML += "<hr>" + "<b>Tagi:</b> " + Get_Tags(x) + "<br>"
        Temp_HTML += "<hr>" + Array_With_Notes[x]["Opis"] + "<br>"
        Temp_HTML += "</p>"
        Temp_HTML += "<div class='Note_Counter text-primary'> <p>#" + (x+1) + "</p> </div>"
        Temp_HTML += "</div>"
    }

    Temp_HTML += "<hr>"
    document.getElementById("Content").innerHTML = Temp_HTML
}

function Generate_Content_HTML_Version_Table(Array_With_Notes = Notes)
{
    /*
        Generate HTML code to display notes in form of a table.
    */

    Temp_HTML = "<div class='overflow-auto'><table class='table table-hover table-striped border border-primary' id='Notes_Table'>"

    for (var x = 0; x < Array_With_Notes.length; x++)
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
        
        Temp_HTML += "<td>"+Array_With_Notes[x]["Nazwa"]+"</td>"
        Temp_HTML += "<td>"+Array_With_Notes[x]["Przedmiot"]+"</td>"
        Temp_HTML += "<td>"+Array_With_Notes[x]["Semestr"]+"</td>"
        Temp_HTML += "<td>"+Array_With_Notes[x]["Typ"]+"</td>"
        Temp_HTML += "<td>"+Array_With_Notes[x]["Data Dodania"]+"</td>"
        Temp_HTML += "<td>"+Get_Tags(x)+"</td>"
        Temp_HTML += "<td>"+Array_With_Notes[x]["Opis"]+"</td>"
        Temp_HTML += "<td> <a href='" + Array_With_Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>  "+ "Link" + "</button> </a> </td>"

        Temp_HTML += "</tr>"
    }

    Temp_HTML += "</tbody></table></div>"
    document.getElementById("Content").innerHTML = Temp_HTML
}

function Get_Tags(Index)
{
    /*
        Generate HTML code to display correctly formatted tags.
        This function is used mainly by:
            - Generate_Content_HTML_Version_Grid
            - Generate_Content_HTML_Version_Table
    */

    if (!("Tagi" in Notes_Edited[Index]) || (Notes_Edited[Index]["Tagi"].length == 0)) // If there are not any tags
    {
        return "Brak"
    }

    var Temp_HTML = ""

    for (var x = 0; x < Notes_Edited[Index]["Tagi"].length; x++)
    {
        Temp_HTML += "<div onclick='Filter_By_Tag(\"" + Notes_Edited[Index]["Tagi"][x][0] + "\")' class='badge " + Notes_Edited[Index]["Tagi"][x][1] + "'> " + Notes_Edited[Index]["Tagi"][x][0] + "</div>"
    }

    return Temp_HTML
}

function Filter_Notes_v2()
{
    /*
        Filter notes by user input (text and select).
    */

    // Variables
    var Filter_Text = document.getElementById("Filter_Text").value
    var Filter_Category = document.getElementById("Filter_Select").value
    var Temp_Array = []

    // If there is no user input
    if (Filter_Text == "")
    {
        Notes_Edited = Notes
    }
    // If there is user input
    else
    {
        for (var x = 0; x < Notes.length; x++)
        {
            if (Filter_Category != "Tagi") // If category selected is not "Tags"
            {
                if (Notes[x][Filter_Category].toLowerCase().includes(Filter_Text.toLowerCase()))
                {
                    Temp_Array.push(Notes[x])
                }
            }
            else // If category selected is "Tags"
            {
                for (var y = 0; y < Notes[x][Filter_Category].length; y++)
                {
                    if (Notes[x][Filter_Category][y][0].toLowerCase().includes(Filter_Text.toLowerCase()))
                    {
                        Temp_Array.push(Notes[x])
                    }
                }
            }
        }

        Notes_Edited = Temp_Array
    }

    Reload_All_Diplayed_Notes()
}

function Random_Message_Banner()
{
    /*
        Set text on banner to randomly selected text from the Array.
        
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

function Reload_All_Diplayed_Notes()
{
    /*
        Force reloading all notes in selected View Mode.
    */

    var Current_Mode = document.querySelector("input[name='Content_Mode']:checked").value

    if (Current_Mode == "Grid") // Grid View
    {
        Generate_Content_HTML_Version_Grid(Notes_Edited)
    }
    else if (Current_Mode == "Table") // Table View
    {
        Generate_Content_HTML_Version_Table(Notes_Edited)
    }
}

function Filter_By_Tag(Tag)
{
    /*
        After clicking on specific tag, show only notes with that tag.
    */

    document.getElementById("Filter_Text").value = Tag
    document.getElementById("Filter_Select").value = "Tagi"
    Filter_Notes_v2()
}

function Save_Display_Mode()
{
    /*
        Save current View Mode to local storage, so it can be remembered when opening website.
    */

    localStorage.View_Mode = document.querySelector("input[name='Content_Mode']:checked").value
}

function Load_Display_Mode()
{
    /*
        Load preferred View Mode, if there is none, Grid View will be used.
    */

    if (localStorage.View_Mode)
    {
        document.querySelector("input[value='" + localStorage.View_Mode+ "']").checked = true
        Reload_All_Diplayed_Notes()
    }
    else
    {
        Generate_Content_HTML_Version_Grid(Notes_Edited)
    }
}

//! On Load
window.addEventListener("load", function()
    {
        Random_Message_Banner();
        Load_Display_Mode()
    }
)