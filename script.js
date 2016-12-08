//mock data from www.mockaroo.com

var jobs = [
        {
           "job" : "Technical Writer",
            "description" : "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "pay" : "£66.87",
            "phone" : "66-(593)952-4563"
        },
        {
            "job" : "Software Engineer IV",
            "description" : "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "pay" : "£97.57",
            "phone" : "62-(565)757-3750" 
        },
        {
            "job" : "Paralegal",
            "description" : "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "pay" : "£65.96",
            "phone" : "48-(740)857-9375"
        },
        {
            "job" : "Payment Adjustment Coordinator",
            "description" : "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "pay" : "£60.29",
            "phone" : "66-(431)201-1262"
        },
        {
            "job" : "Marketing Manager",
            "description" : "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "pay" : "£48.76",
            "phone" : "55-(844)885-1938"  
        },
        {
            "job" : "Data Coordiator",
            "description" : "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
            "pay" : "£5.00",
            "phone" : "55-(832)450-3497"  
        },
        {
            "job" : "Systems Administrator IV",
            "description" : "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "pay" : "£11.69",
            "phone" : "33-(975)997-4194"  
        },
        {
            "job" : "Recruiting Manager",
            "description" : "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "pay" : "£29.94",
            "phone" : "63-(774)883-7728"
        },
        {
            "job" : "Geological Engineer",
            "description" : "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "pay" : "£94.98",
            "phone" : "62-(607)345-2123"
        },
        {
            "job" : "Data Coordiator",
            "description" : "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "pay" : "£79.32",
            "phone" : "63-(409)120-4552"
        }
    ];

for (var i = 0; i < jobs.length; i++) {
    var title = "<div class='heading'>" + jobs[i]["job"] + "</div>";
    var description = jobs[i]["description"] + "<br />";
    var pay = "<div class='pay'>" + jobs[i]["pay"] + "</div>" + "<br />";
    var phone = "<div class='phone'>" +  jobs[i]["phone"] + "</div>" + "<br />";
    var apply = "<button>apply</button>"
    $("#listings").append("<li>" + title + "<div class='info'>" + description + pay + phone + "</div>" + apply + "</li>");
}
    
    
    
    
    
    
    
