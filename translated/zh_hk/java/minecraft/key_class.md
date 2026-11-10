## 物品
### ItemIds
註冊原版物品的 ID
* `net.minecraft.references`
### Items
註冊原版物品
* `net.minecraft.world.item`

## 方塊
::: tip 小貼士
* `BlockItemIds` 包含方塊物品的 ID，玩家可以透過相應的方塊物品取得及放置大部分方塊。
* `BlockIds` 包含方塊本身的 ID，當中亦包括沒有相應方塊物品的方塊，
    例如水、熔岩及火焰。
:::
### BlockItemIds
註冊原版方塊物品的 ID
* `net.minecraft.references`
### BlockIds
註冊原版方塊的 ID
* `net.minecraft.references`
### Blocks
註冊原版方塊物品和方塊
* `net.minecraft.world.level.block`

## 標籤
### ItemTags
註冊原版物品的標籤
* `net.minecraft.tags`
### BlockTags
註冊原版方塊的標籤
* `net.minecraft.tags`

## 生成器
### ItemModelGenerators
生成原版物品模型
* `net.minecraft.client.data.models`
### BlockModelGenerators
生成原版方塊模型
* `net.minecraft.client.data.models`
### VanillaRecipeProvider
生成原版配方
* `net.minecraft.data.recipes.packs`
### VanillaItemTagsProvider
生成原版物品標籤
* `net.minecraft.data.tags`
### VanillaBlockItemTagsProvider
生成原版方塊物品標籤
* `net.minecraft.data.tags`
### CreativeModeTabs
生成原版創造模式物品欄
* `net.minecraft.world.item`

## 元件
### DataComponents
註冊原版元件
* `net.minecraft.core.component`
