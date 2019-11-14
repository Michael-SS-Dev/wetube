// 여기에서 import 사용하지 않는 이유는 WEBPACK이 낮은 버전의 JS와도 호환해야 하기 때문이다.
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  // 아래 패키지 추가
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      // ES6 를 일반 자바스크립트로 변환하기 위함
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      // 1. sass 파일을 추출해서 css 파일로 변환한다.
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          // 아래 로더들 모두 설치 필요
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            //
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  // 3. 그 파일 styles.css를 output 디렉토리에 있는 static 폴더에 저장
  // 위의 const OUTPUT_DIR 참고할 것 !
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  // 2. 따로 추출해서 styles.css로 만들어주었다.
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
