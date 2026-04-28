# FS Editor 機能資料

## 機能
* ローカルフォルダのアクセス機能
  - 前回のアクセスの復元機能
* CDNからのパッケージインポート機能
  - `README.md`が有ればインポート前にプレビュー
* テキストファイル編集機能
  - 特定の拡張子でシンタックスハイライト
* SQLite操作機能
  - 選択されたデータは`<canvas>`による表の描画
* 画像プレビュー機能
* スニペット挿入機能
  - `テキストファイル編集機能`,`SQLite操作機能`のクエリ入力エリアで有効
* マクロ機能
  - `/.macros`フォルダに配置されたJavaScriptを実行する
  - 特殊なクラス`Editor`を使って、機能にアクセスする
  - 先頭行から以下のメタ情報を参照する
    * `// Name: {{マクロの名称}}`
    * `// Permissions: {{マクロ実行に必要な権限}}`を指定する
    * `// Allow: {{マクロでアクセスするURLpattern}}`を指定する（大文字と小文字を区別する）
    * `// Allow-IgnoreCase: {{マクロでアクセスするURLpattern}}`を指定する（大文字と小文字を区別しない）
  - コンソールのテキストはansiエスケープシーケンスによる色付けに対応

## マクロ実行の権限リスト
| 権限 | 説明 | 機能 |
|---|---|---|
| 指定なし | 顕現指定の必要のない標準機能 | コンソール出力機能（`Editor.log`,`Editor.info`,`Editor.warn`,`Editor.error`） |
| env | 環境変数の読取 | `Editor.env` |
| console_input | コンソールからの入力読取 | `Editor.input` |
| stat | ファイル、フォルダ一覧の取得 | `get_files`,`get_folders` |
| file_open | 指定したファイルをアクティブにする | `open_file` |
| editor_read | アクティブなエディタのテキスト読取 | `get_editor_value` |
| editor_write | アクティブなエディタのテキスト書込 | `set_editor_value` |
| write | 指定したフォルダの作成、ファイルの上書き保存 | `create_folder`,`put_file` |
| sql_query | アクティブなSQLiteのクエリ実行 | `Editor.query` |
| sql_commit | アクティブなSQLiteの保存 | `Editor.commit` |
| rich_console | リッチコンソール出力 | コンソール出力機能（`Editor.mdLog`） |

