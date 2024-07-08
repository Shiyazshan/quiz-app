import axios from "axios";

export const QuestionConfig = axios.create({
  baseURL: "https://opentdb.com/",
});
