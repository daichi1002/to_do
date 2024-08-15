# ベースイメージを指定
FROM openjdk:17-jdk-alpine

# 作業ディレクトリを設定
WORKDIR /app

# Mavenをインストールするための依存関係を追加
COPY .mvn .mvn
COPY mvnw pom.xml ./

# Converting the mvnw line endings during build
RUN apk update && apk add dos2unix
RUN dos2unix ./mvnw


# Converting the mvnw line endings during build
RUN apk update && apk add dos2unix
RUN dos2unix ./mvnw
RUN ./mvnw dependency:resolve

# プロジェクトのソースコードをコピー
COPY src ./src

# アプリケーションを実行するコマンド
CMD ["./mvnw", "spring-boot:run"]
