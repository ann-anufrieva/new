async function  getUsers(names) {
  let responce = await fetch('https://api.github.com/users/USERNAME');
  let commits = await response.json();
  return commits
}
