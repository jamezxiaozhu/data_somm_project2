function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
  d3.json("/metadata/"+sample).then(function(data){
    // Use d3 to select the panel with id of `#sample-metadata`
    // Use `.html("") to clear any existing metadata
    d3.select("#sample-metadata").html("")
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(data).forEach(([key, value]) => {
      var cell = d3.select("#sample-metadata").append("p");
      cell.text(key + ": " +value);
    });
    // this will return each row of grape, need to groupby grape
   
    
    
  }


  )
    
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json("/samples/"+sample).then(function(sampleInput){
    // parse points to be integer
    sampleInput.forEach(function(data) {
      data.points = +data.points;
    });

    // // @TODO: Build a Bubble Chart using the sample data
    // var trace1 = {
    //   x: sampleInput.points,
    //   y: sampleInput.price,
    //   mode: 'markers',
    //   marker: {
    //     size: sampleInput.price,
    //     color: sampleInput.country
    //   },
    //   text:sampleInput.province
    // };
    
    // var dataBubble = [trace1];
    
    // // var layoutBubble = {
    // //   title: 'Marker Size',
    // //   showlegend: false,
    // //   height: 600,
    // //   width: 600
    // // };
    
    // Plotly.newPlot('bubble', dataBubble);
    // @TODO: Build a Pie Chart
    
      for (i = 0; i < 100; i++){
        console.log(sampleInput[i].points)}
        ;
    
    
        // loop through each value to create list to for chart
      
    var data = [{
      values: sampleInput[0].points,
      labels: sampleInput[0].country,
      hoverinfo:sampleInput[0].province,
      type: 'pie'
    }];
    
    // var layout = {
    //   height: 400,
    //   width: 500
    // };
    
    Plotly.newPlot('pie', data);
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
 
  }
  )
}




// build a world cloud function here






function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/variety").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[1];
    buildCharts(firstSample);
    buildMetadata(firstSample);
    // include buildWordCloud
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();













// // New homeworks set up for reference 

// function buildMetadata(sample) {

//   // @TODO: Complete the following function that builds the metadata panel

//   // Use `d3.json` to fetch the metadata for a sample
//     // Use d3 to select the panel with id of `#sample-metadata`

//     // Use `.html("") to clear any existing metadata

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.

//     // BONUS: Build the Gauge Chart
//     // buildGauge(data.WFREQ);
// }

// function buildCharts(sample) {

//   // @TODO: Use `d3.json` to fetch the sample data for the plots

//     // @TODO: Build a Bubble Chart using the sample data

//     // @TODO: Build a Pie Chart
//     // HINT: You will need to use slice() to grab the top 10 sample_values,
//     // otu_ids, and labels (10 each).
// }

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("/variety").then((data) => {
//     var sampleNames = data.names;

//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     var firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// // Initialize the dashboard
// init();