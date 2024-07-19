# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Next.jsをビルド
RUN npm run build

# アプリケーションを実行
CMD ["npm", "start"]
