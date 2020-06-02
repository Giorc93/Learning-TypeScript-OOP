var bicycle = {
  color: "Red",
  model: "BMX",
  brakes: "Tektro",
  maxSpd: "60",
  chgColor: function (nwColor) {
    //bicycle.color = nwColor;
    this.color = nwColor;
  },
};

bicycle.chgColor("Blue");
console.log(bicycle);
