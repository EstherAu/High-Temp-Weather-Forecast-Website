const apiKey = 'f21124f3e8a8f1717bc3347030666ea3';

// 初始化地图
const map = L.map('map', {
    center: [36.2048, 138.2529], 
    zoom: 5, // 初始缩放级别
    minZoom: 5,
    maxZoom: 10,
    maxBounds: [
        [20, 122], // 地图显示范围的西南角
        [46, 154]  // 地图显示范围的东北角
    ]
});

// 添加灰白色底图图层
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors & CartoDB'
}).addTo(map);

// 示例城市列表及其坐标（用日文显示）
const cities = [
    { name: '東京', query: 'Tokyo', coords: [35.6895, 139.6917] },
    { name: '京都', query: 'Kyoto', coords: [35.0116, 135.7681] },
    { name: '大阪', query: 'Osaka', coords: [34.6937, 135.5023] },
    { name: '横浜', query: 'Yokohama', coords: [35.4437, 139.6380] },
    { name: '神戸', query: 'Kobe', coords: [34.6901, 135.1955] },
    { name: '姫路', query: 'Himeji', coords: [34.8151, 134.6853] },
    { name: '長崎', query: 'Nagasaki', coords: [32.7503, 129.8777] },
    { name: '新潟', query: 'Niigata', coords: [37.9026, 139.0231] },
    { name: '水戸', query: 'Mito', coords: [36.3659, 140.4714] },
    { name: '名古屋', query: 'Nagoya', coords: [35.1815, 136.9066] },
    { name: '静岡', query: 'Shizuoka', coords: [34.9756, 138.3828] },
    { name: '仙台', query: 'Sendai', coords: [38.2682, 140.8694] },
    { name: '盛岡', query: 'Morioka', coords: [39.7036, 141.1527] },
    { name: '弘前', query: 'Hirosaki', coords: [40.6031, 140.4645] },
    { name: '山形', query: 'Yamagata', coords: [38.2554, 140.3396] },
    { name: '米沢', query: 'Yonezawa', coords: [37.9222, 140.1161] },
    { name: '秋田', query: 'Akita', coords: [39.7200, 140.1024] },
    { name: '福井', query: 'Fukui', coords: [36.0641, 136.2195] },
    { name: '金沢', query: 'Kanazawa', coords: [36.5613, 136.6562] },
    { name: '富山', query: 'Toyama', coords: [36.6953, 137.2114] },
    { name: '高岡', query: 'Takaoka', coords: [36.7403, 137.0152] },
    { name: '松江', query: 'Matsue', coords: [35.4723, 133.0505] },
    { name: '岡山', query: 'Okayama', coords: [34.6551, 133.9195] },
    { name: '広島', query: 'Hiroshima', coords: [34.3853, 132.4553] },
    { name: '北海道', query: 'Hokkaido', coords: [43.2203, 142.8635] },
    { name: '沖縄', query: 'Okinawa', coords: [26.5013, 127.9454] },
    { name: '札幌', query: 'Sapporo', coords: [43.0621, 141.3544] },
    { name: '函館', query: 'Hakodate', coords: [41.7687, 140.7288] },
    { name: '旭川', query: 'Asahikawa', coords: [43.7706, 142.3649] },
    { name: '釧路', query: 'Kushiro', coords: [42.9849, 144.3810] },
    { name: '帯広', query: 'Obihiro', coords: [42.9235, 143.1960] },
    { name: '青森', query: 'Aomori', coords: [40.8246, 140.7406] },
    { name: '八戸', query: 'Hachinohe', coords: [40.5123, 141.4886] },
    { name: '横手', query: 'Yokote', coords: [39.3122, 140.5706] },
    { name: '一関', query: 'Ichinoseki', coords: [38.9314, 141.1362] },
    { name: '石巻', query: 'Ishinomaki', coords: [38.4342, 141.3048] },
    { name: '福島', query: 'Fukushima', coords: [37.7608, 140.4747] },
    { name: '郡山', query: 'Koriyama', coords: [37.3996, 140.3836] },
    { name: '磐城', query: 'Iwaki', coords: [37.0509, 140.8870] },
    { name: '宇都宮', query: 'Utsunomiya', coords: [36.5551, 139.8828] },
    { name: '日光', query: 'Nikko', coords: [36.7196, 139.6982] },
    { name: '前橋', query: 'Maebashi', coords: [36.3890, 139.0633] },
    { name: '高崎', query: 'Takasaki', coords: [36.3219, 139.0128] },
    { name: '大宮', query: 'Omiya', coords: [35.9061, 139.6234] },
    { name: '川越', query: 'Kawagoe', coords: [35.9251, 139.4853] },
    { name: '所沢', query: 'Tokorozawa', coords: [35.7995, 139.4690] },
    { name: '川崎', query: 'Kawasaki', coords: [35.5301, 139.7035] },
    { name: '横須賀', query: 'Yokosuka', coords: [35.2813, 139.6674] },
    { name: '藤沢', query: 'Fujisawa', coords: [35.3413, 139.4876] },
    { name: '鎌倉', query: 'Kamakura', coords: [35.3196, 139.5501] },
    { name: '小田原', query: 'Odawara', coords: [35.2566, 139.1555] },
    { name: '相模原', query: 'Sagamihara', coords: [35.5533, 139.3544] },
    { name: '長岡', query: 'Nagaoka', coords: [37.4467, 138.8510] },
    { name: '上越', query: 'Joetsu', coords: [37.1488, 138.2364] },
    { name: '三条', query: 'Sanjo', coords: [37.6214, 138.9528] },
    { name: '長野', query: 'Nagano', coords: [36.6513, 138.1812] },
    { name: '松本', query: 'Matsumoto', coords: [36.2386, 137.9714] },
    { name: '上田', query: 'Ueda', coords: [36.4026, 138.2505] },
    { name: '佐久', query: 'Saku', coords: [36.2460, 138.4764] },
    { name: '門真', query: 'Kadoma', coords: [34.7400, 135.5821] },
    { name: '茨木', query: 'Ibaraki', coords: [34.8160, 135.5685] },
    { name: '高石', query: 'Takaishi', coords: [34.5234, 135.4483] },
    { name: '吹田', query: 'Suita', coords: [34.7599, 135.5162] },
    { name: '池田', query: 'Ikeda', coords: [34.8206, 135.4341] },
    { name: '箕面', query: 'Minoh', coords: [34.8260, 135.4700] },
    { name: '尼崎', query: 'Amagasaki', coords: [34.7333, 135.4078] },
    { name: '西宮', query: 'Nishinomiya', coords: [34.7377, 135.3415] },
    { name: '芦屋', query: 'Ashiya', coords: [34.7265, 135.3059] },
    { name: '宝塚', query: 'Takarazuka', coords: [34.8060, 135.3568] },
    { name: '川西', query: 'Kawanishi', coords: [34.8337, 135.4174] },
    { name: '伊丹', query: 'Itami', coords: [34.7845, 135.4015] },
    { name: '加古川', query: 'Kakogawa', coords: [34.7698, 134.8303] },
    { name: '洲本', query: 'Sumoto', coords: [34.3417, 134.9069] },
    { name: '津名', query: 'Tsuna', coords: [34.3277, 134.9939] },
    { name: '奈良', query: 'Nara', coords: [34.6851, 135.8049] },
    { name: '橿原', query: 'Kashihara', coords: [34.5122, 135.7928] },
    { name: '天理', query: 'Tenri', coords: [34.5973, 135.8344] },
    { name: '桜井', query: 'Sakurai', coords: [34.5145, 135.8466] },
    { name: '高松', query: 'Takamatsu', coords: [34.3428, 134.0466] },
    { name: '丸亀', query: 'Marugame', coords: [34.2863, 133.7993] },
    { name: '坂出', query: 'Sakaide', coords: [34.3223, 133.8601] },
    { name: '観音寺', query: 'Kanonji', coords: [34.1265, 133.6604] },
    { name: '徳島', query: 'Tokushima', coords: [34.0657, 134.5593] },
    { name: '鳴門', query: 'Naruto', coords: [34.1738, 134.6087] },
    { name: '阿南', query: 'Anan', coords: [33.9187, 134.6613] },
    { name: '松山', query: 'Matsuyama', coords: [33.8396, 132.7657] },
    { name: '新居浜', query: 'Niihama', coords: [33.9602, 133.3051] },
    { name: '宇和島', query: 'Uwajima', coords: [33.2231, 132.5603] },
    { name: '高知', query: 'Kochi', coords: [33.5587, 133.5311] },
    { name: '室戸', query: 'Muroto', coords: [33.2880, 134.1503] },
    { name: '宿毛', query: 'Sukumo', coords: [32.9398, 132.7253] },
    { name: '福岡', query: 'Fukuoka', coords: [33.5904, 130.4017] },
    { name: '北九州', query: 'Kitakyushu', coords: [33.8833, 130.8753] },
    { name: '久留米', query: 'Kurume', coords: [33.3166, 130.5086] },
    { name: '大牟田', query: 'Omuta', coords: [33.0296, 130.4451] },
    { name: '佐賀', query: 'Saga', coords: [33.2635, 130.3009] },
    { name: '鳥栖', query: 'Tosu', coords: [33.3790, 130.5111] },
    { name: '佐世保', query: 'Sasebo', coords: [33.1790, 129.7154] },
    { name: '諫早', query: 'Isahaya', coords: [32.8411, 130.0485] },
    { name: '熊本', query: 'Kumamoto', coords: [32.8031, 130.7079] },
    { name: '八代', query: 'Yatsushiro', coords: [32.5070, 130.6010] },
    { name: '大分', query: 'Oita', coords: [33.2382, 131.6126] },
    { name: '別府', query: 'Beppu', coords: [33.2778, 131.4962] },
    { name: '佐伯', query: 'Saiki', coords: [32.9591, 131.8994] },
    { name: '宮崎', query: 'Miyazaki', coords: [31.9077, 131.4202] },
    { name: '延岡', query: 'Nobeoka', coords: [32.5820, 131.6551] },
    { name: '都城', query: 'Miyakonojo', coords: [31.7195, 131.0611] },
    { name: '鹿児島', query: 'Kagoshima', coords: [31.5966, 130.5571] },
    { name: '霧島', query: 'Kirishima', coords: [31.7414, 130.7632] },
    { name: '那覇', query: 'Naha', coords: [26.2124, 127.6809] },
    { name: '宜野湾', query: 'Ginowan', coords: [26.2816, 127.7615] },
    { name: '名護', query: 'Nago', coords: [26.5903, 127.9773] },
    { name: '石垣', query: 'Ishigaki', coords: [24.3448, 124.1572] },
    { name: '宮古島', query: 'Miyakojima', coords: [24.8056, 125.2810] },

    
    { name: '稚内', query: 'Wakkanai', coords: [45.4094, 141.6739] },
    { name: '名寄', query: 'Nayoro', coords: [44.3556, 142.4658] },
    { name: '根室', query: 'Nemuro', coords: [43.3300, 145.5828] },
    { name: '紋別', query: 'Monbetsu', coords: [44.3522, 143.3544] },
    { name: '網走', query: 'Abashiri', coords: [44.0205, 144.2737] },
    { name: '竹富', query: 'Taketomi', coords: [24.3325, 124.0827] },
    { name: '室蘭', query: 'Muroran', coords: [42.3170, 140.9881] },
    { name: '苫小牧', query: 'Tomakomai', coords: [42.6360, 141.6032] },
    { name: '小樽', query: 'Otaru', coords: [43.1894, 140.9949] },
    { name: '北見', query: 'Kitami', coords: [43.8030, 143.8965] },
    { name: '富良野', query: 'Furano', coords: [43.3423, 142.3832] },
    { name: '留萌', query: 'Rumoi', coords: [43.9393, 141.6366] },
    { name: '酒田', query: 'Sakata', coords: [38.9224, 139.8387] },
    { name: '鶴岡', query: 'Tsuruoka', coords: [38.7251, 139.8266] },
    { name: '宮古', query: 'Miyako', coords: [39.6411, 141.9558] },
    { name: '久慈', query: 'Kuji', coords: [40.1884, 141.7754] },
    { name: '大館', query: 'Odate', coords: [40.2705, 140.5574] },
    { name: '鹿角', query: 'Kazuno', coords: [40.2222, 140.7882] },
    { name: '陸奥', query: 'Mutsu', coords: [41.2939, 141.2197] },
    { name: '甲府', query: 'Kofu', coords: [35.6639, 138.5683] },
    { name: '浜松', query: 'Hamamatsu', coords: [34.7108, 137.7261] },
    { name: '岐阜', query: 'Gifu', coords: [35.4233, 136.7606] },
    { name: '田辺', query: 'Tanabe', coords: [33.7254, 135.3777] },
    { name: '舞鶴', query: 'Maizuru', coords: [35.4675, 135.3940] },
    { name: '和歌山', query: 'Wakayama', coords: [34.2260, 135.1675] },
    { name: '鳥取', query: 'Tottori', coords: [35.5011, 134.2351] },
    { name: '呉', query: 'Kure', coords: [34.2323, 132.5651] },
    { name: '出雲', query: 'Izumo', coords: [35.3674, 132.7555] },
    { name: '中津川', query: 'Nakatsugawa', coords: [35.4875, 137.5000] },
    { name: '高山', query: 'Takayama', coords: [36.1468, 137.2529] },
    { name: '富士', query: 'Fuji', coords: [35.1611, 138.6761] },
    { name: '木更津', query: 'Kisarazu', coords: [35.3742, 139.9223] },
    { name: '千葉', query: 'Chiba', coords: [35.6073, 140.1063] },
    { name: '飯田', query: 'Iida', coords: [35.5146, 137.8210] },
    { name: '鹿屋', query: 'Kanoya', coords: [31.3795, 130.8524] }
    

];

const cityNamesJP = {
    "Tokyo": "東京",
    "Kyoto": "京都",
    "Osaka": "大阪",

    "Yokohama": "横浜",
    "Kobe": "神戸",
    "Himeji": "姫路",
    "Nagasaki": "長崎",
    "Niigata": "新潟",
    "Mito": "水戸",
    "Nagoya": "名古屋",
    "Shizuoka": "静岡",
    "Sendai": "仙台",
    "Morioka": "盛岡",
    "Hirosaki": "弘前",
    "Yamagata": "山形",
    "Yonezawa": "米沢",
    "Akita": "秋田",
    "Fukui": "福井",
    "Kanazawa": "金沢",
    "Toyama": "富山",
    "Takaoka": "高岡",
    "Matsue": "松江",
    "Okayama": "岡山",
    "Hiroshima": "広島",
    "Hokkaido": "北海道",
    "Okinawa": "沖縄",
    "Sapporo": "札幌",
    "Hakodate": "函館",
    "Asahikawa": "旭川",
    "Kushiro": "釧路",
    "Obihiro": "帯広",
    "Aomori": "青森",
    "Hachinohe": "八戸",
    "Yokote": "横手",
    "Ichinoseki": "一関",
    "Ishinomaki": "石巻",
    "Fukushima": "福島",
    "Koriyama": "郡山",
    "Iwaki": "磐城",
    "Utsunomiya": "宇都宮",
    "Nikko": "日光",
    "Maebashi": "前橋",
    "Takasaki": "高崎",
    "Omiya": "大宮",
    "Kawagoe": "川越",
    "Tokorozawa": "所沢",
    "Kawasaki": "川崎",
    "Yokosuka": "横須賀",
    "Fujisawa": "藤沢",
    "Kamakura": "鎌倉",
    "Odawara": "小田原",
    "Sagamihara": "相模原",
    "Nagaoka": "長岡",
    "Joetsu": "上越",
    "Sanjo": "三条",
    "Nagano": "長野",
    "Matsumoto": "松本",
    "Ueda": "上田",
    "Saku": "佐久",
    "Kadoma": "門真",
    "Ibaraki": "茨木",
    "Takaishi": "高石",
    "Suita": "吹田",
    "Ikeda": "池田",
    "Minoh": "箕面",
    "Amagasaki": "尼崎",
    "Nishinomiya": "西宮",
    "Ashiya": "芦屋",
    "Takarazuka": "宝塚",
    "Kawanishi": "川西",
    "Itami": "伊丹",
    "Kakogawa": "加古川",
    "Sumoto": "洲本",
    "Tsuna": "津名",
    "Nara": "奈良",
    "Kashihara": "橿原",
    "Tenri": "天理",
    "Sakurai": "桜井",
    "Takamatsu": "高松",
    "Marugame": "丸亀",
    "Sakaide": "坂出",
    "Kanonji": "観音寺",
    "Tokushima": "徳島",
    "Naruto": "鳴門",
    "Anan": "阿南",
    "Matsuyama": "松山",
    "Niihama": "新居浜",
    "Uwajima": "宇和島",
    "Kochi": "高知",
    "Muroto": "室戸",
    "Sukumo": "宿毛",
    "Fukuoka": "福岡",
    "Kitakyushu": "北九州",
    "Kurume": "久留米",
    "Omuta": "大牟田",
    "Saga": "佐賀",
    "Tosu": "鳥栖",
    "Sasebo": "佐世保",
    "Isahaya": "諫早",
    "Kumamoto": "熊本",
    "Yatsushiro": "八代",
    "Oita": "大分",
    "Beppu": "別府",
    "Saiki": "佐伯",
    "Miyazaki": "宮崎",
    "Nobeoka": "延岡",
    "Miyakonojo": "都城",
    "Kagoshima": "鹿児島",
    "Kirishima": "霧島",
    "Naha": "那覇",
    "Ginowan": "宜野湾",
    "Nago": "名護",
    "Ishigaki": "石垣",
    "Miyakojima": "宮古島",

    "Wakkanai": "稚内",
    "Nayoro": "名寄",
    "Nemuro": "根室",
    "Monbetsu": "紋別",
    "Abashiri": "網走",
    "Taketomi": "竹富",
    "Muroran": "室蘭",
    "Tomakomai": "苫小牧",
    "Otaru": "小樽",
    "Kitami": "北見",
    "Furano": "富良野",
    "Rumoi": "留萌",
    "Sakata": "酒田",
    "Tsuruoka": "鶴岡",
    "Miyako": "宮古",
    "Kuji": "久慈",
    "Odate": "大館",
    "Kazuno": "鹿角",
    "Mutsu": "陸奥",
    "Kofu": "甲府",
    "Hamamatsu": "浜松",
    "Gifu": "岐阜",
    "Tau": "田鶴",
    "Maizuru": "舞鶴",
    "Wakayama": "和歌山",
    "Tottori": "鳥取",
    "Kure": "呉",
    "Lida": "飯田",
    "Nakatsugawa": "中津川",
    "Takayama": "高山",
    "Fuji": "富士",
    "Kisarazu": "木更津",
    "Chiba": "千葉",
    "Kanoya": "鹿屋"
    // 添加其他城市的日文名称映射
};

const countryNamesJP = {
    "Japan": "日本",
    "JP": "日本",
    // 添加其他国家的日文名称映射
};

// 获取城市和国家的日文名称
const getJapaneseName = (name, type) => {
    if (type === 'city') {
        return cityNamesJP[name] || name;
    } else if (type === 'country') {
        return countryNamesJP[name] || name;
    }
    return name;
};


// 城市信息的数组
const cityList = [
    { value: 'Tokyo', name: '東京' },
    { value: 'Kyoto', name: '京都' },
    { value: 'Osaka', name: '大阪' },
    { value: 'Yokohama', name: '横浜' },
    { value: 'Kobe', name: '神戸' },
    { value: 'Himeji', name: '姫路' },
    { value: 'Nagasaki', name: '長崎' },
    { value: 'Niigata', name: '新潟' },
    { value: 'Mito', name: '水戸' },
    { value: 'Nagoya', name: '名古屋' },
    { value: 'Shizuoka', name: '静岡' },
    { value: 'Sendai', name: '仙台' },
    { value: 'Morioka', name: '盛岡' },
    { value: 'Hirosaki', name: '弘前' },
    { value: 'Yamagata', name: '山形' },
    { value: 'Yonezawa', name: '米沢' },
    { value: 'Akita', name: '秋田' },
    { value: 'Fukui', name: '福井' },
    { value: 'Kanazawa', name: '金沢' },
    { value: 'Toyama', name: '富山' },
    { value: 'Takaoka', name: '高岡' },
    { value: 'Matsue', name: '松江' },
    { value: 'Okayama', name: '岡山' },
    { value: 'Hiroshima', name: '広島' },
    { value: 'Hokkaido', name: '北海道' },
    { value: 'Okinawa', name: '沖縄' },
    { value: 'Sapporo', name: '札幌' },
    { value: 'Hakodate', name: '函館' },
    { value: 'Asahikawa', name: '旭川' },
    { value: 'Kushiro', name: '釧路' },
    { value: 'Obihiro', name: '帯広' },
    { value: 'Aomori', name: '青森' },
    { value: 'Hachinohe', name: '八戸' },
    { value: 'Yokote', name: '横手' },
    { value: 'Ichinoseki', name: '一関' },
    { value: 'Ishinomaki', name: '石巻' },
    { value: 'Fukushima', name: '福島' },
    { value: 'Koriyama', name: '郡山' },
    { value: 'Iwaki', name: '磐城' },
    { value: 'Utsunomiya', name: '宇都宮' },
    { value: 'Nikko', name: '日光' },
    { value: 'Maebashi', name: '前橋' },
    { value: 'Takasaki', name: '高崎' },
    { value: 'Omiya', name: '大宮' },
    { value: 'Kawagoe', name: '川越' },
    { value: 'Tokorozawa', name: '所沢' },
    { value: 'Kawasaki', name: '川崎' },
    { value: 'Yokosuka', name: '横須賀' },
    { value: 'Fujisawa', name: '藤沢' },
    { value: 'Kamakura', name: '鎌倉' },
    { value: 'Odawara', name: '小田原' },
    { value: 'Sagamihara', name: '相模原' },
    { value: 'Nagaoka', name: '長岡' },
    { value: 'Joetsu', name: '上越' },
    { value: 'Sanjo', name: '三条' },
    { value: 'Nagano', name: '長野' },
    { value: 'Matsumoto', name: '松本' },
    { value: 'Ueda', name: '上田' },
    { value: 'Saku', name: '佐久' },
    { value: 'Kadoma', name: '門真' },
    { value: 'Ibaraki', name: '茨木' },
    { value: 'Takaishi', name: '高石' },
    { value: 'Suita', name: '吹田' },
    { value: 'Ikeda', name: '池田' },
    { value: 'Minoh', name: '箕面' },
    { value: 'Amagasaki', name: '尼崎' },
    { value: 'Nishinomiya', name: '西宮' },
    { value: 'Ashiya', name: '芦屋' },
    { value: 'Takarazuka', name: '宝塚' },
    { value: 'Kawanishi', name: '川西' },
    { value: 'Itami', name: '伊丹' },
    { value: 'Kakogawa', name: '加古川' },
    { value: 'Sumoto', name: '洲本' },
    { value: 'Tsuna', name: '津名' },
    { value: 'Nara', name: '奈良' },
    { value: 'Kashihara', name: '橿原' },
    { value: 'Tenri', name: '天理' },
    { value: 'Sakurai', name: '桜井' },
    { value: 'Takamatsu', name: '高松' },
    { value: 'Marugame', name: '丸亀' },
    { value: 'Sakaide', name: '坂出' },
    { value: 'Kanonji', name: '観音寺' },
    { value: 'Tokushima', name: '徳島' },
    { value: 'Naruto', name: '鳴門' },
    { value: 'Anan', name: '阿南' },
    { value: 'Matsuyama', name: '松山' },
    { value: 'Niihama', name: '新居浜' },
    { value: 'Uwajima', name: '宇和島' },
    { value: 'Kochi', name: '高知' },
    { value: 'Muroto', name: '室戸' },
    { value: 'Sukumo', name: '宿毛' },
    { value: 'Fukuoka', name: '福岡' },
    { value: 'Kitakyushu', name: '北九州' },
    { value: 'Kurume', name: '久留米' },
    { value: 'Omuta', name: '大牟田' },
    { value: 'Saga', name: '佐賀' },
    { value: 'Tosu', name: '鳥栖' },
    { value: 'Sasebo', name: '佐世保' },
    { value: 'Isahaya', name: '諫早' },
    { value: 'Kumamoto', name: '熊本' },
    { value: 'Yatsushiro', name: '八代' },
    { value: 'Oita', name: '大分' },
    { value: 'Beppu', name: '別府' },
    { value: 'Saiki', name: '佐伯' },
    { value: 'Miyazaki', name: '宮崎' },
    { value: 'Nobeoka', name: '延岡' },
    { value: 'Miyakonojo', name: '都城' },
    { value: 'Kagoshima', name: '鹿児島' },
    { value: 'Kirishima', name: '霧島' },
    { value: 'Naha', name: '那覇' },
    { value: 'Ginowan', name: '宜野湾' },
    { value: 'Nago', name: '名護' },
    { value: 'Ishigaki', name: '石垣' },
    { value: 'Miyakojima', name: '宮古島' },
    { value: 'Wakkanai', name: '稚内' },
    { value: 'Nayoro', name: '名寄' },
    { value: 'Nemuro', name: '根室' },
    { value: 'Monbetsu', name: '紋別' },
    { value: 'Abashiri', name: '網走' },
    { value: 'Taketomi', name: '竹富' },
    { value: 'Muroran', name: '室蘭' },
    { value: 'Tomakomai', name: '苫小牧' },
    { value: 'Otaru', name: '小樽' },
    { value: 'Kitami', name: '北見' },
    { value: 'Furano', name: '富良野' },
    { value: 'Rumoi', name: '留萌' },
    { value: 'Sakata', name: '酒田' },
    { value: 'Tsuruoka', name: '鶴岡' },
    { value: 'Miyako', name: '宮古' },
    { value: 'Kuji', name: '久慈' },
    { value: 'Odate', name: '大館' },
    { value: 'Kazuno', name: '鹿角' },
    { value: 'Mutsu', name: '陸奥' },
    { value: 'Kofu', name: '甲府' },
    { value: 'Hamamatsu', name: '浜松' },
    { value: 'Gifu', name: '岐阜' },
    { value: 'Tau', name: '田鶴' },
    { value: 'Maizuru', name: '舞鶴' },
    { value: 'Wakayama', name: '和歌山' },
    { value: 'Tottori', name: '鳥取' },
    { value: 'Kure', name: '呉' },
    { value: 'Lida', name: '飯田' },
    { value: 'Nakatsugawa', name: '中津川' },
    { value: 'Takayama', name: '高山' },
    { value: 'Fuji', name: '富士' },
    { value: 'Kisarazu', name: '木更津' },
    { value: 'Chiba', name: '千葉' },
    { value: 'Kanoya', name: '鹿屋' }
];

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');

    cityList.forEach(city => {
        const option = document.createElement('option');
        option.value = city.value;
        option.textContent = city.name;
        citySelect.appendChild(option);
    });
});


function fetchWeatherData() {
    const temperatureList = document.getElementById('temperature-list');
    temperatureList.innerHTML = ''; // 清空现有数据

    const promises = cities.map(city => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.query}&units=metric&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp.toFixed(1);
                const maxTemp = data.main.temp_max.toFixed(1);
                const time = new Date(data.dt * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

                // 添加圆圈
                let color;
                if (temperature > 35.0) {
                    color = '#ff9999'; // 浅红色
                } else if (temperature > 30.0) {
                    color = '#FCFB94'; // 浅黄色
                } else {
                    color = '#ACF7E3'; // 浅绿色
                }

                L.circleMarker(city.coords, {
                    color: 'rgba(255, 255, 255, 0.4)', 
                    weight: 1, // 外框粗细
                    fillColor: color,
                    fillOpacity: 0.85, 
                    radius: 8.5
                    }).addTo(map).bindPopup(`
                     <b>${city.name}</b><br>
                     現在気温: ${temperature}°C<br>最高気温: ${maxTemp}°C
                    `);

                // 在表格中显示温度数据
                const listItem = document.createElement('tr');
                listItem.innerHTML = `
                    <td>${city.name}</td>
                    <td class="current-temp">${temperature}°C<br><span class="time">${time}</span></td>
                    <td class="max-temp">${maxTemp}°C<br><span class="time">${time}</span></td>
                `;
                console.log(`Adding data for ${city.name}: Temperature - ${temperature}°C, Max Temp - ${maxTemp}°C`); // 添加日志记录

                if (temperature > 35) {
                    listItem.querySelector('.current-temp').style.backgroundColor = '#ff9999' + '50'; // 浅红色
                } else if (temperature > 30) {
                    listItem.querySelector('.current-temp').style.backgroundColor = '#FCFB94' + '60'; // 浅黄色
                } else {
                    listItem.querySelector('.current-temp').style.backgroundColor = '#ACF7E3' + '50'; // 浅绿色
                }

                if (maxTemp > 35) {
                    listItem.querySelector('.max-temp').style.backgroundColor = '#ff9999' + '50'; // 浅红色
                } else if (maxTemp > 30) {
                    listItem.querySelector('.max-temp').style.backgroundColor = '#FCFB94' + '60'; // 浅黄色
                } else {
                    listItem.querySelector('.max-temp').style.backgroundColor = '#ACF7E3' + '50'; // 浅绿色
                }
                temperatureList.appendChild(listItem);
            })
            .catch(error => {
                const listItem = document.createElement('tr');
                listItem.innerHTML = `
                    <td colspan="3">Error fetching data for ${city.name}: ${error.message}</td>
                `;
                temperatureList.appendChild(listItem);
            });
    });

    return Promise.all(promises);
}

// 获取当前位置的天气和气温
function fetchLocationAndWeather(currentDateElement, currentDate) {
    // 获取用户的 IP 地址和位置信息
    fetch('https://ipinfo.io/json?token=2faef1485ff541')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch location data');
            }
            return response.json();
        })
        .then(data => {
            const city = data.city;
            const country = data.country;

            if (!city || !country) {
                throw new Error('Invalid location data');
            }


            // 获取位置的天气和气温
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Weather data not found');
                    }
                    return response.json();
                })
                .then(weatherData => {
                    if (weatherData.main && weatherData.weather) {
                        const temperature = weatherData.main.temp.toFixed(1);
                        const feelsLike = weatherData.main.feels_like.toFixed(1);

          // 使用映射获取日文名称
          const cityJP = cityNamesJP[city] || city;
          const countryJP = countryNamesJP[country] || country;


                        // 将信息添加到日期显示框内
                        currentDateElement.innerHTML = `
                            <div class="date-display">${currentDate}</div>
                            <div class="city-display">${cityJP}</div>
                            <div class="country-display">${countryJP}</div>
                            <div class="temperature-display">${temperature}°C</div>
                            <div class="feels-like-display">${feelsLike}°C（体感）</div>
`;
                    } else {
                        console.error('Invalid weather data:', weatherData);
                        currentDateElement.innerHTML = `${currentDate}<br>Error fetching weather data`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    currentDateElement.innerHTML = `${currentDate}<br>Error fetching weather data`;
                });
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
            currentDateElement.innerHTML = `${currentDate}<br>Error fetching location data`;
        });
}


function fetchForecastData(cityQuery) {
    const forecastBody = document.getElementById('forecast-body');
    forecastBody.innerHTML = ''; // 清空现有数据

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityQuery}&units=metric&appid=${apiKey}`)        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch forecast data');
            }
            return response.json();
        })

                .then(data => {
                    const dailyData = {};
                    data.list.forEach(entry => {
                        const date = new Date(entry.dt * 1000).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' });
                        if (!dailyData[date]) {
                            dailyData[date] = { min: entry.main.temp_min, max: entry.main.temp_max };
                        } else {
                            dailyData[date].min = Math.min(dailyData[date].min, entry.main.temp_min);
                            dailyData[date].max = Math.max(dailyData[date].max, entry.main.temp_max);
                        }
                    });
        
                    Object.keys(dailyData).slice(0, 8).forEach(date => {
                        const { min, max } = dailyData[date];
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${date}</td>
                            <td>${min.toFixed(1)}°C</td>
                            <td>${max.toFixed(1)}°C</td>
                        `;
                forecastBody.appendChild(row);
            });
        })
        .catch(error => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="3">Error fetching forecast data: ${error.message}</td>
            `;
            forecastBody.appendChild(row);
        });
}




// 设置定时器每10分钟刷新一次数据
setInterval(fetchWeatherData, 10 * 60 * 1000);

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');

    
    const currentTempBtn = document.getElementById('current-temp-btn');
    const maxTempBtn = document.getElementById('max-temp-btn');
    const temperatureList = document.getElementById('temperature-list');
    const currentDateElement = document.getElementById('current-date');
    const currentDate = new Date().toISOString().split('T')[0];


    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        fetchForecastData(selectedCity);
    });



    currentTempBtn.addEventListener('click', () => {
        currentTempBtn.classList.add('active');
        maxTempBtn.classList.remove('active');
        fetchWeatherDataAndSort('current'); // 重新加载数据并按当前温度排序
    });

    maxTempBtn.addEventListener('click', () => {
        currentTempBtn.classList.remove('active');
        maxTempBtn.classList.add('active');
        fetchWeatherDataAndSort('max'); // 重新加载数据并按最高温度排序
    });

    const fetchWeatherDataAndSort = (sortType) => {
        console.log(`Fetching data and sorting by ${sortType}`);
        fetchWeatherData().then(() => {
            sortTemperatureList(sortType);
        });
    };

    const sortTemperatureList = (sortType) => {
        let rows = Array.from(document.querySelectorAll('.temperature-table tbody tr'));
        rows.sort((a, b) => {
            let tempA = parseFloat(a.querySelector(`.${sortType}-temp`).textContent);
            let tempB = parseFloat(b.querySelector(`.${sortType}-temp`).textContent);
            return tempB - tempA; // 降序排序
        });
        temperatureList.innerHTML = '';
        rows.forEach(row => {
            temperatureList.appendChild(row);
        });
    };

    // 默认加载时显示现在气温
    fetchWeatherDataAndSort('current');

    // 调用获取位置和天气信息的函数
    fetchLocationAndWeather(currentDateElement, currentDate);

// 初始加载第一个城市的天气预报
fetchForecastData(citySelect.value);

});


