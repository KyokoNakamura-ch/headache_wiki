# 頭痛Wiki（β版）

## お悩みの内容を選んでください

### 🟢 頭痛の傾向を知る
あなたの頭痛を知ることで、頭痛を楽にしたくないですか？

👉 [あなたの頭痛の傾向をチェックする](./headache_test.html)

### 🟢 症状・原因
あなたの頭痛の症状や原因を知ることで、適切な対処法が見つかるかもしれません。

<select id="headache-symptoms" onchange="navigateToPage(this.value)">
    <option value="">選択してください</option>
    <option value="./symptoms/headache_forehead">ひたいの痛み（おでこや額が痛む）</option>
    <option value="./symptoms/headache_around_eyes">目の奥の痛み（目の奥がズーンと痛む）</option>
    <option value="./symptoms/headache_temporal">こめかみの痛み（こめかみがズキズキする）</option>
    <option value="./symptoms/headache_full">頭全体が締め付けられる頭痛（ヘルメットをかぶったような痛み）</option>
    <option value="./symptoms/headache_nausea">吐き気を伴う頭痛（気持ち悪さ・嘔吐がある）</option>
    <option value="./symptoms/headache_pressure">気圧による頭痛（気象病・台風で悪化）</option>
    <option value="./symptoms/headache_back">後頭部の痛み（首の付け根や後頭部が痛む）</option>
    <option value="./symptoms/headache_morning">朝起きたときに強くなる頭痛（睡眠不足・低血圧・脱水）</option>
    <option value="./symptoms/headache_exertional">運動後に悪化する頭痛（ジョギング・筋トレ後にズキズキ）</option>
</select>

### 🟢 専門医・病院
<select id="doctor-select" onchange="navigateToPage(this.value)">
    <option value="">選択してください</option>
    <option value="./doctors/find_doctor">頭痛外来・脳神経内科の探し方</option>
    <option value="./doctors/online_headache">オンライン頭痛診療</option>
</select>

<p>お探しの情報が見つからない場合は、<a href="./inquiry">お問い合わせ</a>ください。</p>

<p><a href="./about">このWikiについて</a> | <a href="./guide">使い方ガイド</a></p>

<script>
function navigateToPage(url) {
    if (url) {
        window.location.href = url;
    }
}
</script>