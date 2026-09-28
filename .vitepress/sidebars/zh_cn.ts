import { DefaultTheme } from "vitepress";
import * as categories from "../constants/categories";
import { Language } from "../datas";
import { categoryToSidebarItems } from "./tools";
import { categoryReplaceLanPath } from "../tools";


const LANGUAGE: Language = "zh-CN";

const categoryPythonReplaced = categoryReplaceLanPath(categories.python, LANGUAGE);
const categoryLinuxReplaced = categoryReplaceLanPath(categories.linux, LANGUAGE);
const categoryJavaReplaced = categoryReplaceLanPath(categories.java, LANGUAGE);
const categoryCReplaced = categoryReplaceLanPath(categories.c, LANGUAGE);
const categoryBackendReplaced = categoryReplaceLanPath(categories.backend, LANGUAGE);
const categoryFrontendReplaced = categoryReplaceLanPath(categories.frontend, LANGUAGE);
const categoryOtherReplaced = categoryReplaceLanPath(categories.other, LANGUAGE);


export const sidebar: DefaultTheme.Sidebar = {
  [categoryPythonReplaced.path]: categoryToSidebarItems(categoryPythonReplaced, LANGUAGE),
  [categoryLinuxReplaced.path]: categoryToSidebarItems(categoryLinuxReplaced, LANGUAGE),
  [categoryJavaReplaced.path]: categoryToSidebarItems(categoryJavaReplaced, LANGUAGE),
  [categoryCReplaced.path]: categoryToSidebarItems(categoryCReplaced, LANGUAGE),
  [categoryBackendReplaced.path]: categoryToSidebarItems(categoryBackendReplaced, LANGUAGE),
  [categoryFrontendReplaced.path]: categoryToSidebarItems(categoryFrontendReplaced, LANGUAGE),
  [categoryOtherReplaced.path]: categoryToSidebarItems(categoryOtherReplaced, LANGUAGE),
};
