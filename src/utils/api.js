import axios from "axios";

const baseUrl = "https://todo-api-assignment.onrender.com";
// const baseUrl = "http://localhost:5000";

//fetch all todos
const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    setToDo(data);
  } catch (error) {
    console.error(error);
  }
};

//add new todo
const addToDo = async (text, setText, setToDo) => {
  try {
    await axios.post(`${baseUrl}/save`, { text });
    setText("");
    await getAllToDo(setToDo);
  } catch (error) {
    console.error(error);
  }
};

//update the todo
const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  try {
    await axios.patch(`${baseUrl}/update`, { _id: toDoId, text });
    setText("");
    setIsUpdating(false);
    await getAllToDo(setToDo);
  } catch (error) {
    console.error(error);
  }
};

//delete the todo

const deleteToDo = async (_id, setToDo) => {
  try {
    await axios.delete(`${baseUrl}/delete`, { data: { _id } });
    await getAllToDo(setToDo);
  } catch (error) {
    console.error(error);
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
