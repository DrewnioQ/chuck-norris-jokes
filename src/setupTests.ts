// https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
/* eslint-disable import/no-extraneous-dependencies */
import matchers from "@testing-library/jest-dom/matchers"
import { expect } from "vitest"

expect.extend(matchers)
