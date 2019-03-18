// from data.js
var tableData = data;

var tbody = d3.select("tbody")

tableAll()

//show all records when no date is provided
function tableAll(){
    tableData.forEach((record) => {   
        var row = tbody.append("tr");
        Object.entries(record).forEach( ([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        })
    })
}


//show some records when date is indicated
function tableFiltered(date){
    if (date == ""){
        tableAll()
    } else {
        tableData.forEach( (record) => {
            var row = tbody.append("tr");
            if (record.datetime == date) {
                Object.entries(record).forEach( ([key, value]) => {
                    var cell = tbody.append("td");
                    cell.text(value);
                })
            } else {
    
            }
        })

    }    
}

// initialize date 
var filterDate = "";

var inputDate = d3.select("#datetime")

inputDate.on("change", function(){
    filterDate = d3.event.target.value
    //console.log(filterDate)
})
 
// button click event handling
var button = d3.select("#filter-btn")
button.on("click", function(){
    d3.event.preventDefault();
    tbody.selectAll("td").remove();
    tableFiltered(filterDate);
})