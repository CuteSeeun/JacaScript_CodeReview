//노드 정보 제공 객체
//console.log(process);
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.uptime());

//프로그램 강제 종료
if(true){
    process.exit(0);
}

console.log(process.execPath);
console.log(process.cwd());
console.log(__dirname);
console.log(process.cpuUsage());
//os 환경 변수 정보
console.log(process.env);