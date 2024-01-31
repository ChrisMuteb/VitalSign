const compareTimeOnly = (a, b) => {
  //get hh:mm only
  let timeA = a["time"];
  let timeB = b["time"];

  //convert to a same date to compare
  timeA = new Date(`1970-01-01 ${timeA}`);
  timeB = new Date(`1970-01-01 ${timeB}`);
  //compare time
  if (timeA > timeB) {
    return 1;
  } else if (timeA < timeB) {
    return -1;
  } else {
    const dateA = new Date(`${a["date"]} 1:00`);
    const dateB = new Date(`${b["date"]} 1:00`);
    if (dateA > dateB) return 1;
    if (dateA === dateB) return 0;
    if (dateA < dateB) return -1;
  }
};

module.exports = { compareTimeOnly };
