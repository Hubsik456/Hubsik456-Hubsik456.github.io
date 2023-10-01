//! Variables
var Notes_Edited = Notes

//! Functions
function Generate_Content_HTML_Version_Grid(Array_With_Notes = Notes)
{
    /*
        Generate HTML code to display notes in form of a grid.
    */

    if (Array_With_Notes.length == 0)
    {
        If_There_Are_No_Notes()
        return
    }
    
    Temp_HTML = ""
    
    for (var x = 0; x < Array_With_Notes.length; x++)
    {
        Temp_HTML += "<div class='col-sm-4 mt-4 p-4 Note'>"
        Temp_HTML += "<div class='Note_Counter text-primary'> <p>#" + (x+1) + "</p> </div>"
        Temp_HTML += "<p>"
        Temp_HTML += "<b class='border-bottom border-primary'>" + Array_With_Notes[x]["Nazwa"] + "</b> <br>"
        Temp_HTML += "<small>" + Array_With_Notes[x]["Przedmiot"] + "</small> <br>"
        Temp_HTML += "<i title='Semestr:  " + Array_With_Notes[x]["Semestr"] + "\nTyp: " + Array_With_Notes[x]["Typ"] + "'>" + Array_With_Notes[x]["Semestr"] + " " + Array_With_Notes[x]["Typ"] + " </i> " + Array_With_Notes[x]["Data Dodania"] + "<br>"
        Temp_HTML += "<b>Autor: </b> " + Array_With_Notes[x]["Autor"]
        Temp_HTML += "<div class='d-grid'> <a href='" + Array_With_Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>" + "Link" + "</button> </a> </div> <br>"
        //Temp_HTML += "<div class='btn-group w-100'> <a href='#' class='btn btn-primary w-75'>Link (Nowa Karta)</a> <a href='#' class='btn btn-primary-light w-25'>Link</a> </div>" //TODO: To generate two buttons, first opens note in new tab, second in the same tab
        Temp_HTML += Array_With_Notes[x]["Opis"] + "<br>"
        Temp_HTML += "<div class='Hr_Text'>&nbsp;Tagi:&nbsp;</div>" + Get_Tags(x) + "<br>"
        Temp_HTML += "</p>"
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

    if (Array_With_Notes.length == 0)
    {
        If_There_Are_No_Notes()
        return
    }

    Temp_HTML = "<div class='overflow-auto'><table class='table table-hover table-striped border border-primary' id='Notes_Table'>"

    for (var x = 0; x < Array_With_Notes.length; x++)
    {
        if (x == 0) // Table Header
        {
            Temp_HTML += "<thead class='align-middle text-center'><tr class='table-success'>" // TODO: zamiast "table-success" dać jakoś primary
            Temp_HTML += "<th>Nazwa</th>"
            Temp_HTML += "<th>Przedmiot</th>"
            Temp_HTML += "<th>Semestr</th>"
            Temp_HTML += "<th>Typ</th>"
            Temp_HTML += "<th>Data Dodania</th>"
            Temp_HTML += "<th>Tagi</th>"
            Temp_HTML += "<th>Opis</th>"
            Temp_HTML += "<th>Autor</th>"
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
        Temp_HTML += "<td>"+Array_With_Notes[x]["Autor"]+"</td>"
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
    Scroll_To_Top()
    Note_Counter()
}

function Advanced_Filter_Notes()
{
    /*
        Advanded menu for filtering notes.
        
        In order to filter tags you have to check Array (part of every Note[x] Dict) if tags is there, is yes then skip searching and mark it as found, if tag is not found mark it as not found. "Counter" wont work because tags have many options and there is only needed one correct tag. Counter would require that all tags are matched.
    */

    var Filters = {
        "Nazwa": document.getElementById("Advanced_Filter_Name").value,
        "Przedmiot": document.getElementById("Advanced_Filter_Subject").value,
        "Semestr": document.getElementById("Advanced_Filter_Semester").value,
        "Typ": document.getElementById("Advanced_Filter_Type").value,
        "Data Dodania": document.getElementById("Advanced_Filter_Date").value,
        "Tagi": document.getElementById("Advanced_Filter_Tags").value,
        "Opis": document.getElementById("Advanced_Filter_Description").value,
        "Autor": document.getElementById("Advanced_Filter_Author").value,
    }
    var Temp_Array = []

    for (var x = 0; x < Notes.length; x++)
    {
        var Counter = 0
        var Tag_Found = true

        for (var y in Filters)
        {
            if (Filters[y] != "") // "Continue" if corresponding input field is empty
            {
                if (y == "Tagi") // If current category is "Tags"
                {
                    for (var z = 0; z < Notes[x][y].length; z++)
                    {
                        if (Notes[x][y][z][0].toLowerCase().includes(Filters[y].toLowerCase())) // "y" works only because every dict in "Notes" has the same keys
                        {
                            Tag_Found = true
                            break
                        }
                        else {
                            Tag_Found = false
                        }
                    }
                }
                else // If current category is not "Tags"
                {
                    if (!(Notes[x][y].toLowerCase().includes(Filters[y].toLowerCase())))
                    {
                        Counter = Counter+1
                    }
                }
            }
        }

        if (Counter == 0 && Tag_Found == true)
        {
            Temp_Array.push(Notes[x])
        }
    }

    Notes_Edited = Temp_Array

    Reload_All_Diplayed_Notes()
    Scroll_To_Top()
    Note_Counter()
}

function Random_Message_Banner()
{
    /*
        Set text on banner to randomly selected text from the Array.
        
        TODO: Add more texts
    */

    Texts = [
        "Z jakimiś notakami",
        "Bierzcie i uczcie się z tego wszyscy",
        "Nie obiecuje że zdasz...",
        "Za frekwencję moją i waszą",
        "Design Is My Passion",
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

    if (document.getElementById("Advanced_Filter_Checkbox").checked)
    {
        document.getElementById("Advanced_Filter_Tags").value = Tag
        Advanced_Filter_Notes()
    }
    else
    {
        document.getElementById("Filter_Text").value = Tag
        document.getElementById("Filter_Select").value = "Tagi"
        Filter_Notes_v2()
    }
}

function Save_Local_Storage()
{
    /*
        Save current inputs to local storage.
    */

    localStorage.View_Mode = document.querySelector("input[name='Content_Mode']:checked").value
    localStorage.Advanced_Filter = document.getElementById("Advanced_Filter_Checkbox").checked
    localStorage.Filter_Save_Results = document.getElementById("Filter_Save_Results").checked
    
    if (document.getElementById("Filter_Save_Results").checked)
    {
        Save_Filter_Input()
    }
}

function Load_Local_Storage()
{
    /*
        Load preferred option from local storage.
    */

    // View Mode
    if (localStorage.View_Mode)
    {
        document.querySelector("input[value='" + localStorage.View_Mode+ "']").checked = true
        Reload_All_Diplayed_Notes()
    }
    else
    {
        Generate_Content_HTML_Version_Grid(Notes_Edited)
    }

    // Advanced Filter Menu
    if (localStorage.Advanced_Filter)
    {
        if (localStorage.Advanced_Filter == "true")
        {
            document.getElementById("Advanced_Filter_Checkbox").checked = true
        }
        else
        {
            document.getElementById("Advanced_Filter_Checkbox").checked = false
        }

        Change_Filter_Menu()
    }

    // Filter Save Results
    if (localStorage.Filter_Save_Results)
    {
        if (localStorage.Filter_Save_Results == "true")
        {
            document.getElementById("Filter_Save_Results").checked = true

            // Set saved filter
            document.getElementById("Filter_Text").value = localStorage.Filter_Save_Results_Filter_Text
            document.getElementById("Filter_Select").value = localStorage.Filter_Save_Results_Filter_Select
            document.getElementById("Advanced_Filter_Name").value = localStorage.Filter_Save_Results_Name
            document.getElementById("Advanced_Filter_Subject").value = localStorage.Filter_Save_Results_Subject
            document.getElementById("Advanced_Filter_Semester").value = localStorage.Filter_Save_Results_Semester
            document.getElementById("Advanced_Filter_Type").value = localStorage.Filter_Save_Results_Type
            document.getElementById("Advanced_Filter_Date").value = localStorage.Filter_Save_Results_Date
            document.getElementById("Advanced_Filter_Tags").value = localStorage.Filter_Save_Results_Tags
            document.getElementById("Advanced_Filter_Description").value = localStorage.Filter_Save_Results_Description

            // Apply correct filter
            if (localStorage.Advanced_Filter == "true")
            {
                Advanced_Filter_Notes()
            }
            else
            {
                Filter_Notes_v2()
            }
        }
        else
        {
            document.getElementById("Filter_Save_Results").checked = false
        }
    }
}

function Save_Filter_Input()
{
    /*
        Saves user all user input to Local Storate.
    */

    localStorage.Filter_Save_Results_Filter_Text = document.getElementById("Filter_Text").value
    localStorage.Filter_Save_Results_Filter_Select = document.getElementById("Filter_Select").value
    localStorage.Filter_Save_Results_Name = document.getElementById("Advanced_Filter_Name").value
    localStorage.Filter_Save_Results_Subject = document.getElementById("Advanced_Filter_Subject").value
    localStorage.Filter_Save_Results_Semester = document.getElementById("Advanced_Filter_Semester").value
    localStorage.Filter_Save_Results_Type = document.getElementById("Advanced_Filter_Type").value
    localStorage.Filter_Save_Results_Date = document.getElementById("Advanced_Filter_Date").value
    localStorage.Filter_Save_Results_Tags = document.getElementById("Advanced_Filter_Tags").value
    localStorage.Filter_Save_Results_Description = document.getElementById("Advanced_Filter_Description").value
}

function Scroll_To_Top()
{
    /*
        Scroll website to the top, so there wont be any problems when main content block is too short.
    */

    window.scrollTo(0, 0)
}

function If_There_Are_No_Notes()
{
    /*
        Display message when no notes can be displayed because of filters.
    */
    
    var Filters = {
        "Nazwa": document.getElementById("Advanced_Filter_Name").value,
        "Przedmiot": document.getElementById("Advanced_Filter_Subject").value,
        "Semestr": document.getElementById("Advanced_Filter_Semester").value,
        "Typ": document.getElementById("Advanced_Filter_Type").value,
        "Data Dodania": document.getElementById("Advanced_Filter_Date").value,
        "Tagi": document.getElementById("Advanced_Filter_Tags").value,
        "Opis": document.getElementById("Advanced_Filter_Description").value,
    }

    if (document.getElementById("Advanced_Filter_Checkbox").checked)
    {
        var Error_Message = "<ul>"
        for (var x in Filters)
        {
            if (Filters[x] != "")
            {
                Error_Message += "<li><samp class='border border-danger-subtle'>" + Filters[x] + "</samp> (" + x + ")</li>"
            }
        }
        Error_Message += "</ul>"

        document.getElementById("Content").innerHTML = "<div class='alert alert-danger'><b>Brak Notatek</b><br>Nie ma notatek zawierących takie dane: " + Error_Message + "Wyszukiwane notatki muszą spełniać <b>wszystkie</b> podane filtry.<br>Aby wyświetlić notatki usuń lub zmodyfikuj filtr wyszukiwania.</div>"
    }
    else
    {
        Filter_Text = document.getElementById("Filter_Text").value
        Filter_Select = document.getElementById("Filter_Select").value

        document.getElementById("Content").innerHTML = "<div class='alert alert-danger'><b>Brak Notatek</b><br>Nie ma notatek zawierących takie dane: <samp class='border border-danger-subtle'>" + Filter_Text + "</samp> (" + Filter_Select + ") " + "<br>Aby wyświetlić notatki usuń lub zmodyfikuj filtr wyszukiwania.</div>"
    }
}

function Change_Filter_Menu()
{
    /*
        Depending on status of checkbox show correct filter menu.
    */

    if (document.getElementById("Advanced_Filter_Checkbox").checked)
    {
        document.getElementById("Simplified_Filter").style.display = "none"
        document.getElementById("Advanced_Filter").style.display = "initial"
    }
    else
    {
        document.getElementById("Simplified_Filter").style.display = "initial"
        document.getElementById("Advanced_Filter").style.display = "none"
    }


}

function Delete_Input(Element_ID)
{
    /*
        Delete value from input and reload filter.
    */

    document.getElementById(Element_ID).value = ""
    if (document.getElementById("Advanced_Filter_Checkbox").checked)
    {
        Advanced_Filter_Notes()
    }
    else
    {
        Filter_Notes_v2()
    }

    Save_Filter_Input()
}

function Note_Counter()
{
    /*
        Display how many notes are shown, includes filters.
    */

    document.getElementById("Note_Counter").innerHTML = "Znaleziono <b>" + Notes_Edited.length + "</b> notatek."
}

function Scroll_Progress()
{
    /*
        Change widht of scroll progress indicator.

        https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
    */

    var Window_Scroll = document.body.scrollTop || document.documentElement.scrollTop
    var Height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var Scroll_Progress = (Window_Scroll / Height) * 100

    document.getElementById("Scroll_Progress_Bar").style.width = Scroll_Progress + "%"
}

//! On Load
window.addEventListener("load", function()
    {
        // Sort all tags in original "Notes" variable 
        Notes.forEach(function(x,y){Notes[y].Tagi.sort()})

        // Add event listener to all accordions so they call "Scroll_Progress()" function after animation is done
        document.querySelectorAll("button.accordion-button.collapsed").forEach(function(x){
            x.addEventListener("click", function(){
                    setTimeout(Scroll_Progress, 300) //"$accordion-transition" variable is set to 150ms; https://getbootstrap.com/docs/5.0/components/accordion/
                }
            )
        })

        // Other Functions
        Random_Message_Banner()
        Load_Local_Storage()
        Note_Counter()
    }
)

//! On Scroll
window.addEventListener("scroll", function()
    {
        Scroll_Progress()
    }
)

//! On Before Unload
window.addEventListener("beforeunload", function()
    {
        Save_Local_Storage()
    }
)