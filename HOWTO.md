# 博客构建与发布说明

## 两个分支怎么配合

| 分支 | 内容 | 说明 |
| --- | --- | --- |
| `hexo` | 源码：`source/`、`themes/`、`_config.yml`、`package.json`、`node_modules/` | 日常在这里改 |
| `master` | `hexo generate` 生成的静态站点 | 由 `hexo deploy` 强制覆盖，GitHub Pages 从这里发布；**不要手改** |

`hexo deploy` 的流程是：`public/` → `.deploy_git` → `git push --force` 到 `master`。
所以 `master` 不需要手动合并，每次发布都会整体替换。

## 本地目录

- `D:\000_study\020_code\gitpage\hexo-src` → `hexo` 分支（写文章、改主题）
- `D:\000_study\020_code\gitpage\whutweihuan.github.io` → `master` 分支（只用于查看线上结果，不要编辑）

## 环境要求

- Node.js（Node 26 也可用）
- Hexo 3.7 已随 `node_modules/` 提交，**不要执行 `npm install`**，否则会覆盖仓库里的兼容补丁
- Node >= 23 必须通过 `tools/node-compat.js` 启动 Hexo（恢复被移除的 `util.is*`）

## 发布一篇文章

```bash
cd D:/000_study/020_code/gitpage/hexo-src

# 1. 同步源码（多台机器时）
git pull origin hexo

# 2. 新建文章（也可以手动放到 source/_posts/）
node --require ./tools/node-compat.js node_modules/hexo/bin/hexo new "文章标题"

# 3. 本地预览（可选，http://localhost:4000）
node --require ./tools/node-compat.js node_modules/hexo/bin/hexo server

# 4. 生成
node --require ./tools/node-compat.js node_modules/hexo/bin/hexo generate

# 5. 发布到 master（会 force-push）
node --require ./tools/node-compat.js node_modules/hexo/bin/hexo deploy

# 6. 保存源码
git add -A
git commit -m "post: 文章标题"
git push origin hexo
```

## 修改页面 / 主题 / 菜单

| 想改什么 | 文件 |
| --- | --- |
| 站点标题、作者、部署配置、`skip_render` | `_config.yml` |
| 菜单、图标、主题外观 | `themes/next/_config.yml` |
| 菜单中文文案 | `themes/next/languages/zh-Hans.yml` |
| 周易页 | `source/zhouyi/index.html`（`skip_render`，原样输出） |

改完后同样执行 generate → deploy → commit → push。

## 图片

`post_asset_folder: true`：文章 `source/_posts/foo.md` 的图片放在 `source/_posts/foo/` 下，
文中写 `![](image.png)`，构建时会自动转换成文章路径。

## 注意

- **不要直接编辑 `master` 分支或 `public/` 目录**：前者会被 `hexo deploy` 强制覆盖，后者是生成产物。
- `hexo deploy` 使用 force-push，`master` 历史每次发布都会被替换，这是该仓库原本的部署方式。
- GitHub Pages 推送后通常几分钟生效。
- 换机器：`git clone -b hexo git@github.com:whutweihuan/whutweihuan.github.io.git hexo-src`，
  不需要 `npm install`，`tools/node-compat.js` 已随仓库提供。
