# ベースイメージを指定
FROM openjdk:17-jdk-alpine

# 作業ディレクトリを設定
WORKDIR /app

# Mavenをインストールするための依存関係を追加
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

# プロジェクトのソースコードをコピー
COPY src ./src

# アプリケーションを実行するコマンド
CMD ["./mvnw", "spring-boot:run"]
