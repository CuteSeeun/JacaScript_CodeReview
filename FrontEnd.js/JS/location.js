//url 읽어오기
console.log(location);
console.log(location.href); //모든 주소 다 가져오기
console.log(location.hostname);//도메인(실제 서버 아이피)만 가져오기
console.log(location.port);

//제어 및 이동
// location.href = "https://www.naver.com";

location.replace("https://www.google.com");
// location.assign();
location.reload(); 