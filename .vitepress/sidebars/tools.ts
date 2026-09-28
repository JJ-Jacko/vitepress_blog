import { DefaultTheme } from "vitepress";

import { Category, Language, lanPathMap, lanLocalizedNameMap } from "../datas";


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
  const localizedName = lanLocalizedNameMap[language];
  
  // Uncategorized Category
  if (category.posts) {
    return [{
      text: category[localizedName],
      link: category.introducePath,
      items: category.posts
        .filter((post) => post[localizedName] !== undefined)
        .map((post) => ({
          text: post[localizedName],
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
            text: child_category[localizedName],
            link: child_category.introducePath
          }
        } else {
          return {
            text: child_category[localizedName],
            link: child_category.introducePath,
            collapsed: false,
            items: child_category.posts
              .map((post) => ({
                text: post[localizedName],
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