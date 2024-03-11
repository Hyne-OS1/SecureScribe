// this will contain a list of function helpers that can be used as middlewear across the whole project
//  IMPORTANT "module.exports = { FUCNTIONAL MIDDLEWEAR HERE}" ensure all code is givien a function name and its code between the curly brackets
// this gives the ability for code to be called anywhere using function name, eg: "format_date: (date) => ..."

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    
};