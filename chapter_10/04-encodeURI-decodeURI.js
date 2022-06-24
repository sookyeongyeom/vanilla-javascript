// encodeURI
console.log(encodeURI("http://domain.com?x=A")); // http://domain.com?x=A
console.log(encodeURI("http://domain.com?x=가")); // http://domain.com?x=%EA%B0%80

// decodeURI
const encoded = encodeURI("http://domain.com?x=가");
console.log(decodeURI(encoded)); // http://domain.com?x=가
