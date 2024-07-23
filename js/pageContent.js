const stepMapping = {
  'receivePage': 'receive',
  'ponderPage': 'ponder',
  'planPage': 'plan',
  'actPage': 'act',
  'reviewPage': 'review',
  'recordPage': 'record'
};

async function fetchAndDisplayContent(step, pageId) {
    // Check if user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    console.log(`loggedIn: ${loggedIn}`);
  
    if (loggedIn) {
      // Get userId from session storage
      const userId = sessionStorage.getItem('userId');
      console.log(`userId: ${userId}`);
  
      // Check if userId is available
      if (userId) {
        // Update the URL to include userId and step
        const url = `https://seerstoneapi.onrender.com/inspirations`;
        console.log(`Fetching from URL: ${url}`);
  
        try {
          // Fetch data from the API
          const response = await fetch(url, {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies) in the request
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          console.log(`HTTP status: ${response.status}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(`Data received for ${pageId}:`, data);
          
          // Display the fetched data
          const contentDiv = document.getElementById(pageId).querySelector('.content');
          
          // Simplified display: list all IDs
          if (Array.isArray(data) && data.length > 0) {
            contentDiv.innerHTML = data.map(item => `<p>name: ${item.name}</p>`).join('');
          } else {
            contentDiv.innerHTML = '<p>No data found</p>';
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          const contentDiv = document.getElementById(pageId).querySelector('.content');
          contentDiv.innerHTML = '<p>Error loading content</p>';
        }
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