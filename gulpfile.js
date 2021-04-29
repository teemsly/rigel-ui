const gulp = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const typescript = require("gulp-typescript");
const babelrc = require("./babel.config");

const RESOURCE_EXTENSION = [
  "./src/**/*.tsx",
  "./src/**/*.ts",
  "!./src/**/*.stories.tsx",
  "!./src/**/*.stories.ts",
];

const CJS_DIR = "./lib";
const ESM_DIR = "./es";

function cleanDir(done) {
  del.sync([CJS_DIR, ESM_DIR], { force: true });
  done();
}

function buildCommonJs() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(babel(babelrc()))
    .pipe(gulp.dest(CJS_DIR));
}

function buildEsmModule() {
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(babel(babelrc(null, { NODE_ENV: "esm" })))
    .pipe(gulp.dest(ESM_DIR));
}

function createDeclarationFile() {
  var tsProject = typescript.createProject("./tsconfig.json");
  return gulp
    .src(RESOURCE_EXTENSION)
    .pipe(tsProject())
    .pipe(gulp.dest(ESM_DIR));
}

exports.dev = gulp.series(
  cleanDir,
  buildCommonJs,
  buildEsmModule,
  createDeclarationFile
);
