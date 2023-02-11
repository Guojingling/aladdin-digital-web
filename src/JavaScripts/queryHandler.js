function testResults (form) {
    preventDefault();
    var name = form.name.value;
    alert ("Thanks for your query, " + name) + ". We will get back to you shortly";
    location.reload();
}