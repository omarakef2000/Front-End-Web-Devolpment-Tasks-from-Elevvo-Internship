const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}
const monthYear = document.getElementById('monthYear');
const calendarDates = document.getElementById('calendarDates');

let currentDate = new Date();

function renderCalendar(date) {
  calendarDates.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  
  for ( i = 0; i < firstDay; i++) {
    calendarDates.innerHTML += `<div></div>`;
  }

  
  for ( day = 1; day <= totalDays; day++) {
    calendarDates.innerHTML += `<div>${day}</div>`;
  }
}

function changeMonth(direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  renderCalendar(currentDate);
}

renderCalendar(currentDate);