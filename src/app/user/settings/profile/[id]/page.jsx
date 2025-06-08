function MyProfile({ params }) {
  console.log("MyProfile params:", params);
  return (
    <div>
      <h1>Ye hai My Profile page</h1>
      <p>Is page ki id: {params.id}</p>
    </div>
  );
}

export default MyProfile;
