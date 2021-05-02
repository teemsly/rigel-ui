const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const typescript = require("gulp-typescript");
const babelrc = require("./babel.config");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

// The component extension.
const RESOURCE_EXTENSION = [
  "./src/**/*.tsx",
  "./src/**/*.ts",
  "!./src/**/*.stories.tsx",
  "!./src/**/*.stories.ts",
];

// Style resource extension.
const STYLE_EXTENSION = ["./src/**/*.scss", "./src/**/*.sass"];

// Style resource directory
const STYLE_RESOURCE = "./src/assets/scss";

// Destination directory after compiled resources.
const DIST_DIR = "./dist";

// Destination styles after compiled
const CSS_DIR = `${DIST_DIR}/css`;

// Destination directory for each module CommonJS and ESModule
const CJS_DIR = `${DIST_DIR}/lib`;
const ESM_DIR = `${DIST_DIR}/es`;

// Clear CJS and ES module directories
function cleanDir(done) {
  del.sync([CJS_DIR, ESM_DIR], { force: true });
  done();
}

// Clear destination style
function cleanStyleDir(done) {
  del.sync([CSS_DIR], { force: true });
  done();
}

// Compile style to css
function buildScss() {
  return gulp
    .src(`${STYLE_RESOURCE}/themes/rigel-default.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(CSS_DIR));
}

/** Build CSS for production */
function buildCss() {
  return gulp
    .src(`${STYLE_RESOURCE}/themes/rigel-default.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(CSS_DIR));
}

/**
 * Compile components to CommonJS
 * @returns
 */
function buildCommonJs() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(babel(babelrc()))
    .pipe(gulp.dest(CJS_DIR));
}

/**
 * Compile components to EM Module
 * @returns
 */
function buildEsmModule() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(babel(babelrc(null, { NODE_ENV: "esm" })))
    .pipe(gulp.dest(ESM_DIR));
}

/**
 * Create declaration file for ESModule
 * @returns
 */
function createDeclarationFile() {
  var tsProject = typescript.createProject("./tsconfig.json");
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(tsProject())
    .pipe(gulp.dest(ESM_DIR));
}

/**
 * Watch Style
 * Re-compile when there's a change on the current file of style.
 */
function watchStyle() {
  let stlyeWatcher = gulp.watch(STYLE_EXTENSION);
  stlyeWatcher.on("change", (filePath, _) => {
    buildScss();
    console.log("File " + filePath + " was changed, and successfully compiled");
  });
}

/**
 * Watch Component
 * Re-compile when there's a change on the current file of component.
 */
function watchComponent() {
  const componentWatcher = gulp.watch(RESOURCE_EXTENSION);
  componentWatcher.on("change", (filePath) => {
    buildCommonJs();
    buildEsmModule();
    console.log("File " + filePath + " was changed, and successfully compiled");
  });
}

exports.devStyle = gulp.series(watchStyle);
exports.devComponent = gulp.series(watchComponent);
exports.buildComponent = gulp.series(
  cleanDir,
  buildCommonJs,
  buildEsmModule,
  createDeclarationFile
);
exports.buildStyle = gulp.series(cleanStyleDir, buildScss, buildCss);
exports.build = gulp.series(
  cleanDir,
  gulp.series(
    buildCommonJs,
    gulp.series(buildEsmModule, createDeclarationFile),
    gulp.series(cleanStyleDir, buildScss, buildCss)
  )
);
