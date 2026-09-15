import { DefaultTheme } from "vitepress";
import {
  categoryPython,
  categoryLinux,
  categoryJava,
  categoryC,
  categoryBackend,
  categoryFrontend,
  categoryOther,
} from "../constant";
import { Language } from "../datas";
import { categoryToSidebarItems, replacePath } from "./tools";


const LANGUAGE: Language = "zh-CN";

const categoryPythonReplaced = replacePath(categoryPython, LANGUAGE);
const categoryLinuxReplaced = replacePath(categoryLinux, LANGUAGE);
const categoryJavaReplaced = replacePath(categoryJava, LANGUAGE);
const categoryCReplaced = replacePath(categoryC, LANGUAGE);
const categoryBackendReplaced = replacePath(categoryBackend, LANGUAGE);
const categoryFrontendReplaced = replacePath(categoryFrontend, LANGUAGE);
const categoryOtherReplaced = replacePath(categoryOther, LANGUAGE);


export const sidebar: DefaultTheme.Sidebar = {
  [categoryPythonReplaced.path]: categoryToSidebarItems(categoryPythonReplaced, LANGUAGE),
  [categoryLinuxReplaced.path]: categoryToSidebarItems(categoryLinuxReplaced, LANGUAGE),
  [categoryJavaReplaced.path]: categoryToSidebarItems(categoryJavaReplaced, LANGUAGE),
  [categoryCReplaced.path]: categoryToSidebarItems(categoryCReplaced, LANGUAGE),
  [categoryBackendReplaced.path]: categoryToSidebarItems(categoryBackendReplaced, LANGUAGE),
  [categoryFrontendReplaced.path]: categoryToSidebarItems(categoryFrontendReplaced, LANGUAGE),
  [categoryOtherReplaced.path]: categoryToSidebarItems(categoryOtherReplaced, LANGUAGE),
};
