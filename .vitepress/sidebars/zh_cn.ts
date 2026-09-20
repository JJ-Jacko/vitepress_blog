import { DefaultTheme } from "vitepress";
import * as categories from "../constants/categories";
import { Language } from "../datas";
import { categoryToSidebarItems, replacePath } from "./tools";


const LANGUAGE: Language = "zh-CN";

const categoryPythonReplaced = replacePath(categories.python, LANGUAGE);
const categoryLinuxReplaced = replacePath(categories.linux, LANGUAGE);
const categoryJavaReplaced = replacePath(categories.java, LANGUAGE);
const categoryCReplaced = replacePath(categories.c, LANGUAGE);
const categoryBackendReplaced = replacePath(categories.backend, LANGUAGE);
const categoryFrontendReplaced = replacePath(categories.frontend, LANGUAGE);
const categoryOtherReplaced = replacePath(categories.other, LANGUAGE);


export const sidebar: DefaultTheme.Sidebar = {
  [categoryPythonReplaced.path]: categoryToSidebarItems(categoryPythonReplaced, LANGUAGE),
  [categoryLinuxReplaced.path]: categoryToSidebarItems(categoryLinuxReplaced, LANGUAGE),
  [categoryJavaReplaced.path]: categoryToSidebarItems(categoryJavaReplaced, LANGUAGE),
  [categoryCReplaced.path]: categoryToSidebarItems(categoryCReplaced, LANGUAGE),
  [categoryBackendReplaced.path]: categoryToSidebarItems(categoryBackendReplaced, LANGUAGE),
  [categoryFrontendReplaced.path]: categoryToSidebarItems(categoryFrontendReplaced, LANGUAGE),
  [categoryOtherReplaced.path]: categoryToSidebarItems(categoryOtherReplaced, LANGUAGE),
};
