# microfrontend-remote-app-sandbox

## 概要

Next.js App Routerで作成されたマイクロフロントエンドアプリケーションです。
qiankunを使用して、[https://github.com/annts095/microfrontend-app-shell-sandbox](https://github.com/annts095/microfrontend-app-shell-sandbox) から読み込まれます。

コンポーネントライブラリとして、上記で作成したマイクロフロントエンドアプリケーションのUIコンポーネントを使用しています。

## 起動方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:4001` で起動します。

## 懸念点
- 本アプリケーションでnext routerを用いた遷移を行うとアプリケーションシェル側のルートが変更されます。そのため暫定対応として、ルーティングはアプリケーションシェル側で行い、パスが一致するようなページを読み込むように一時的に調整しているため、ボタンに設定したリンクと遷移先のリンクが異なっており、正しく遷移できない場合があります。実行時にqiankun環境かどうかを確認してbasePathを設定するような修正が必要です。
- 本アプリケーションをアプリケーションシェルで読み込んだ際に、onClickイベントが発火されません。おそらくハイドレーションがうまくいってないと考えており、`_document.tsx`で設定しているライフサイクルの処理の調整が必要です。