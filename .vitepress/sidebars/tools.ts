import { DefaultTheme } from "vitepress";

import { Category, Language } from "../datas";
import { lanPathMap } from "../constant";


function actionEn(
  category: Category
): DefaultTheme.SidebarItem[] {
  // Uncategorized Category
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
  }
  
  // Categorized Category
  else if (category.childrens) {
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
  }
  
  else {
    return [];
  }
};


function actionCN(
  category: Category
): DefaultTheme.SidebarItem[] {
  // Uncategorized Category
  if (category.posts) {
    return [{
      text: category.nameCN,
      link: category.introducePath,
      items: category.posts
        .filter((post) => post.nameCN !== undefined)
        .map((post) => ({
          text: post.nameCN,
          link: `${category.path}/${post.id}`
        }))
    }];
  }
  
  // Categorized Category
  else if (category.childrens) {
    return category.childrens
      .map((child_category) => {
        if (child_category.posts === undefined) {
          return {
            text: child_category.nameCN,
            link: child_category.introducePath
          }
        } else {
          return {
            text: child_category.nameCN,
            link: child_category.introducePath,
            collapsed: false,
            items: child_category.posts
              .map((post) => ({
                text: post.nameCN,
                link: `${child_category.path}/${post.id}`
              }))
          }
        }
      });
  }
  
  else {
    return [];
  }
};


export function replacePath(
  category: Category,
  language: Language
): Category {
  const newCategory = structuredClone(category);
  
  // Process sub-category
  if (newCategory.childrens) {
    const childs_replaced: Category[] = [];
    
    newCategory.childrens.forEach((sub_category) => {
      childs_replaced.push(replacePath(sub_category, language));
    });
    
    newCategory.childrens = childs_replaced;
  }

  // Replace path
  newCategory.path = `${lanPathMap[language]}${newCategory.path}`;
  if (newCategory.introducePath) {
    newCategory.introducePath = `${lanPathMap[language]}${newCategory.introducePath}`;
  }

  return newCategory;
};


export function categoryToSidebarItems(
  category: Category,
  language: Language
): DefaultTheme.SidebarItem[] {
  if (language === "en-US") {
    return actionEn(category);
  }
  else if (language === "zh-CN") {
    return actionCN(category);
  }
  else {
    return [];
  }
};