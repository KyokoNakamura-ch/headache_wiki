#!/bin/bash

echo "BUILD START"

# 仮想環境の作成（venv）
python3 -m venv venv

# 仮想環境の有効化
source venv/bin/activate  # Linux環境（Vercel）はこれでOK

# pip のアップグレード
pip install --upgrade pip

# 依存関係のインストール
pip install -r requirements.txt

# MkDocs のビルド
mkdocs build

# 仮想環境の終了
deactivate

echo "BUILD END"





