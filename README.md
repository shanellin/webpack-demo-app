# [webpack配置]

## 一、 mode
設定此配置檔為開發或生產環境

## 二、 entry
指定文件（配置資源）來源路徑。

## 三、 output
設定輸出文件的名稱、hash、路徑。

## 四、 plugins
放置webpack插件，如：
#### 1. clean-webpack-plugin
用於刪除webpack產生檔，如：dist
#### 2. mini-css-extract-plugin
用於將css文件提取出來，之後置於head，主要可消除網頁渲染時，css載入過慢的順序問題
#### 3. optimize-css-assets-webpack-plugin
用於壓縮css檔
#### 4. terser-webpack-plugin
用於壓縮js
#### 5. html-webpack-plugin
用於最後生成HTML5文件

## 五、 optimization
用於放置優化用插件，如plugins中的optimize-css-assets-webpack-plugin。

## 六、 module
用來放置loader的rule，可將sass、png...等檔案透過各自的loader轉譯最後插入webpack的output js中

# [webpack流程圖（8/15目前見解）]
![](https://i.imgur.com/KTsR6h8.png)

# [express多頁面配置]

## 一、 webpackDevMiddleware
用於將webpack的建置環境拉入express中

## 二、 webpackHotMiddleware
通常與webpackDevMiddleware一起用，用於熱加載webpackDevMiddleware載入的webpack環境

## 三、 加入router資料夾
進行路由管理

## 四、 讀取dev的webpack生成檔
因webpackDevMiddleware最後建置完所生成的檔案是儲存於記憶體中，因此我們需要從webpack中將檔案讀取出來
```javascript=
compiler.outputFileSystem.readFile(path.join(compiler.outputPath, file), (err, result) => {
            //file = HtmlWebpackPlugin輸出的檔案名稱
            if (err) {
                return next(err);
            }
            res.set("content-type", "text/html");
            res.send(result);
            res.end();
        });
```

