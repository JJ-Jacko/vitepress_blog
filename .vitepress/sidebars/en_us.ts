import { DefaultTheme } from "vitepress";
import * as categories from "../constants/categories";
import { Language } from "../datas";
import { categoryToSidebarItems } from "./tools";


const LANGUAGE: Language = "en-US";

export const sidebar: DefaultTheme.Sidebar = {
  [categories.python.path]: categoryToSidebarItems(categories.python, LANGUAGE),
  [categories.linux.path]: categoryToSidebarItems(categories.linux, LANGUAGE),
  [categories.java.path]: categoryToSidebarItems(categories.java, LANGUAGE),
  [categories.c.path]: categoryToSidebarItems(categories.c, LANGUAGE),
  [categories.backend.path]: categoryToSidebarItems(categories.backend, LANGUAGE),
  [categories.frontend.path]: categoryToSidebarItems(categories.frontend, LANGUAGE),
  [categories.other.path]: categoryToSidebarItems(categories.other, LANGUAGE),
};
