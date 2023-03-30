<div style="text-align:center">

# @desvart/ts-template

![Version](https://img.shields.io/github/package-json/v/Desvart/ts-template/release)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=alert_status&branch=release)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=coverage&branch=release)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Test](https://github.com/Desvart/ts-template/actions/workflows/test.yml/badge.svg?branch=release)](https://github.com/Desvart/ts-template/actions/workflows/test.yml)\
![Version](https://img.shields.io/github/package-json/v/Desvart/ts-template/master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=alert_status&branch=master)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=coverage&branch=master)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Test](https://github.com/Desvart/ts-template/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/Desvart/ts-template/actions/workflows/test.yml)

 
![NodeVersion](https://shields.io/static/v1?label=NodeJS&message=19.X&color=blue)
![WindowsVersion](https://shields.io/static/v1?label=Windows&message=10&color=blue)
[![License](https://img.shields.io/github/license/desvart/ts-template?color=blue)](https://github.com/Desvart/ts-template/blob/master/LICENSE)

</div>

This package contains a clean NodeJS TypeScript project template for starting from scratch.

This template was originally created to help me build and test my code for
the [BitBurner](https://bitburner.readthedocs.io/en/latest/index.html#) project, hence some uncommon configurations
choices. Over time, it has become useful in its own rights, outside of its original purpose, hence this standalone
template.

This template has the following characteristics:

* a standard folder structure for a **hexagonal architecture**,
* Jest configured for TypeScript as **unit testing framework**
* CucumberJS configured for TypeScript as **functional testing framework**
* ts-mockito as **mocking framework**
* all tests frameworks are configure to perform **on-the-fly transpilation**
* a **full compatibility with ESM** (adapted to also work with CucumberJS and Jest)
* ModuleMapper configured for ESM on-the-fly transpilation (adapted to also work with Jest and CucumberJS)
* ESLint configured for TypeScript with Airbnb standard as **linter** (only linter)
* SonarLint for additional checks static code checkins that are not covered by ESLint
* Prettier configured through ESLint as **formatter** (only formatter)
* a CI/CD pipeline with GitHub Actions, SonarCloud and NPM Register

To use this template, you can either:

* clone it from GitHub [@Desvart/ts-template](https://github.com/Desvart/ts-template) to start your project from
  scratch,
* download it from npm [ts-template-jest-cucumber-esm](https://www.npmjs.com/package/ts-template-jest-cucumber-esm) (and then move the
  content to your project folder)
* apply this
  [step-by-step walkthrough](https://github.com/Desvart/ts-jest-cucumber-esm-template/blob/master/doc/setup.md) to build
  the template yourself from scratch.

