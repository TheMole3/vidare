// Rendering

var defaultTopHeight = 20.5
var globalMargin = 2.5;
var modules = [
	{
		active: true,
		id: "#countDown",
		height: 12.5,
		margins: 1,
	},
	{
		active: true,
		id: "#info",
		height: 95,
		margins: 2,
	},
	{
		active: false,
		id: "#speaker1",
		height: 45,
		margins: 2,
	},
	{
		active: false,
		id: "#speaker2",
		height: 45,
		margins: 2,
	},
	{
		active: true,
		id: "#anmalan",
		height: 40,
		margins: 2,
	},
	{
		active: true,
		id: "#whenAndWhere",
		height: 20,
		margins: 2,
	},{
		active: true,
		id: "#social",
		height: 25,
		margins: 2,
	}
];

function render() {
	var itemsBeforeHeight = defaultTopHeight
	var itemBeforeHeight = 0
	modules.forEach((item, i) => {
		if(item.active){
			itemsBeforeHeight += (item.margins * globalMargin)
			if(itemBeforeHeight) itemsBeforeHeight += itemBeforeHeight

			itemBeforeHeight = modules[i].height

			$(item.id).css('top', itemsBeforeHeight + 'vw')

			$(item.id).show()
		} else {
			$(item.id).hide()
		}
	});
	console.log(itemsBeforeHeight)
};
render()



// countDown

var countDownDate = new Date("Apr 30, 2020 17:00:00")
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var text = ""

  if(days != 0) {
    if(days == 1) {
      text = days + " dag kvar!"
    } else {
      text = days + " dagar kvar!"
    }
  } else if(hours != 0) {
    if(hours == 1) {
      text = hours + " timme kvar!"
    } else {
      text = hours + " timmar kvar!"
    }
  } else if(minutes != 0) {
    if(minutes == 1) {
      text = minutes + " minut kvar!"
    } else {
      text = minutes + " minuter kvar!"
    }
  } else if(seconds != 0) {
    if(seconds == 1) {
      text = seconds + " sekund kvar!"
    } else {
      text = seconds + " sekunder kvar!"
    }
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    text = "Vidare är NU!";
  }

  document.getElementById("countDownText").innerHTML = text
}, 500);
