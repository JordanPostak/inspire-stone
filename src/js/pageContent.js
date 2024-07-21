const stepMapping = {
  'receivePage': 'receive',
  'ponderPage': 'ponder',
  'planPage': 'plan',
  'actPage': 'act',
  'reviewPage': 'review',
  'recordPage': 'record'
};

function fetchAndDisplayContent(step, pageId) {
  // Check if user is logged in
  const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
  console.log(`loggedIn: ${loggedIn}`);

  if (loggedIn) {
      // Get userId from session storage
      const userId = sessionStorage.getItem('userId');
      console.log(`userId: ${userId}`);
      
      // Check if userId is available
      if (userId) {
          const url = `https://seerstoneapi.onrender.com/inspirations/user_id/${userId}/step/${step}`;
          console.log(`Fetching from URL: ${url}`);
          
          // Fetch data from the API
          fetch(url, {
              method: 'GET',
              credentials: 'include', // Include credentials (cookies) in the request
              headers: {
                'Content-Type': 'application/json'
              }
          })
              .then(response => {
                  console.log(`HTTP status: ${response.status}`);
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  return response.json();
              })
              .then(data => {
                  console.log(`Data received for ${pageId}:`, data);
                  // Display the fetched data
                  const contentDiv = document.getElementById(pageId).querySelector('.content');
                  if (Array.isArray(data) && data.length > 0) {
                      contentDiv.innerHTML = data.map(item => `<p>${item.evidence}</p>`).join(''); // Adjust according to your data structure
                  } else {
                      contentDiv.innerHTML = '<p>No data found</p>';
                  }
              })
              .catch(error => {
                  console.error('Error fetching data:', error);
                  const contentDiv = document.getElementById(pageId).querySelector('.content');
                  contentDiv.innerHTML = '<p>Error loading content</p>';
              });
      } else {
          console.error('User ID is not available in session storage');
      }
  } else {
      console.log('User is not logged in');
  }
}

function fetchAllPagesContent() {
  Object.entries(stepMapping).forEach(([pageId, step]) => {
    fetchAndDisplayContent(step, pageId);
  });
}

export { fetchAndDisplayContent, fetchAllPagesContent };