# ウェルモビリティRV｜LP制作リポジトリ

キャンピングカー「CamPit」（ウェルモビリティRV）のランディングページ制作データ一式です。

## 🔗 リンク集（各LPへのGitリンク）

| LP | フォルダ | 本番用 | サンプル版（透かし入り） | 画像一覧・説明 |
|---|---|---|---|---|
| **LP1**（機能訴求型）｜街乗り、ときどき秘密基地。 | [lp1/](https://github.com/810eigo-droid/welmobilityrv_lp/tree/main/lp1) | [index.html](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp1/index.html) | [indexw.html](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp1/indexw.html) | [README](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp1/README.md) |
| **LP2**（月々4万円台強調型）｜定額リース訴求 | [lp2/](https://github.com/810eigo-droid/welmobilityrv_lp/tree/main/lp2) | [index.html](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp2/index.html) | [indexw.html](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp2/indexw.html) | [README](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp2/README.md) |

### ブラウザでの表示確認（コードではなくページとして見る場合）

GitHub上のリンクはコード表示になるため、実際の見た目を確認する場合は下記のプレビュー用リンクをお使いください。

- LP1 サンプル版プレビュー: https://htmlpreview.github.io/?https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp1/indexw.html
- LP2 サンプル版プレビュー: https://htmlpreview.github.io/?https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/lp2/indexw.html

※ プレビューは簡易表示のため、画像・フォントが一部表示されないことがあります。正確な表示確認は、フォルダごとダウンロードして `index.html` をブラウザで開くか、サーバーにアップしてご確認ください。

### その他のデータ

| データ | 場所 | 内容 |
|---|---|---|
| 初期サンプルLP | [index.html](https://github.com/810eigo-droid/welmobilityrv_lp/blob/main/index.html)（リポジトリ直下） | ストーリー型LP（下記「LP風トップページ」の説明参照） |
| WordPress移植用パーツ | [wordpress/](https://github.com/810eigo-droid/welmobilityrv_lp/tree/main/wordpress) | セクション別HTML＋共通CSS |
| 法務ページ雛形 | [v2/legal/](https://github.com/810eigo-droid/welmobilityrv_lp/tree/main/v2/legal) | プライバシーポリシー等 |

---

# LP風トップページ（サンプル）

SNS広告・Web広告の着地ページとして「共感 → ソリューション → 信頼 → 顧客の声 → LINE特典」へ誘導する、ストーリー型の1ページ構成です。

> **※ 本データは制作見本（SAMPLE）です。** 画面全体に透かし（SAMPLE表示）が入っています。ご成約後、透かしを削除した完成データを納品いたします。

## 表示方法

`index.html` をブラウザで開くだけで表示できます（1ファイル完結・スマホ対応済み）。

## 📷 ご用意いただく画像一覧

`images/` フォルダに **下記のファイル名** で写真を入れていただくだけで、ページに自動的に反映されます（画像が無い間は「画像設置予定」の仮表示になります）。

| ファイル名 | 推奨サイズ | 使用箇所・内容 |
|---|---|---|
| `images/logo.jpg` | 400×100px | ヘッダー・フッターのロゴ |
| `images/fv_main.png` | 1920×1280px | ファーストビュー背景：夕暮れのビーチでハッチバックを開けてくつろぐ家族 |
| `images/solution_daily.png` | 1200×800px | 解決策①：富士山が見える街中を走る白いハイエース |
| `images/solution_interior.png` | 1200×800px | 解決策②：ベッドキットを展開した車内 |
| `images/worry_01.webp` | 400×400px（正方形） | 共感セクション吹き出し①：30〜40代パパの悩む表情（イラストまたは写真） |
| `images/worry_02.webp` | 400×400px（正方形） | 共感セクション吹き出し②：30〜40代ママの悩む表情（イラストまたは写真） |
| `images/worry_03.webp` | 400×400px（正方形） | 共感セクション吹き出し③：期待に目を輝かせる表情（イラストまたは写真） |
| `images/reason_01.jpg` | 900×600px | 理由01：駐車場・街中をスムーズに走行するシーン |
| `images/reason_02.png` | 900×600px | 理由02：ベッドキットに家族が横になっている車内 |
| `images/reason_03.jpg` | 900×600px | 理由03：アースカラーの外観・ウッド調内装 |
| `images/brand_story.jpg` | 800×800px | ブランドストーリー：キャンプ場での家族の団らん（円形トリミング表示） |
| `images/voice_01.png` | 900×600px | お客様の声01：オーナー様ご家族 |
| `images/voice_02.jpg` | 900×600px | お客様の声02：オーナー様と愛車 |
| `images/final_bg.jpg` | 1920×1080px | 最終CTA背景：星空とキャンピングカー |

- 拡張子は `.jpg` / `.png` / `.webp` のどれでもOKです（ファイル名が合っていれば自動で読み込みます）。
- サイズは目安です。多少違っても自動でトリミング表示されます（横長推奨）。
- JPG / PNG / WebP いずれも可。1枚あたり500KB以下に圧縮するとページ表示が速くなります。

## ✏️ 納品時に差し替え・修正する箇所

- **LINEのURL**：現在は仮リンク `https://lin.ee/xxxxxxx`（4箇所）。公式LINEのURLに差し替えます。
- **フッターの住所・電話番号**：仮テキストが入っています。
- **SNSリンク**（Instagram / X / YouTube）：仮リンクです。
- 文言・写真の修正はご要望に応じて対応いたします。

## ページ構成

1. ファーストビュー（キャッチコピー＋LINE導線）
2. 共感セクション（ターゲットのお悩み3つ）
3. 解決策提示（1台2役／月々4万円〜残価設定プラン＋コスト比較）
4. 選ばれる3つの理由
5. ブランドストーリー
6. 経済的メリット（宿泊費¥0訴求）
7. お客様の声
8. LINE限定3大特典
9. 最終CTA（LINE登録）
- 固定LINEボタン（PC：右下フローティング／スマホ：画面下部固定バー）
