//Clean up company domain entered in the "Contact Us" form
const companyDomain = $input.first()?.json?.body["Your Company Website"] || "";
const regexURLPattern = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:[\/\?#].*)?$/;

const matchResult = companyDomain.match(regexURLPattern);

if (matchResult) {
  return {
    "clean_domain": matchResult[1]
  }
} else { //If no match is found
  return {
    "clean_domain": "Not Found"
  }
}
