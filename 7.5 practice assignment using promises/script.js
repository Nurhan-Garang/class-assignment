// Task 1
function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("Even number");
    } else {
      reject("Odd number");
    }
  });
}

checkEvenNumber(4)
  .then((message) => console.log("Test 1:", message))
  .catch((error) => console.error("Test 1:", error));

checkEvenNumber(7)
  .then((message) => console.log("Test 2:", message))
  .catch((error) => console.error("Test 2:", error));

//   Task 2

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 2000);
  });
}

getUserData().then((user) => {
  console.log("User data:", user);
});

// Task 3

function getPostsByUser(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`${name}'s Post 1`, `${name}'s Post 2`]);
    }, 1000);
  });
}

getUserData()
  .then((user) => {
    console.log("User received:", user);
    return getPostsByUser(user.name);
  })
  .then((posts) => {
    console.log("Posts received:", posts);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//   task 4
const p1 = new Promise((res) => setTimeout(() => res("1-second Promise"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("2-second Promise"), 2000));
const p3 = new Promise((res) => setTimeout(() => res("3-second Promise"), 3000));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All Promises done:", results);
  })
  .catch((err) => {
    console.error("Error in Promise.all:", err);
  });

//   Async/Await

async function fetchUserAndPosts() {
  try {
    const user = await getUserData();
    console.log("User received:", user);

    const posts = await getPostsByUser(user.name);
    console.log("Posts received:", posts);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fetchUserAndPosts();

