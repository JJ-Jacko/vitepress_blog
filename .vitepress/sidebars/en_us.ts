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
import { Category } from "../datas";


function categoryToSidebarItems(
  category: Category
): DefaultTheme.SidebarItem[] {
  if (category.posts) {
    return [{
      text: category.nameEN,
      link: category.introducePath,
      items: category.posts
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${category.path}/${post.id}`
        }))
    }];
  } else if (category.childrens) {
    return category.childrens
      .map((child_category) => {
        if (child_category.posts === undefined) {
          return {
            text: child_category.nameEN,
            link: child_category.introducePath
          }
        } else {
          return {
            text: child_category.nameEN,
            link: child_category.introducePath,
            collapsed: false,
            items: child_category.posts
              .map((post) => ({
                text: post.nameEN,
                link: `${child_category.path}/${post.id}`
              }))
          }
        }
      });
  } else {
    return [];
  }
};


export const sidebar: DefaultTheme.Sidebar = {
  [categoryPython.path]: categoryToSidebarItems(categoryPython),
  [categoryLinux.path]: categoryToSidebarItems(categoryLinux),
  [categoryJava.path]: categoryToSidebarItems(categoryJava),
  [categoryC.path]: categoryToSidebarItems(categoryC),
  [categoryBackend.path]: categoryToSidebarItems(categoryBackend),
  [categoryFrontend.path]: categoryToSidebarItems(categoryFrontend),
  [categoryOther.path]: categoryToSidebarItems(categoryOther),
};
