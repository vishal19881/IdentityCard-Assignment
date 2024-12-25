export const getInformation = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
    
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
   
    if (data.results && data.results.length > 0) {
      return data.results[0];
    } else {
      throw new Error('No users found');
    }
  } catch (error) {
    console.log(error.message);
    return null;  
  }
};
