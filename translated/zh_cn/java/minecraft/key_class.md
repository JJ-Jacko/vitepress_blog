## 物品
### ItemIds
注册原版物品的 ID
* 包: net.minecraft.references
### Items
注册原版物品
* 包: net.minecraft.world.item

## 方块
::: tip 小贴士
* `BlockItemIds` 包含方块物品的 ID，玩家可以通过对应的方块物品获取并放置大多数方块。
* `BlockIds` 包含方块自身的 ID，其中也包括没有对应方块物品的方块，
    例如水、岩浆和火焰。
:::
### BlockItemIds
注册原版方块物品的 ID
* 包: net.minecraft.references
### BlockIds
注册原版方块的 ID
* 包: net.minecraft.references
### Blocks
注册原版方块物品和方块  
* 包: net.minecraft.world.level.block

## 标签
### ItemTags
注册原版物品的标签
* 包: net.minecraft.tags
### BlockTags
注册原版方块的标签
* 包: net.minecraft.tags

## 生成器
### VanillaItemTagsProvider
生成原版的物品标签
* 包: net.minecraft.data.tags
### VanillaBlockItemTagsProvider
生成原版的方块物品标签
* 包: net.minecraft.data.tags

## 组件
### DataComponents
注册原版组件
* 包: net.minecraft.core.component
