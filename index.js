function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun());
  console.log(saturdayFun("swim"));

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };

  console.log(mondayWork());
  console.log(mondayWork("finish my codegrade"));

  function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

let result = wrapAdjective("*");
    console.log(result("a beautiful person"));
