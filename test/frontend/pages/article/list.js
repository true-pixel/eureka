import axios from 'axios'

axios.get('http://localhost:1337/api/articles').then(response => {
  console.log(response);
});