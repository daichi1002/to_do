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

### 共通

1. Docker のインストール（https://www.docker.com/ja-jp/）
2. リポジトリのクローン

```
git clone git@github.com:daichi1002/to_do.git
```

### backend

3. コンテナ起動

```
docker-compose up
```

4. 以下のコマンドをターミナルで実行して API サーバーから応答があれば完了

```
curl http://localhost:8080/hello
```

### frontend

5. node のインストール

```
https://nodejs.org/en/download/package-manager
```

6. frontend のディレクトリに移動し、npm コマンドを実行する

```
cd frontend
npm run dev
```

7. 以下のリンクを開き、Hello,World!が表示されいることを確認

```
http://localhost:3000/
```

### データベース

8. 以下のコマンドを使用して、User テーブルにデータを投入する

```
curl -X POST http://localhost:8080/users -H "Content-Type: application/json" -d '{"name": "John Doe"}'
```

9. 以下のコマンドを使用して、8 で投入したデータが取得できることを確認

```
curl http://localhost:8080/users
```
