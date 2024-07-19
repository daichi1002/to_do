# ベースイメージを指定
FROM openjdk:17-jdk-alpine

# 作業ディレクトリを設定
WORKDIR /app

# Mavenを使ってプロジェクトをビルド
COPY . /app
RUN ./mvnw package

# アプリケーションを実行するコマンド
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
