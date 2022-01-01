import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {users.loading ? (
        <h1>Loading...</h1>
      ) : users.error ? (
        <h1>{users.error}</h1>
      ) : (
        <div>
          {users.data.map((user) => (
            <p>{user.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
