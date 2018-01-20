# GAS_WebApp_test

## なにをやりたいの

GASでWebアッピを作る際の環境を作りたかったです．

## なにができたのか

タスクランナー地獄ができました

## フォルダ構造は

```:text
リポジトリのルート/
　├ dev/
　│　├ lib/:クラスの定義とかする
　│　├ server/:GASを書く
　│　└ ui/:フロントエンド側のやつ
　├ test/:テストコードを書く
　├ node_module/:(自動生成)
　├ src/:変換後にアップロードされる前にここに置かれる(自動生成)
　├ gulpfile.babel.js:変換とかアップロードをするタスクを定義している
　├ package.json:このリポジトリの情報が入っている
　├ gappas.config.js:GASの認証情報とか入ってる(自動生成)
　├ package-lock.json:依存関係とか書いてあるの(自動生成)
　└ README.md:今読んでいるもの
```

変な名前だったら教えてください

## gulpのタスクはそれぞれ何をしようとしているの

- `gas-upload`:srcの内容をGASにデプロイする
- `test`:テストコードを通過するか確認する
- `build-server`:GASをbudleとトランスパイルする
- `build-ui`:HTML/CSS/JSをバンドルする
- `watch`:ファイルの変更を検知してビルドとアップロードを実行する

変な名前だったら教えてください.

あと，シンプルになるような記述があれば教えてください．

## 動かし方

### 前提

- node.jsが動かせる
- gitが動かせる

### 手順

1. リポジトリをクローンする

`git clone git@github.com:takanakahiko/GAS_WebApp_test.git`

2. node_moduleを用意する

`npm install`

3. GASのアップロードの準備をする

http://kakakakakku.hatenablog.com/entry/2017/02/26/034115

上の記事を参考に認証とかをいい感じにします

4. gulpを起動する

`npx gulp`

5. ソースコードを書く

サンプルで書いてあるやつそのままでもいいです

6. 確認

GASのプロジェクトを確認しに行って，ファイルがアップロードされていれば成功です．

## 助けてください

以下のところが心配です

- 全体的に命名が変なところがないか
- gulpを使うこと自体が間違いでないか心配
- gulpの使い方が間違えていないか
- フォルダの構造が変じゃないか

こうした方がいいんじゃないって思ったら教えていただけると助かります．