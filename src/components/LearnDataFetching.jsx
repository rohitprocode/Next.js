async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const LearnDataFetching = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Ye hai Data Fetching Page</h1>
      {data.map((post, i) => {
        return (
          <div key={i}>
            <span>User Id: {post.userId}</span>
            <br />
            <span>Post ID: {post.id}</span>
            <br />
            <span>Post: {post.title}</span>
            <br />
            <span>Body: {post.body}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default LearnDataFetching;
