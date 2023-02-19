export function getHours(time) {
  const actualDate = new Date().getHours();
  const list = [];
  time.forEach((date, index) => {
    const tempTime = new Date(date).getHours();
    if (tempTime === actualDate) {
      list.push(index);
    }
  });
  return list;
}

export function getDays(date) {
  const listOfDays = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const newDay = newDate.getDay();
    listOfDays.push(newDay);
    return false;
  });
  return listOfDays;
}

export function getDate(date) {
  const listOfDate = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const numberDate = newDate.getDate();
    listOfDate.push(numberDate);
    return false;
  });
  return listOfDate;
}

export function getMonths(date) {
  const listOfMonths = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const newDay = newDate.getMonth();
    listOfMonths.push(newDay);
    return false;
  });
  return listOfMonths;
}

export function monthList(date) {
  const months = [];
  date.map((month) => {
    switch (month) {
      case 0:
        months.push('January');
        break;
      case 1:
        months.push('February');
        break;
      case 2:
        months.push('March');
        break;
      case 3:
        months.push('April');
        break;
      case 4:
        months.push('May');
        break;
      case 5:
        months.push('June');
        break;
      case 6:
        months.push('July');
        break;
      case 7:
        months.push('August');
        break;
      case 8:
        months.push('September');
        break;
      case 9:
        months.push('October');
        break;
      case 10:
        months.push('November');
        break;
      case 11:
        months.push('December');
        break;
      default:
        break;
    }
    return false;
  });
  return months;
}

export function dayOfTheWeek(date) {
  const dayOfWeek = [];
  date.map((day) => {
    switch (day) {
      case 0:
        dayOfWeek.push('Sunday');
        break;
      case 1:
        dayOfWeek.push('Monday');
        break;
      case 2:
        dayOfWeek.push('Tuesday');
        break;
      case 3:
        dayOfWeek.push('Wednesday');
        break;
      case 4:
        dayOfWeek.push('Thursday');
        break;
      case 5:
        dayOfWeek.push('Friday');
        break;
      case 6:
        dayOfWeek.push('Saturday');
        break;
      default:
        break;
    }
    return false;
  });
  return dayOfWeek;
}
