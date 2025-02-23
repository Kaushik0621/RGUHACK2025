import axios from 'axios';

const CHATBOT_API_URL = import.meta.env.VITE_CHATBOT_API_URL; 

// Function to get LLM response
export const getLLMResponse = async (userPrompt: string) => {
  try {
    const response = await axios.post(`${CHATBOT_API_URL}GetLLMResponse`, {
      user_prompt: userPrompt,
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error fetching LLM response:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to refresh memory
export const refreshMemory = async () => {
  try {
    const response = await axios.post(`${CHATBOT_API_URL}RefreshMemory`, {}); // Send an empty object
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error refreshing memory:', error);
    throw error; // Rethrow the error for further handling
  }
};
