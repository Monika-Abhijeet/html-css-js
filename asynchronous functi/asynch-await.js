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
      const error = true;
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

//   createPost(newPost)
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

async function init() {
  await createPost(newPost);
  getPosts();
}

init();
