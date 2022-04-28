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

createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};
// getPosts();

let newPost = {
  title: "Post three",
  body: "This is post three",
};
createPost(newPost, getPosts);
