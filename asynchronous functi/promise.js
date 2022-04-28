const posts = [
  {
    title: "Post one",
    body: "This is a post one",
  },
  {
    title: "Post two",
    body: "This is Post two",
  },
];

getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output = output + `<li>${post.title}</li>`;
    });
    document.getElementById("posts").innerHTML = output;
  }, 1000);
};

createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:something went wrong");
      }
    }, 2000);
  });
};

const newPost = {
  title: "Post three",
  body: "This is post three",
};
createPost(newPost)
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 success");
  }, 500);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2 failure");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 success");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
