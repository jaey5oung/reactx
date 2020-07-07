if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod")
} else {
  module.exports = require("./dev")
}
// 만약 이것이 프로덕션이면 모듈 익스폴트가 .prod가 실행되고 만약 이게 (배포)디벨롭이면 모듈 익스폴트를 .dev가 실행된다
