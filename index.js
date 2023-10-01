function Fill_Lorem_Ipsum(Paragraph_Amount = 1, Start_End_Tag = true)
{
    var Lorem_Ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi ac nisl luctus sodales varius nec purus. Sed metus purus, laoreet sed orci vitae, interdum condimentum nulla. In consectetur leo vel nibh efficitur convallis. Fusce neque ligula, tempus tempus tempus eget, tempor sit amet tellus. Suspendisse pretium lacus massa, sit amet scelerisque nisl mollis nec. Etiam vehicula quis dui sodales ultricies. Nunc efficitur neque massa, eu lobortis justo lacinia at. Donec ultrices eget metus in convallis. Integer dapibus, arcu eget gravida iaculis, elit orci pretium ligula, nec facilisis leo dui ornare ante. Proin urna urna, vulputate eget eleifend tempor, elementum at mi. Nullam ut molestie arcu. Praesent tellus orci, fermentum non nisl nec, mattis consequat risus.<br>"
    var Elements_To_Fill = document.querySelectorAll(".Lorem_Ipsum")

    for (var x = 0; x < Elements_To_Fill.length; x++)
    {
        // Start Tag
        if (Start_End_Tag)
        {
            Elements_To_Fill[x].innerHTML = '<strong>[START]</strong> '
        }
        else
        {
            Elements_To_Fill[x].innerHTML = ''
        }
        
        // Actual Content
        for (var y = 0; y < Paragraph_Amount; y++)
        {
            Elements_To_Fill[x].innerHTML += Lorem_Ipsum
        }

        // End Tag
        if (Start_End_Tag)
        {
            Elements_To_Fill[x].innerHTML += ' <strong>[END]</strong>'
        }
    }
}

window.addEventListener("load", function() {
    Fill_Lorem_Ipsum(10, true)
});