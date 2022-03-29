

setInterval(() => {
    const date1 = new Date();
    const date = date1.toDateString();
    const time = date1.toLocaleTimeString();

    console.log('Date : '+ date);
    console.log('Time : '+ time);
},1000)

