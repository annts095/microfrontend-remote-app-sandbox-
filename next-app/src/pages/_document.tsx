import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // qiankunのライフサイクル関数をエクスポート
                // HTMLが読み込まれた時点で実行される必要があるため、_document.tsxで設定
                // qiankunがHTMLエントリーポイントから読み込む際、この時点でwindow['remote-next-app']が存在する必要がある
                if (typeof window !== 'undefined') {
                  const appName = 'remote-next-app';
                  
                  window[appName] = {
                    bootstrap: async function() {
                      // qiankunのbootstrap処理
                    },
                    mount: async function(props) {
                      // qiankunがHTMLをDOMに挿入するので、特に処理は不要
                      // ただし、DOMが正しく挿入されているか確認
                      const container = props?.container || props?.domElement;
                      if (container) {
                        // Next.jsのルート要素が存在するか確認
                        const nextRoot = container.querySelector('#__next');
                        if (nextRoot) {
                          // data-next-hide-foucスタイルを削除して表示を有効化
                          const hideFoucStyle = container.querySelector('style[data-next-hide-fouc="true"]');
                          if (hideFoucStyle) {
                            hideFoucStyle.remove();
                          }
                          // bodyのdisplay:noneを解除
                          const body = container.querySelector('body') || container.closest('body');
                          if (body) {
                            body.style.display = 'block';
                          }
                        }
                      }
                    },
                    unmount: async function(props) {
                      // コンテナをクリア
                      const container = props?.container;
                      if (container) {
                        container.innerHTML = '';
                      }
                    },
                  };
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
