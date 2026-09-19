import { DefaultTheme } from "vitepress";
import {
  categoryPython,
  categoryLinux,
  categoryJava,
  categoryC,
  categoryBackend,
  categoryFrontend,
  categoryOther,
} from "../constants/categories";
import { Language } from "../datas";
import { categoryToSidebarItems } from "./tools";


const LANGUAGE: Language = "en-US";

export const sidebar: DefaultTheme.Sidebar = {
  [categoryPython.path]: categoryToSidebarItems(categoryPython, LANGUAGE),
  [categoryLinux.path]: categoryToSidebarItems(categoryLinux, LANGUAGE),
  [categoryJava.path]: categoryToSidebarItems(categoryJava, LANGUAGE),
  [categoryC.path]: categoryToSidebarItems(categoryC, LANGUAGE),
  [categoryBackend.path]: categoryToSidebarItems(categoryBackend, LANGUAGE),
  [categoryFrontend.path]: categoryToSidebarItems(categoryFrontend, LANGUAGE),
  [categoryOther.path]: categoryToSidebarItems(categoryOther, LANGUAGE),
};
