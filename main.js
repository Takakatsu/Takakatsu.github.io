const myData = {
	appName: "たかかつのHP",
	activeTab: "top",
	enDescription: false,
	sort_created: "new",
	sort_jam: "new",
	jamlist: [
		{ no: 0, theme: "群" },
		{ no: 1, theme: "魔法" },
		{ no: 2, theme: "回" },
		{ no: 3, theme: "加速" },
		{ no: 4, theme: "モノクロ/鎖" },
		{ no: 5, theme: "矩形" },
		{ no: 6, theme: "明" },
		{ no: 7, theme: "惑星" },
	],
	linklist: [
		{ icon: "itch", name: "itch.io", link: "https://takakatsu.itch.io/", desc: "ゲームを配布してる場所です。" },
		{ icon: "twitter", name: "Twitter", link: "https://twitter.com/takakatsu_game", desc: "つぶやきです。" },
		{ icon: "github", name: "GitHub", link: "https://github.com/Takakatsu", desc: "一応置いときますが何も無いです。" },
	],
	gamelist: [
		{
			no: 1, link: "https://takakatsu.itch.io/rgb-shooter",
			title: "RGB Shooter", engine: "OpenSiv3D", date: "2020年6月19日", form: "exe", genre: "弾幕STG",
			memo: "色をテーマにした弾幕STGです。<br>道中は無しで、基本的にボスラッシュのような形式になっています。"
		},
		{
			no: 2, link: "https://takakatsu.itch.io/tetorinu",
			title: "テトリヌ", engine: "OpenSiv3D", date: "2020年7月1日", form: "exe", genre: "落ち物パズル",
			memo: "テト〇スのような何かです。<br>出てくるブロックの種類がちょっと拡張されています。<br>別のゲームを作ってる最中に自然発生しました。"
		},
		{
			no: 3, link: "https://takakatsu.itch.io/sainokawara",
			title: "賽の河原", engine: "OpenSiv3D", date: "2020年7月8日", form: "exe", genre: "落ち物パズル",
			memo: "積みあがるとゲームオーバーになる。<br>そんなパズルゲームの常識に逆らいたくなりました。"
		},
		{
			no: 4, link: "https://takakatsu.itch.io/yuuhinimukattehasire",
			title: "夕日に向かって走れ！", engine: "OpenSiv3D", date: "2020年8月31日", form: "exe", genre: "ランゲーム",
			memo: "私は何を思ってこれを作ったんでしょうかね？<br>確かunsigned long longを用いた実績があった気が…"
		},
		{
			no: 5, link: "https://takakatsu.itch.io/walls-kick",
			title: "Walls kick", engine: "UE4", date: "2020年9月28日", form: "exe", genre: "2Dプラットフォーマー",
			memo: "一年目で一番ゲームデザインが上手くいった作品。<br>壁キックメインの2Dプラットフォーマー系ゲーム。<br>2DゲームなのにUE4という謎()"
		},
		{
			no: 6, link: "https://takakatsu.itch.io/livesgame",
			title: "LivesGame", engine: "OpenSiv3D", date: "2020年10月17日", form: "exe", genre: "パズル",
			memo: "ライフゲームをゲームにしたかった。<br>結果として難しすぎるゲームになった()"
		},
		{
			no: 7, link: "https://takakatsu.itch.io/hexello",
			title: "Hexello", engine: "OpenSiv3D", date: "2020年10月22日", form: "exe", genre: "パズル",
			memo: "初の対称性のある対戦ゲーム。<br>敵AIは自分の考えてる事をプログラムにそのまま打ち込んだ。<br>故に作者のCPU戦の勝率はほぼ五分"
		},
		{
			no: 8, link: "https://takakatsu.itch.io/anonymous",
			title: "Anonymous", engine: "UE4", date: "2020年11月11日", form: "exe", genre: "STG",
			memo: "3D作れるもん！って感じで作成。<br>私に3Dゲームは早かったようだ。"
		},
		{
			no: 9, link: "https://takakatsu.itch.io/colors",
			title: "Colors", engine: "OpenSiv3D", date: "2020年12月29日", form: "exe", genre: "弾幕STG",
			memo: "処女作(RGB Shooter)リメイク。<br>色を切り替えて回避するSTG。<br>クオリティが上がってない気がするのですが…？"
		},
		{
			no: 10, link: "https://takakatsu.itch.io/miidic",
			title: "Miidic", engine: "PyGame", date: "2021年2月28日", form: "exe", genre: "音ゲー",
			memo: "音ゲー作りたい→譜面作成したくないし著作権怖い→<br>MIDIファイルなら音源と譜面が入ってるじゃん！って感じで作成<br>実装で疲れ果てて見た目とかがあまりよろしくない"
		},
		{
			no: 11, link: "https://takakatsu.itch.io/one-way",
			title: "One-Way", engine: "OpenSiv3D", date: "2021年11月23日", form: "exe", genre: "一次元ローグライト",
			memo: "ゲームジャムに初参加時の作品。<br>ローグライクを作りたかった。<br>時間が足りなかった。"
		},
		{
			no: 12, link: "https://takakatsu.itch.io/space-cutter",
			title: "Space Cutter", engine: "OpenSiv3D", date: "2021年11月29日", form: "exe", genre: "マウスエイム",
			memo: "参加してたゲームジャムのテーマが\"take\"とかだったので、<br>撮影するようなゲームを作ってみた。"
		},
		{
			no: 13, link: "https://takakatsu.itch.io/destruction",
			title: "Destruction", engine: "Unity", date: "2021年12月1日", form: "browser", genre: "STG",
			memo: "「破壊」みたいなテーマだったので、<br>建物を壊すようなゲームを作ってみた。"
		},
		{
			no: 14, link: "https://takakatsu.itch.io/ikomiki",
			title: "已己巳己", engine: "Unity", date: "2022年1月17日", form: "browser", genre: "マウスエイム",
			memo: "ゲームジャム開催するなら自分も作らなきゃね。って感じで作成。<br>綺麗に出来た"
		},
		{
			no: 15, link: "https://takakatsu.itch.io/para-spective",
			title: "Para-spective", engine: "Unity", date: "2022年1月26日", form: "browser", genre: "3Dアクション",
			memo: "Unityで画面分割できたので作成。<br>あるイベント用に作ってたりしてたものではあったり…"
		},
		{
			no: 16, link: "https://takakatsu.itch.io/witchs-play",
			title: "Witch's Play", engine: "crisp-game-lib", date: "2022年2月20日", form: "browser", genre: "2DSTG",
			memo: "ボタン一つでできるSTG<br>初めて使ったけど、このゲームエンジン使いやすかった。<br>地味にスマホ対応。"
		},
		{
			no: 17, link: "https://takakatsu.itch.io/recoil-jumper",
			title: "Recoil jumper", engine: "crisp-game-lib", date: "2020年3月19日", form: "browser", genre: "2DACT",
			memo: "ほぼひとつ前につくったもの(Witch's Play)の改造<br>多忙故ゲームジャムに時間を割けなかった。<br>地味にスマホ対応"
		},
		{
			no: 18, link: "https://takakatsu.itch.io/hitorinamamitorininngennkonntesuto",
			title: "一人生身鳥人間コンテスト", engine: "OpenSiv3D", date: "2022年4月17日", form: "browser", genre: "避けゲー",
			memo: "謎のノリにより作成されたもの第二弾<br>時間はしっかりとりましょう。素材は考えて作りましょう。"
		},
		{
			no: 19, link: "https://takakatsu.itch.io/chain-shot",
			title: "Chain Shot", engine: "crisp-game-lib", date: "2022年5月18日", form: "browser", genre: "タイミング系パズル",
			memo: "爆発が連鎖するっぽいことをイメージして作ったもの。<br>久々にゲームのプログラム組んでる感じがした。<br>尚若干のガバあり。"
		},
		{
			no: 20, link: "https://takakatsu.itch.io/spincube",
			title: "SpinCube", engine: "GDevelop", date: "2022年6月19日", form: "browser", genre: "避けゲー",
			memo: "自機が吹き飛ばされないように敵を避けるゲーム<br>実は衝突時に即死させようとしたが、ゲームエンジンの都合上こうなった。"
		},
		{
			no: 21, link: "https://takakatsu.itch.io/rayphobia",
			title: "Rayphobia", engine: "GDevelop", date: "2022年7月17日", form: "browser", genre: "避けゲー",
			memo: "光を避けて動く、避けゲーというかパズルのようなもの。<br>最終面は攻略が分かってても難しい(苦手)"
		},
		{
			no: 22, link: "https://takakatsu.itch.io/plantet",
			title: "Plantet", engine: "Unity", date: "2022年8月28日", form: "browser", genre: "???",
			memo: "GRO〇系ゲームっぽいものを作ろうとしてたっぽい<br>バリエーションが増やせなかった…"
		},
	],
	toollist: [
		{
			no: 1, link: "https://takakatsu.itch.io/gamers-numlock-locker",
			title: "Gamer's NumLock Locker", engine: "WPF", date: "2020年7月25日", form: "exe", genre: "便利機能？",
			memo: "NumLockを無効化して、St〇amの実績解除みたいな物を表示させるソフト。"
		},
		{
			no: 2, link: "https://takakatsu.itch.io/arpeggio",
			title: "なんにでもアルペジオを付けるソフト", engine: "wxPython", date: "2021年1月1日", form: "exe", genre: "ツール",
			memo: "MIDIファイルのあらゆる個所にアルペジオを付与するソフト。<br>元旦から何作ってるんでしょうね私"
		},
		{
			no: 3, link: "https://takakatsu.itch.io/nc",
			title: "文字が流れる奴", engine: "WPF", date: "2021年2月20日", form: "exe", genre: "ネタソフト",
			memo: "某動画投稿サイトのようにコメントを横から流すソフト。<br>自分用なので使いやすさは知りません。"
		},
		{
			no: 4, link: "https://takakatsu.itch.io/make-ruby",
			title: "るびをふれ！", engine: "wxPython", date: "2022年8月31日", form: "exe", genre: "ツール",
			memo: "ルビを振った文字の画像を生成するだけのツール。"
		},
		{
			no: 5, link: "https://takakatsu.github.io/BinDifEdi/",
			title: "BinDifEdi", engine: "Vue.js", date: "2022年9月11日", form: "browser", genre: "ツール",
			memo: "比較もできる簡易的なオンラインバイナリエディタ<br>こいつのせいでこのHPを作る羽目になった。"
		},
	],
}

const app = Vue.createApp({
	data() {
		return myData;
	},
	created() {
		this.sorter_created("new");
		this.sorter_jam("new");
	},
	methods: {
		change: function (num) {
			this.activeTab = num;
		},
		description: function (num) {
			this.enDescription = num;
		},
		sorter_created: function (num) {
			this.sort_created = num;
			if (num === "new") {
				this.gamelist.sort((a, b) => { return b.no - a.no; });
				this.toollist.sort((a, b) => { return b.no - a.no; });
			}
			if (num === "old") {
				this.gamelist.sort((a, b) => { return a.no - b.no; });
				this.toollist.sort((a, b) => { return a.no - b.no; });
			}
		},
		sorter_jam: function (num) {
			this.sort_jam = num;
			if (num === "new") {
				this.jamlist.sort((a, b) => { return b.no - a.no; });
			}
			if (num === "old") {
				this.jamlist.sort((a, b) => { return a.no - b.no; });
			}
		},
		get_gamenum: function (num) {
			return this.gamelist.length;
		},
		get_toolnum: function (num) {
			return this.toollist.length;
		},
		get_age: function () {
			var today = new Date();
			var thisYearsBirthday = new Date(today.getFullYear(), 4, 28);
			var age = today.getFullYear() - 2001;
			if (today < thisYearsBirthday) {
				age--;
			}
			return age;
		},
	},
});
app.mount("#app");