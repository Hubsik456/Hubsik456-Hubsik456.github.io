//! Variables
Notes = [
    {
        "Nazwa": "Notatka z Algorytmów",
        "Link": "https://docs.google.com/document/d/1FySY5F8-b4vS5vgapZ9qYbU_V4plD-rO/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Algorytmy i Struktury Danych",
        "Typ": "WYK",
        "Opis": "Przepisane notatki odręczne z wykładów do '.docx'.",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Notatka z Elektroniki",
        "Link": "https://docs.google.com/document/d/1zu1gSv3h2jwVG57Nb15VNuegcS2MmMrW/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Podstawy Elektrotechniki i Elektroniki",
        "Typ": "WYK",
        "Opis": "Przerobione materiały z elektroniki.",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Przykłady Ze Statystyki",
        "Link": "https://docs.google.com/spreadsheets/d/10fj92JV-Dmfty0xuCGCUKZqSKCQKMgtl/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Podstawy Statystyki",
        "Typ": "ĆWI",
        "Opis": "Przerobione przykłady z zajęć.<br>TODO: Niedokończone",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Statystyka Excele",
        "Link": "https://docs.google.com/spreadsheets/d/1-aGamF2Ne6W0oPxkQ3zck6miCMf2vH2Q/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Statystyka",
        "Typ": "ĆWI",
        "Opis": "Zbiór najważniejszych Excelów z zajęć",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Teoria Ze Statystyki",
        "Link": "https://docs.google.com/document/d/10SUZaOgxJkb3PXj0UB24coSYJcWQtMAy/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Podstawy Statystyki",
        "Typ": "ĆWI",
        "Opis": "Zbiór tematów z teorii, potrzebnych do zadań z Excela.<br>TODO: Niedokończone",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Teoria Ze Statystyki v2",
        "Link": "https://docs.google.com/document/d/1-QEmk1I7nY4DHwh0eL7fzVu-X3RuTAfE/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Podstawy Statystyki",
        "Typ": "ĆWI",
        "Opis": "Poprawiona wersja. Pojęcia i wzory potrzebne do zaliczenia.",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Zadania Z Algorytmów",
        "Link": "https://drive.google.com/file/d/1973OjdZ6UPz04QSEVSDHBfq4nAA_mXmN/view?usp=sharing",
        "Semestr": "2",
        "Przedmiot": "Algorytmy i Struktury Danych",
        "Typ": "LAB",
        "Opis": "Rozwiązania wszystkich zadań z labów z algorytmów.<br>TODO: Niedokończone",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Teoria Z Matematyki",
        "Link": "https://docs.google.com/document/d/1yxILXqchGWLbXnCAGNScqg5EFEp4HYbJ/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Matematyka",
        "Typ": "WYK",
        "Opis": "Notatka z teorii z wykładów z matematyki.<br>TODO: Niedokończone",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Polecenia Cisco",
        "Link": "https://docs.google.com/document/d/1VoiaElkw0o0K4ZVoQ3-rkYqZLedokKEp/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "1",
        "Przedmiot": "CCNA",
        "Typ": "LAB",
        "Opis": "Spis poleceń używanych na labach i zaliczeniu z CCNA.",
        "Data": "14.06.2023",
    },
    {
        "Nazwa": "Zagadnienia Z Programowania",
        "Link": "https://docs.google.com/document/d/1WYgtHKWydYKh0K-F7NbaZlfTcUCoXwmu70V01F51Nww/edit?usp=sharing",
        "Semestr": "1",
        "Przedmiot": "WYK",
        "Typ": "LAB",
        "Opis": "Spis tematów z wykładów z programowania, bardzo ogólnikowe.<br>TODO: Przerobić na .docx",
        "Data": "14.06.2023",
    },
    /* Szablon:
    {
        "Nazwa": "NAZWA",
        "Link": "LINK",
        "Semestr": "___",
        "Przedmiot": "PRZEDMIOT",
        "Typ": "WYK/ĆWI/LAB",
        "Opis": "OPIS",
        "Data": "DD.MM.YYYY",
    },
    */
]

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
        Temp_HTML += "<div class='d-grid'> <a href='" + Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>  "+ "Link" + "</button> </a> </div> <br>"
        Temp_HTML += "<hr>" + Notes[x]["Opis"] + "<br>"
        Temp_HTML += "</p>"
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
        Temp_HTML += "<td>"+Notes[x]["Opis"]+"</td>"
        Temp_HTML += "<td> <a href='" + Notes[x]["Link"] + "'> <button class='btn btn-primary btn-block'>  "+ "Link" + "</button> </a> </td>"

        Temp_HTML += "</tr>"
    }

    Temp_HTML += "</tbody></table></div>"
    document.getElementById("Content").innerHTML = Temp_HTML
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
        "Opis": 5,
    }
    var Temp_Grid = document.getElementsByClassName("Note")[0]
    var Temp_Table = document.getElementById("Notes_Table")

    // Widok Siatki
    if (Temp_Grid !== undefined)
    {
        var Blocks = document.getElementsByClassName("Note")

        // for (var x = 0; x < Blocks.length; x++)
        // {
        //     // TODO:
        // }
    }
    // Widok Tabeli
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
        Disable input for filtering notes. Not finished
        TODO:
    */
    var Current_Mode = document.querySelector("input[name='Content_Mode']:checked").value
    
    if (Current_Mode == "Grid")
    {
        document.getElementById("Filter_Text").disabled = true
    }
    else if (Current_Mode == "Table")
    {
        document.getElementById("Filter_Text").disabled = false
    }
}

//! On Load
window.addEventListener("load", function()
    {
        Generate_Content_HTML_Version_Grid();
        //Generate_Content_HTML_Version_Table();

        document.getElementById("Filter_Text").disabled = true // JEŚLI Domyslnie ma być widok Siatki TODO:
    }
)
