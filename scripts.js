/*LINE GRAPH COLORS*/

const lineColors = {
    purple: "#636bdb",
    green: "#46d4bf",
    blue: "#1976ef"
}

/*PLOTLY SETTINGS*/
const config = {
    displayModeBar: false,
    responsive: true
}


/*VIS 1*/

function make_plot1(csv_data) {
    //Filter our csv data for a particular country 
    //code interpreted from Week 8 tutorial and Week 9 tutorial 
    var country_data1 = csv_data.filter(d => d.country == "China");


    //Add our main data trace which is only one in this mapping
    var trace1 = {
        x: country_data1.map(d => d.year),
        y: country_data1.map(d => d.mortality),
        mode: 'lines',
        name: 'china',
        line: {
            color: lineColors.purple,
            width: 4,
        }
    }

    var data = [trace1]

//stlying the graph 
    var layout1 = {
        title: "China's child mortality rate from 1850 - 2017",
        font: {
            size: 15,
            family: "Helvetica, sans-serif",
            color: "rgb(21,36,61)",
        },
        xaxis: {
            title: "Years"
        },
        yaxis: {
            title: "Deaths per 1,000 live births"
        },
        paper_bgcolor: "rgb(0,0,0,000)",
        plot_bgcolor: "rgb(0,0,0,000)",
        //Creating annotations on the graph 
        annotations: [
            {
                x: 2017,
                y: 14,
                xref: 'x',
                yref: 'y',
                text: '13',
                showarrow: true,
                arrowhead: 6,
                ax: 0,
                ay: -100,

                bordercolor: lineColors.green,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.green,
            },
            {
                x: 1850,
                y: 418,
                xref: 'x',
                yref: 'y',
                text: '417',
                showarrow: true,
                arrowhead: 6,
                ax: 0,
                ay: -100,

                font: {
                    color: '#ffffff'
                },

                bordercolor: lineColors.blue,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.blue,
            }
        ]
    };

    //Draw the plot at our div
    Plotly.newPlot('vis1', data, layout1, config);
}


//VIS 2

function make_plot2(csv_data) {
    //Filter our csv data for a particular country 
    var country_data1 = csv_data.filter(d => d.country == "China1");


    //Add our main data trace which is only one in this mapping
    var trace1 = {
        x: country_data1.map(d => d.year),
        y: country_data1.map(d => d.mortality),
        mode: 'lines',
        name: 'china',
        line: {
            color: lineColors.purple,
            width: 4,
        }
    }

    var data = [trace1]

    var layout1 = {
        title: "China's child mortality rate from 1990 - 2017",
        font: {
            size: 15,
            family: "Helvetica, sans-serif",
            color: "rgb(21,36,61)",
        },
        xaxis: {
            title: "Years"
        },
        yaxis: {
            title: "Deaths per 1,000 live births"
        },
        paper_bgcolor: "rgb(0,0,0,000)",
        plot_bgcolor: "rgb(0,0,0,000)",
        //Creating annotations on the graph 
        annotations: [
            {
                x: 2008,
                y: 23,
                xref: 'x',
                yref: 'y',
                text: 'MDG4 Achieved',
                showarrow: true,
                arrowhead: 3,
                ax: 0,
                ay: -100,

                bordercolor: lineColors.green,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.green,
            },
            {
                x: 2004,
                y: 29,
                xref: 'x',
                yref: 'y',
                text: 'SDG3.2 Achieved',
                showarrow: true,
                arrowhead: 3,
                ax: 0,
                ay: -100,

                font: {
                    color: '#ffffff'
                },

                bordercolor: lineColors.blue,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.blue,
            }
        ]
    };

    //Draw the plot at our div
    Plotly.newPlot('vis2', data, layout1, config);
}



//VIS 3 Code interpreted from plotly library https://plotly.com/javascript/bar-charts/#basic-bar-chart

var xValue = ['Urban', 'Rural', 'Township health centres'];

var yValue = [8.78, 4.81, 1.48];

var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    //Shows the value of each coloumn without hovering over 
    text: yValue.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: lineColors.green,

    },

};


var data = [trace1];

var layout1 = {
    title: "Number of beds in Health Care Institutions by Urban and Rural areas",
    font: {
        size: 15,
        family: "Helvetica, sans-serif",
        color: "rgb(21,36,61)",
    },
    xaxis: {
        title: "Regional Area"
    },
    yaxis: {
        title: "Beds per 1,000 Population"
    },
    paper_bgcolor: "rgb(0,0,0,000)",
    plot_bgcolor: "rgb(0,0,0,000)",

}

Plotly.newPlot('vis3', data, layout1, config);


//VIS 4 Code interpreted from plotly library https://plotly.com/javascript/bar-charts/#stacked-bar-chart

var trace1 = {
    x: ['Urban', 'Rural'],
    y: [11.10, 4.96],
    name: 'Health Technical Personnel',
    type: 'bar',
    hoverinfo: 'none',
    marker: {
        color: lineColors.purple,
    }
};

var trace2 = {
    x: ['Urban', 'Rural'],
    y: [4.10, 1.96],
    name: 'Licensed Physician',
    type: 'bar',
    hoverinfo: 'none',
    marker: {
        color: lineColors.green,
    }
};

var trace3 = {
    x: ['Urban', 'Rural'],
    y: [5.22, 1.99],
    name: 'Registered Nurses',
    type: 'bar',
    hoverinfo: 'none',
    marker: {
        color: lineColors.blue,
    }
};


var data = [trace1, trace2, trace3];

var layout1 = {
    title: "The number of heath personnel in medical institutions 2019",
    font: {
        size: 15,
        family: "Helvetica, sans-serif",
        color: "rgb(21,36,61)",
    },
    xaxis: {
        title: "Regional Area"
    },
    yaxis: {
        title: "Health personnel per 1,000 Population"
    },

    paper_bgcolor: "rgb(0,0,0,000)",
    plot_bgcolor: "rgb(0,0,0,000)",

    legend: {
        bgcolor: "#ffffff",
    },

    barmode: 'stack',
};

Plotly.newPlot('vis4', data, layout1, config, { staticPlot: true });

//VIS 5 code interpreted form https://plotly.com/javascript/pie-charts/

var trace1 = {
    values: [31450.5, 13477.5],
    labels: ['Urban', 'Rural'],
    type: 'pie',
    marker: {
        colors: [lineColors.purple, lineColors.green]
    },
};
var data = [trace1];


var layout = {
    title: "% of Broadband subscribers per 10,000 subscribers in 2019",
    height: 500,
    width: 550,

    font: {
        size: 14,
        family: "Helvetica, sans-serif",
        color: "rgb(21,36,61)",
    },

    paper_bgcolor: "rgb(0,0,0,000)",
    plot_bgcolor: "rgb(0,0,0,000)",

    legend: {
        bgcolor: "#ffffff",
    },

};


Plotly.newPlot('vis5', data, layout, config);





//REGRESSION Code adapted from week 8 tutorials

function make_plot3(csv_data) {
    var country_data1 = csv_data.filter(d => d.country == "China1"); //Filtering "China1" as it only includes year 1990-2017 as this will provide a smoother and more accurate prediction curve

    //To normalise our data, we need to know the minimum and maximum values
    //Math.min doesn't work with strings so we need to convert
    var mortality_data = country_data1.map(d => Number(d.mortality))
    var min_mortality = Math.min(...mortality_data)
    var max_mortality = Math.max(...mortality_data)

    //This regression library needs values stored in arrays
    //We are using the strech function to normalise our data
    var regression_data = country_data1.map(d => [stretch(d.year, 1990, 2017, 0, 1),
    stretch(d.mortality, min_mortality, max_mortality, 0, 1)])

    //Training the regressor
    var regression_result = regression.polynomial(regression_data, { order: 2 }); //Changing order value to provide a better curve

    var extension_x = [];
    var extension_y = [];
    for (var year = 2017; year < 2041; year++) {
        var prediction = regression_result.predict(stretch(year, 1990, 2017, 0, 1))[1]

        extension_x.push(year);
        //un-normalising for displaying on the plot
        extension_y.push(stretch(prediction, 0, 1, min_mortality, max_mortality));
    }


    var trace1 = {
        x: country_data1.map(d => d.year),
        y: country_data1.map(d => d.mortality),
        mode: 'lines',
        name: 'Child Mortality Rate',
        line: {
            color: lineColors.blue,
            width: 4,
        }
    };
    //adding our prediction as a second trace
    var trace2 = {
        x: extension_x,
        y: extension_y,
        mode: 'lines',
        name: 'Prediction',
        line: {
            color: lineColors.green,
            width: 4,
        }
    };

    var data = [trace1, trace2]

    var layout = {
        title: "Predicting China's National child mortaltity rate for 2040",

        paper_bgcolor: "rgb(0,0,0,000)",
        plot_bgcolor: "rgb(0,0,0,000)",

        font: {
            size: 15,
            family: "Helvetica, sans-serif",
            color: "rgb(21,36,61)",
        },
        xaxis: {
            title: "Years"
        },
        yaxis: {
            title: "Deaths per 1,000 live births"
        },

        legend: {
            bgcolor: "#ffffff",
        },

        annotations: [
            {
                x: 2040,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: '0 Mortaltiy Rate',
                showarrow: true,
                arrowhead: 3,
                ax: 0,
                ay: -100,

                bordercolor: lineColors.green,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.green,
            },
        ]

    };

    Plotly.newPlot('vis6', data, layout, config);
};

//REGRESSION FO URBAN CHINA

function make_plot4(csv_data) {
    var country_data1 = csv_data.filter(d => d.country == "Urban China");


    var mortality_data = country_data1.map(d => Number(d.mortality))
    var min_mortality = Math.min(...mortality_data)
    var max_mortality = Math.max(...mortality_data)

    var regression_data = country_data1.map(d => [stretch(d.year, 1990, 2019, 0, 1),
    stretch(d.mortality, min_mortality, max_mortality, 0, 1)])

    var regression_result = regression.polynomial(regression_data, { order: 3 });

    var extension_x = [];
    var extension_y = [];
    for (var year = 2019; year < 2031; year++) {
        var prediction = regression_result.predict(stretch(year, 1990, 2019, 0, 1))[1]

        extension_x.push(year);
        extension_y.push(stretch(prediction, 0, 1, min_mortality, max_mortality));
    }


    var trace1 = {
        x: country_data1.map(d => d.year),
        y: country_data1.map(d => d.mortality),
        mode: 'lines',
        name: 'Child Mortality Rate',
        line: {
            color: lineColors.blue,
            width: 4,
        }
    };
    var trace2 = {
        x: extension_x,
        y: extension_y,
        mode: 'lines',
        name: 'Prediction',
        line: {
            color: lineColors.green,
            width: 4,
        }
    };

    var data = [trace1, trace2]

    var layout = {
        title: "Predicting Urban China's child mortaltity rate",

        paper_bgcolor: "rgb(0,0,0,000)",
        plot_bgcolor: "rgb(0,0,0,000)",

        font: {
            size: 15,
            family: "Helvetica, sans-serif",
            color: "rgb(21,36,61)",
        },
        xaxis: {
            title: "Years"
        },
        yaxis: {
            title: "Deaths per 1,000 live births"
        },

        legend: {
            bgcolor: "#ffffff",
        },

        annotations: [
            {
                x: 2030,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: '0 Mortaltiy Rate',
                showarrow: true,
                arrowhead: 3,
                ax: 0,
                ay: -100,

                font: {
                    color: '#ffffff'
                },

                bordercolor: lineColors.blue,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.blue,
            },
        ]

    };

    Plotly.newPlot('vis7', data, layout, config);
};

//REGRESSION FOR RURAL CHINA

function make_plot5(csv_data) {
    var country_data1 = csv_data.filter(d => d.country == "Rural China");

    var mortality_data = country_data1.map(d => Number(d.mortality))
    var min_mortality = Math.min(...mortality_data)
    var max_mortality = Math.max(...mortality_data)

    var regression_data = country_data1.map(d => [stretch(d.year, 1990, 2019, 0, 1),
    stretch(d.mortality, min_mortality, max_mortality, 0, 1)])

    var regression_result = regression.polynomial(regression_data, { order: 3 });

    var extension_x = [];
    var extension_y = [];
    for (var year = 2019; year < 2031; year++) {
        var prediction = regression_result.predict(stretch(year, 1990, 2019, 0, 1))[1]

        extension_x.push(year);
        extension_y.push(stretch(prediction, 0, 1, min_mortality, max_mortality));
    }


    var trace1 = {
        x: country_data1.map(d => d.year),
        y: country_data1.map(d => d.mortality),
        mode: 'lines',
        name: 'Child Mortality Rate',
        line: {
            color: lineColors.purple,
            width: 4,
        }
    };
    var trace2 = {
        x: extension_x,
        y: extension_y,
        mode: 'lines',
        name: 'Prediction',
        line: {
            color: lineColors.green,
            width: 4,
        }
    };

    var data = [trace1, trace2]

    var layout = {
        title: "Predicting Rural China's child mortaltity rate",

        paper_bgcolor: "rgb(0,0,0,000)",
        plot_bgcolor: "rgb(0,0,0,000)",

        font: {
            size: 15,
            family: "Helvetica, sans-serif",
            color: "rgb(21,36,61)",
        },
        xaxis: {
            title: "Years"
        },
        yaxis: {
            title: "Deaths per 1,000 live births"
        },

        legend: {
            bgcolor: "#ffffff",
        },

        annotations: [
            {
                x: 2030,
                y: 5,
                xref: 'x',
                yref: 'y',
                text: '5 Mortaltiy Rate',
                showarrow: true,
                arrowhead: 3,
                ax: 0,
                ay: -100,

                font: {
                    color: '#ffffff'
                },

                bordercolor: lineColors.purple,
                borderwidth: 2,
                borderpad: 4,
                bgcolor: lineColors.purple,
            },
        ]

    };

    Plotly.newPlot('vis8', data, layout, config);
};

//This stretch function is the map function from p5.js
function stretch(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};


//laoding the cvs data and running the make_plot funcitions 
Plotly.d3.csv("mortality.csv", make_plot1);

Plotly.d3.csv("mortality.csv", make_plot2);

Plotly.d3.csv("mortality.csv", make_plot3);

Plotly.d3.csv("mortality.csv", make_plot4);

Plotly.d3.csv("mortality.csv", make_plot5);

