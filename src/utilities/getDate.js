const getDate=(date) => {
  const jsDate = new Date(date);
  const year = jsDate.getFullYear();
  let month= jsDate.getMonth();
  let day= jsDate.getDate();
  day = day < 10 ? `0${day}` : day;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  //format DD Month YYYY
  return `${day} ${monthNames[month]} ${year}`;
}

export {getDate}
