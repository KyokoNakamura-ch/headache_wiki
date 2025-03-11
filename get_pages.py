import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# クローリングするサイトのURL
site_url = "https://headache-wiki.com"

# 巡回するページリスト（最初はトップページ）
pages_to_visit = [site_url]
visited_pages = set()
all_pages = set()

def clean_url(url):
    """ #（ハッシュ）以降の部分を削除し、統一する """
    return url.split("#")[0]  # ハッシュ部分を削除

def get_internal_links(url):
    """ 指定URL内の内部リンクを取得する関数 """
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        for link in soup.find_all('a', href=True):
            full_url = urljoin(url, link['href'])  # 絶対URLに変換
            clean_full_url = clean_url(full_url)  # ハッシュ部分を削除

            # 内部リンクのみ取得 & すでに訪れたページは除外
            if clean_full_url.startswith(site_url) and clean_full_url not in visited_pages:
                all_pages.add(clean_full_url)
                pages_to_visit.append(clean_full_url)

    except requests.exceptions.RequestException as e:
        print(f"❌ エラー: {e}")

# ページを巡回してリンクを収集
while pages_to_visit:
    page = pages_to_visit.pop(0)
    if page not in visited_pages:
        print(f"✅ 取得: {page}")
        visited_pages.add(page)
        get_internal_links(page)

# 結果を保存
with open("pages_list.txt", "w", encoding="utf-8") as f:
    for page in sorted(all_pages):
        f.write(page + "\n")

print("\n📌 サイト内のページ一覧を `pages_list.txt` に保存しました！")

