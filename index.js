Notes = [
    {
        "Nazwa": "Algorytmy",
        "Link": "https://docs.google.com/document/d/19eNd4xV6QiRhcmh-wAF4ircbDa8Jq5B_/edit?usp=share_link&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Algorytmy i Struktury Danych",
        "Typ": "WYK",
        "Opis": "Przepisane notatki odręczne z wykładów do '.docx'.",
        "Data": "16.03.2023",
    },
    {
        "Nazwa": "Teoria Ze Statystyki",
        "Link": "https://docs.google.com/document/d/1Gzje4d1ZYVvNb2kEXONHmM_3S0kAlq4t/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Podstawy Statystyki",
        "Typ": "ĆWI",
        "Opis": "Zbiór tematów z teorii, potrzebnych do zadań z Excela.",
        "Data": "16.03.2023",
    },
    {
        "Nazwa": "Teoria Z Matematyki",
        "Link": "https://docs.google.com/document/d/18qiJ-BVsH1IBxmOpus3buRlEpXGsl1cd/edit?usp=sharing&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "2",
        "Przedmiot": "Matematyka",
        "Typ": "WYK",
        "Opis": "Notatka z teorii z wykładów z matematyki.<br>Prawdopodobnie nie będę tego aktualizować.",
        "Data": "16.03.2023",
    },
    {
        "Nazwa": "Polecenia Cisco",
        "Link": "https://docs.google.com/document/d/1VoiaElkw0o0K4ZVoQ3-rkYqZLedokKEp/edit?usp=share_link&ouid=100657602081476731659&rtpof=true&sd=true",
        "Semestr": "1",
        "Przedmiot": "CCNA",
        "Typ": "LAB",
        "Opis": "Spis poleceń używanych na labach i zaliczeniu z CCNA.",
        "Data": "16.03.2023",
    },
    {
        "Nazwa": "Zagadnienia Z Programowania",
        "Link": "https://docs.google.com/document/d/1WYgtHKWydYKh0K-F7NbaZlfTcUCoXwmu70V01F51Nww/edit?usp=share_link",
        "Semestr": "1",
        "Przedmiot": "WYK",
        "Typ": "LAB",
        "Opis": "Spis tematów z wykładów z programowania, bardzo ogólikowa.<br>TODO: Przerobić na .docx",
        "Data": "16.03.2023",
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

function Generate_Content_HTML_Version_Grid()
{
    Temp_HTML = ""

    for (var x = 0; x < Notes.length; x++)
    {
        console.log(Notes[x]["Link"])
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

window.addEventListener("load", function()
    {
        Generate_Content_HTML_Version_Grid();
    }
)

