document.write("<table>");
document.write("<tr>");
    for (a = 2; a < 10; a++) {
        document.write("<th>");
        document.write("</th>");
    }
document.write("</tr>");
for (x = 2; x < 10; x++) {
    document.write("<td>");
    for (y = 1; y < 10; y++) {
        document.write(x + "*" + y + "=" + x * y + "<br>");
    }
    document.write("</td>");
}
document.write("</table>");