<div style="text-align:center">

# ts-jest-cucumber-esm-template

![Version](https://img.shields.io/github/package-json/v/Desvart/ts-template)
[![License](https://img.shields.io/github/license/desvart/ts-template?color=blue)](https://github.com/Desvart/ts-template/blob/master/LICENSE) \
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ts-template&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ts-template)
[![Test](https://github.com/Desvart/ts-template/actions/workflows/test.yml/badge.svg)](https://github.com/Desvart/ts-template/actions/workflows/test.yml)

Build on \
![NodeVersion](https://shields.io/static/v1?label=NodeJS&message=19.X&color=blue)
![WindowsVersion](https://shields.io/static/v1?label=Windows&message=10&color=blue)

</div>

This package contains a clean NodeJS TypeScript project template to start from scratch.

This template has the following characteristics:

* a standard folder structure for a **hexagonal architecture**,
* Jest configured for TypeScript as **unit testing framework**
* CucumberJS configured for TypeScript as **functional testing framework**
* ts-mockito as **mocking framework**
* ESLint configured for TypeScript with Airbnb standard as **linter** (double with SonarLint for additional checks)
* Prettier configured through ESLint as **formatter**
* a **full compatibility with ESM** (also with Cucumber and Jest)
* specific configuration to allow ModuleMapper for ESM, TypeScript, Jest and CucumberJS
* a CI pipeline with GitHub Actions and SonarCloud

To use this template, you can either clone from GitHub to start your project from scratch, or to download it from npm.
Lastly you can always apply this 
[step-by-step walkthrough](https://github.com/Desvart/ts-jest-cucumber-esm-template/blob/master/doc/setup.md) to build 
it yourself from scratch.

