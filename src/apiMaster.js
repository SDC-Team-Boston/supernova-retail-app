import axios from "axios";
// const url = "http://18.224.200.47";
import { headers, url } from './config';

const getProductList = () => {
  console.log('entered');
  return axios.get(`${url}/products`, headers)
};

const getProductInfo = (id = 66659) => {
  return axios.get(`${url}/products/${id}`, headers);
};

const getProductStyles = (id = 66659) => {
  return axios.get(`${url}/products/${id}/styles`, headers);
};

const getRelatedProducts = (id = 66659) => {
  return axios.get(`${url}/products/${id}/related`, headers);
};

const getQA = (id = 66659) => {
  return axios.get(`${url}/qa/questions${66659}`, headers);
};

const getReviewMetaData = (id = 66659) => {
  return axios.get(`${url}/reviews/meta?product_id=${id}`, headers);
};

const getReviewsOfProduct = (id = 66659, sortString = "relevant", count = 20) => {
  return axios.get(
    `${url}/reviews/${id}/list?sort=${sortString}:asc&count=${count}}` , headers
  );
};

const reportReview = (reviewId) => {
  return axios.put(`${url}/reviews/report/${reviewId}`, {}, headers);
};

const postReview = (
  id = 1,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics
) => {
  return axios.post(`${url}/reviews/${id}`, {
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics,
  }, headers);
};

const getCart = (userToken) => {
  return axios.get(`${url}/cart/${userToken}`, headers);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`${url}/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  }, headers);
};

const getSpecificAnswers = (questionId) => {
  return axios.get(`${url}/qa/${questionId}/answers`, headers);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`${url}/qa/questions?product_id=${66659}`, {
    body: text,
    name: name,
    email: email,
  }, headers);
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  return axios.post(`${url}/qa/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  }, headers);
};

const markQAsHelpful = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/helpful`, {}, headers);
};

const reportQuestion = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/report`, {}, headers);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/helpful`, {}, headers);
};

const reportAns = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/report`, {}, headers);
};

export default {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnswers: getSpecificAnswers,
  askQuestion: askQuestion,
  answerQuestion: answerQuestion,
  markQAsHelpful: markQAsHelpful,
  reportQuestion: reportQuestion,
  markAnsAsHelpful: markAnsAsHelpful,
  reportAns: reportAns,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct,
  postReview: postReview,
  reportReview: reportReview,
  getCart: getCart,
  addToCart: addToCart,
};

