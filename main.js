const notificationItems = document.querySelectorAll(".notification-list-item")
const markAll = document.querySelector(".mark-all")
const newNotifications = document.querySelectorAll(".new")
const number = document.querySelector(".marked-number")

number.innerHTML = newNotifications.length

const numberCount = () => {
  if (number.innerHTML > "0") {
    number.innerHTML -= "1"
  } else {
    number.innerHTML = "0"
  }
} 

const markAllAsRead = () => {
  number.innerHTML = "0"
  notificationItems.forEach(notificationItem => {
    notificationItem.classList.remove("new")
  })
}

notificationItems.forEach(notificationItem => {
  notificationItem.addEventListener("click", () => {
    notificationItem.classList.remove("new")
    numberCount()
  })
})

markAll.addEventListener("click", (e) => {
  e.preventDefault()
  markAllAsRead()
})