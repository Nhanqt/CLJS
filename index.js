function myFunction() {
  document.getElementById("myBtn").addEventListener("click", function () {
    var myTableDiv = document.getElementById("myDynamicTable");
    var column = document.getElementById("iColumn").value;
    var row = document.getElementById("iRow").value;
    var table = document.createElement("TABLE");
    table.border = "1";

    var tableBody = document.createElement("TBODY");
    table.appendChild(tableBody);

    for (var i = 0; i < row; i++) {
      var tr = document.createElement("TR");
      tableBody.appendChild(tr);

      for (var j = 0; j < column; j++) {
        var td = document.createElement("TD");
        td.width = "75";
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  });
}
