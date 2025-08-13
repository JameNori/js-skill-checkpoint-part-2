// เริ่มเขียนโค้ดตรงนี้
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}
async function display() {
  try {const responseUser = await getUser();
    const displayUser = await responseUser.json();
    const filterUser = displayUser.filter((displayUser) => {
      let nameUser = displayUser.name;
      return nameUser.length > 17;
    });
    const displayFilterUser = filterUser.map((filterUser) => {
      return filterUser.name;
    });
    console.log(displayFilterUser);
  } catch (error) {
    console.log(error);
  }
}
display();
