<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <!-- バックエンドのフレームワーク一覧 -->
</p>

## 目次

1. [開発環境構築](#開発環境構築)

## 開発環境構築
1. Dockerのインストール（https://www.docker.com/ja-jp/）
2. リポジトリのクローン
```
git clone git@github.com:daichi1002/to_do.git
```
3. コンテナ起動
```
docker-compose up
```
4. 以下のコマンドをターミナルで実行してAPIサーバーから応答があれば完了
```
curl http://localhost:8080/hello
```