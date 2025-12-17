import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro Frontend - Remote App</title>
        <meta name="description" content="Module Federationで読み込まれるNext.jsマイクロフロントエンド" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1>Micro Frontend Remote App</h1>
            <p>
              これはModule Federation（モジュールフェデレーション）を使用して、
              ホストアプリケーションから動的に読み込まれるNext.jsで作成されたマイクロフロントエンドです。
              このアプリケーションはポート4001で実行され、独立したリモートアプリケーションとして機能します。
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
