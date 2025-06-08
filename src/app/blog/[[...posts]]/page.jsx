function Posts({ params }) {
  const postsParam = params.posts || [];
  const joinedPosts = Array.isArray(postsParam) ? postsParam.join("/") : "";

  console.log("Posts params:", params);
  console.log(joinedPosts);

  return (
    <div>
      <h1>
        localhost:3000/blog/ url ke baad kuch bhi hoga aage vo yahi page pr
        redirect hoga
      </h1>

      <p>Ye hai blog posts page</p>

      <p>
        Ab agar hume user ke url ko capture karna h to, we can use params here
      </p>

      <p>Params: {joinedPosts}</p>
      <p>
        Agar humne url me kuch bhi likha, to vo yaha pr aayega, jaise ki agar
        humne localhost:3000/blog/hello-world likha, to yaha pr hello-world
        aayega
      </p>
      <p>Complete URL: {`localhost:3000/blog/${joinedPosts}`} </p>
    </div>
  );
}

export default Posts;
