import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (userData.loading) {
    return <h4>Loading...</h4>;
  }

  if (userData.error) {
    return <h4>Error!!: {`${userData.error}`}</h4>;
  }

  return (
    <div>
      <h4>Users:</h4>
      {userData.users.map((userData) => (
        <p key={userData.id}>{userData.name}</p>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
