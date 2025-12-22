import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Button, Drawer } from "@annts095/microfrontend-sandbox-ui";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Child() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Child Page - Micro Frontend</title>
        <meta name="description" content="Child page with Drawer component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1>Child Page</h1>
            <p>
              これはchildページです。このページにはDrawerコンポーネントが組み込まれています。
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
                Drawerを開く
              </Button>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Button variant="secondary">
                  トップページに戻る
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div style={{ padding: "20px" }}>
          <h2 style={{ marginTop: 0 }}>Drawerコンテンツ</h2>
          <p>
            これはchildページに組み込まれたDrawerコンポーネントです。
            @annts095/microfrontend-sandbox-uiパッケージから読み込まれています。
          </p>
          <p>
            オーバーレイをクリックするか、閉じるボタンをクリックして閉じることができます。
          </p>
          <div style={{ marginTop: "24px" }}>
            <Button variant="primary" onClick={() => setIsDrawerOpen(false)}>
              閉じる
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

