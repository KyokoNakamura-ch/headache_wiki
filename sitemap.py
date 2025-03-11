from datetime import datetime

# サイトのルートURL
site_url = "https://headache-wiki.com"

# pages_list.txt からページ一覧を読み込む
with open("pages_list.txt", "r", encoding="utf-8") as f:
    pages = [line.strip() for line in f if line.strip()]

# 今日の日付を取得
lastmod = datetime.today().strftime('%Y-%m-%d')

# sitemap.xml の構造を作成
sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

for page in pages:
    sitemap_content += f"""  <url>
    <loc>{page}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
"""

sitemap_content += "</urlset>"

# ファイルに保存
with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print("✅ sitemap.xml を生成しました！")

