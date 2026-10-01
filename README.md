# The Personal Blog Based on Vitepress

## 📋 Description
I have accumulated extensive experience from daily coding that needs to be summarized and documented.
Vitepress is a convenient tool for generating a documentation website from Markdown files. 

## 🚀 Usage
### Run
```sh
pnpm install
```
```sh
pnpm run dev
```
### Add a post
#### *Create post meta data
`.vitepress/constants/posts.ts`
```typescript
export const pythonLanguage: Post[] = [
    ...

    // Add a post in this place
    {
        id: 'data_types',
        date: new Date("2025-06-10 16:00"),
        location: LocationCode.sz,
        tags: [TagCode.original],
        nameEN: 'Python data types',
        nameCN: 'Python 数据类型',

    },
];
```
#### Register path
`.vitepress/constants/paths.ts`
```typescript
// Root
export const python = '/python';

...

// Sub
export const pythonLanguage = `${python}/language`;
```
#### Register post to Category
`.vitepress/constants/categories.ts`
```typescript
export const python: Category = {
    path: paths.python,
    childrens: [
        ...
        
        // Register post in this place
        {
            path: paths.pythonLanguage,
            introducePath: paths.python,
            nameEN: 'Language',
            nameCN: '语言',
            posts: posts.pythonLanguage
        },
    ]
}
```
#### *Create post file
* English: `/python/language/data_types.md`
* Chinese: `/translated/zh_cn/python/language/data_types.md`
> **Attention:**
> The post Markdown file name **MUST** match `post.id`.
