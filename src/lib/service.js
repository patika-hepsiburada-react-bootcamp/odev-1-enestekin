import axios from 'axios';

// Fetching posts and user data from api according to the entered parameter

const getData = async (userId) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return { ...user, posts };
  } catch (error) {
    return error.message;
  }
};

export default getData;
