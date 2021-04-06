var tableData = data
function createTable(data){
	var tbody=d3.select('tbody')
	tbody.html("")
	data.forEach(i => {
    	row = tbody.append('tr');
   	 	Object.values(i).forEach(text => {
        	let cell = row.append('td');
        	cell.text(text);
        })
})
}

d3.selectAll("#filter-btn").on("click",function(){
	var date=d3.select('#datetime').property("value")
	var filteredData=tableData.filter(row=>row.datetime===date)
	createTable(filteredData)
})
createTable(tableData)




  


  