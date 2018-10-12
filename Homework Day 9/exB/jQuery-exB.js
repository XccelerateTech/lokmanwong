// B Reusing the file downloaded for the previous page. Try to do the following thing in the console of the developer tools in Javascript , not adding to the html.

// Adding a contact to the contact list
// Name: Peter
// telephone: 123456789
// email: peter@gmail.com
// Adding an extra button to the form called Clear
// Change the title of the page to <Your name>'s contact list application
// Change the color of the text in the contact list.



$('tbody').append(`
<tr class = "row" id = "row-4">
<td>Mary</td> <td>424242424</td><td>mary@gmail.com</td>
</tr>`)

$('div #row-submit').append(`<button id="row-clear">
 clear</button>`)

 $( "header" ).replaceWith( "<h1>Lok's Contact list</h1>" )

 $("#contact-list table").css( "color", "red" );


  
