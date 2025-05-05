# 🌿 My Portfolio

このリポジトリは **ノーコード寄り** に運用できる「ポートフォリオサイト」です。  
画像と文章（MDX）を GitHub で追加するだけで、Vercel が自動で公開ページを更新してくれます。

---

## 0. 全体像

| 役割 | 使うサービス | 何をするか |
|------|--------------|------------|
| **表示** | **Vercel** | `main` ブランチが更新されるたび自動で再デプロイ |
| **編集** | **GitHub** | 画像と MDX ファイルをブラウザ上でドラッグ&ドロップするだけ |

> URL 例  
> **本番**：<https://portfolio-yourname.vercel.app>  
> **プレビュー**：Pull‑Request を作ると自動で別 URL が発行されます

---

## 1. 更新は “2 ステップ” だけ

> **ブラウザだけで完結** – PC に開発環境は要りません

### ✏️ 1‑1. 画像を追加

1. このリポジトリの **`public/images/`** フォルダを開く  
2. **↥ Upload files** → 好きな画像をドラッグ → **Commit** ボタン

| ルール | 例 |
|-------|----|
| ファイル名は英数字 | `robotarm-hero.jpg` |
| サムネイルと本文用で 2 枚あると便利 | `…-thumb.jpg`, `…-hero.jpg` |

### 📝 1‑2. 記事（カード）を追加

1. **`src/content/`** フォルダ → **Add file › Create new file**  
2. ファイル名を **`robotarm.mdx`** のように入力  
3. 下のテンプレをコピペして中身を書き換え → **Commit**

```mdx
---
title: ロボットアーム
description: 防水仕様の低コストロボットアーム
thumbnail: /images/robotarm-thumb.jpg
hero: /images/robotarm-hero.jpg
date: 2025-05-12
---

## プロジェクト概要
ここに本文を書きます。改行だけで段落になります。

### 技術スタック
- アルミフレーム
- ROS 2
- Jetson Orin

```

# 注意
技術者向けのdata構造でmdxを定義しているため、別途デザイナーなどのポートフォリオを作る場合は /src/lib/projects.ts ProjectFM データ型の修正が必要になります。


## Appendix. GitHub だけで変更する手順（IT業界外の人向け運用手順書 超詳細）※

> **ブラウザ操作のみ・ファイルをドラッグするだけ** で更新できます。

### 🖼️ Step 1 画像をアップロード

1. 画面上部 **⇢ Code** タブでリポジトリを開く  
2. 左側ツリーから **`public/images/`** フォルダをクリック  
3. **Add file → Upload files** を選択  
4. 画像をドラッグ & ドロップ  
   - ファイル名は半角英数 (例 `robotarm-thumb.jpg`)  
   - 画像サイズは **横 1600 px 程度 / 1 MB 未満** が目安
5. 下の **Commit changes** にメッセージを入力（例: “add robot arm images”）  
   - **Commit directly to the `main` branch** を選択したまま **Commit** ボタン

### ✏️ Step 2 MDX ファイルを追加・編集

1. 左ツリーの **`src/content/`** フォルダをクリック  
2. **Add file → Create new file**  
3. ファイル名を **`robotarm.mdx`** と入力  
4. 以下テンプレを貼り、`thumbnail` / `hero` 行を **Step 1 でアップしたファイル名** に合わせる

   ```mdx
   ---
   title: ロボットアーム
   description: 防水仕様の低コストロボットアーム
   thumbnail: /images/robotarm-thumb.jpg
   hero: /images/robotarm-hero.jpg
   date: 2025-05-12
   ---
   ## プロジェクト概要
   ここに本文を書きます。
5. Commit new file ボタンで保存

### ✅ Step 3 サイト更新を待つ
10〜30 秒後に Vercel が自動で再デプロイ
→ URL を更新すると新しいカードが追加 されているはずです

#### 反映されない場合は

→ブラウザ更新 (⌘ + Shift + R / Ctrl + F5)

それでもダメなら、システム管理者に問い合わせて、Vercel ダッシュボード → Deployments でログ確認できます。

※本サービスはvercelでエンジニアが非エンジニアの人のために「ポートフォリオを無償で管理するシステム」として3時間で作ったものになります。そのため（本来のCMSなどで見られるCreate/Update/Deleteのページは存在せず）、非エンジニアにgithub上でプロダクトcard・画像データの更新を行わせるという若干の手間暇を要するものになっております。
