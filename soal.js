// ===== Struktur 8 bagian soal HSK 1 (sama untuk setiap bab) =====
// kind: 'pic' = tiap soal punya gambar sendiri | 'txt' = tiap soal punya pilihan teks sendiri | 'shared' = pilihan bersama di atas bagian
const SECS = [
 {id:'L1',from:1,to:3,kind:'pic',zh:'第1—3题：听短语，选择正确图片。每题听两次。',en:'Questions 1–3: Listen to each phrase and choose the correct picture. Each phrase will be played twice.',
  how:'Dengarkan tiap frasa (diputar 2 kali), lalu pilih gambar yang sesuai (A, B, atau C).',
  ex:{zh:'三个苹果',py:'sān gè píngguǒ',en:'three apples',a:'C',opts:['A','B','C'].map(k=>({img:`img/ex/L1${k}.jpg`}))}},
 {id:'L2',from:4,to:5,kind:'txt',zh:'第4—5题：听问题，选择正确回答。每题听两次。',en:'Questions 4–5: Listen to each question and choose the correct answer. Each question will be played twice.',
  how:'Dengarkan pertanyaan (diputar 2 kali), lalu pilih jawaban yang tepat.',
  ex:{zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',en:'How is the weather today?',a:'A',opts:[{zh:'非常热',py:'fēicháng rè',en:'very hot'},{zh:'很好听',py:'hěn hǎotīng',en:'sounds beautiful'},{zh:'在喝水',py:'zài hē shuǐ',en:'drinking water'}]}},
 {id:'L3',from:6,to:8,kind:'shared',zh:'第6—8题：听对话，选择最匹配的图片。每题听两次。',en:'Questions 6–8: Listen to each dialogue and choose the correct picture. Each dialogue will be played twice.',
  how:'Dengarkan dialog (diputar 2 kali), lalu pilih gambar yang paling cocok dari gambar di atas. Gambar bertanda “Contoh” tidak dipakai sebagai jawaban.',
  ex:{zh:'女：你好！　男：你好！很高兴认识你。',py:'Nǐ hǎo! Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',en:'How do you do? Nice to meet you.'}},
 {id:'L4',from:9,to:10,kind:'txt',zh:'第9—10题：听句子和问题，选择正确答案。每题听两次。',en:'Questions 9–10: Listen to each sentence and question, and choose the correct answer.',
  how:'Dengarkan kalimat dan pertanyaannya (diputar 2 kali), lalu pilih jawaban yang benar.',
  ex:{zh:'下午我去超市，我想买一些水果。',py:'Xiàwǔ wǒ qù chāoshì, wǒ xiǎng mǎi yìxiē shuǐguǒ.',en:"I'm going to the supermarket this afternoon. I want to buy some fruit.",q:'问：说话人下午去哪里？',qen:'Where is the speaker going this afternoon?',a:'A',opts:[{zh:'超市',py:'chāoshì',en:'supermarket'},{zh:'医院',py:'yīyuàn',en:'hospital'},{zh:'学校',py:'xuéxiào',en:'school'}]}},
 {id:'R1',from:11,to:13,kind:'shared',zh:'第11—13题：选择与句子最匹配的图片。',en:'Questions 11–13: Choose the correct picture for each sentence.',
  how:'Baca kalimat, lalu pilih gambar yang paling cocok. Gambar bertanda “Contoh” tidak dipakai sebagai jawaban.',
  ex:{zh:'我很喜欢这本书。',py:'Wǒ hěn xǐhuan zhè běn shū.',en:'I like this book very much.'}},
 {id:'R2',from:14,to:16,kind:'shared',zh:'第14—16题：匹配句子。',en:'Questions 14–16: Match the sentences.',
  how:'Baca pertanyaan, lalu cocokkan dengan jawaban yang tepat dari daftar di atas. Setiap jawaban dipakai sekali.',
  ex:{zh:'你喝水吗？',py:'Nǐ hē shuǐ ma?',en:'Would you like some water?'}},
 {id:'R3',from:17,to:18,kind:'shared',zh:'第17—18题：选词填空。',en:'Questions 17–18: Choose the correct word to fill in each blank.',
  how:'Pilih kata yang tepat dari daftar di atas untuk mengisi bagian kosong ( ).',
  ex:{zh:'你叫什么（ 　）？',py:'Nǐ jiào shénme',en:'What is your name?'}},
 {id:'R4',from:19,to:20,kind:'txt',zh:'第19—20题：选择正确答案。',en:'Questions 19–20: Choose the correct answer for each question.',
  how:'Baca teks pendek, lalu jawab pertanyaan ★ dengan memilih pilihan yang benar.',
  ex:{zh:'请问现在几点了？',py:'Qǐngwèn xiànzài jǐ diǎn le?',en:'Excuse me, what time is it now?',q:'★说话人想知道什么？',qen:'What does the speaker want to know?',a:'A',opts:[{zh:'时间',py:'shíjiān',en:'time'},{zh:'名字',py:'míngzi',en:'name'},{zh:'房间号',py:'fángjiānhào',en:'room number'}]}}
];
// ===== Data per bab =====
// shared: {L3:{items,ex}, ...}  ex = huruf contoh.  qs: {n, zh?, py?, opts?}  (kunci jawaban ada di server, bukan di sini)
const PICS = (d,p,k) => 'ABCD'.slice(0,k).split('').map(c => ({img:`img/${d}/${p}${c}.jpg`}));
const T = (zh,py) => ({zh,py});
const BABS = {
  4: { audio:'audio/bab_4.mp3',
    shared:{
      L3:{ex:'A',items:PICS('b4','p6',4)},
      R1:{ex:'A',items:PICS('b4','p11',4)},
      R2:{ex:'A',items:[T('好的，谢谢！','Hǎo de, xièxie!'),T('他今年5岁。','Tā jīnnián wǔ suì.'),T('我女朋友。','Wǒ nǚpéngyou.'),T('是的。','Shì de.')]},
      R3:{ex:'C',items:[T('想','xiǎng'),T('忙','máng'),T('名字','míngzi')]} },
    qs:[
      {n:1,opts:PICS('b4','q1',3)},{n:2,opts:PICS('b4','q2',3)},{n:3,opts:PICS('b4','q3',3)},
      {n:4,opts:[T('十人','shí rén'),T('20个','gè'),T('三口人','sān kǒu rén')]},
      {n:5,opts:[T('大','dà'),T('12岁','suì'),T('两千','liǎngqiān')]},
      {n:6},{n:7},{n:8},
      {n:9,opts:[T('中国人','Zhōngguó rén'),T('泰国人','Tàiguó rén'),T('法国人','Fǎguó rén')]},
      {n:10,opts:[T('安妮','Ānní'),T('王一飞','Wáng Yīfēi'),T('白家月','Bái Jiāyuè')]},
      {n:11,...T('老师，您好！','Lǎoshī, nín hǎo!')},{n:12,...T('我家有四口人。','Wǒ jiā yǒu sì kǒu rén.')},{n:13,...T('我哥哥今年20岁。','Wǒ gēge jīnnián èrshí suì.')},
      {n:14,...T('她是谁？','Tā shì shéi?')},{n:15,...T('你是法国人吗？','Nǐ shì Fǎguó rén ma?')},{n:16,...T('您儿子多大？','Nín érzi duō dà?')},
      {n:17,...T('她工作很（　　）。','Tā gōngzuò hěn')},
      {n:18,...T('男：你们好吗？　女：很好，我们很（　　）你。','Nǐmen hǎo ma? Hěn hǎo, wǒmen hěn … nǐ.')},
      {n:19,...T('我家有三口人，爸爸、妈妈和我。★说话人家里有：','Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ.'),opts:[T('姐姐','jiějie'),T('三口人','sān kǒu rén'),T('四口人','sì kǒu rén')]},
      {n:20,...T('她是法国人，我不是。★“她”是：','Tā shì Fǎguó rén, wǒ bú shì.'),opts:[T('法国人','Fǎguó rén'),T('中国人','Zhōngguó rén'),T('泰国人','Tàiguó rén')]}
    ]}
};

// ===== Bab 5 =====
BABS[5] = { audio:'audio/bab_5.mp3',
  shared:{
    L3:{ex:'A',items:PICS('b5','p6',4)},
    R1:{ex:'A',items:PICS('b5','p11',4)},
    R2:{ex:'A',items:[T('好的，谢谢！','Hǎo de, xièxie!'),T('我不会。','Wǒ bú huì.'),T('面条儿。','Miàntiáor.'),T('5月6号。','Wǔ yuè liù hào.')]},
    R3:{ex:'C',items:[T('几','jǐ'),T('好看','hǎokàn'),T('名字','míngzi')]} },
  qs:[
    {n:1,opts:PICS('b5','q1',3)},{n:2,opts:PICS('b5','q2',3)},{n:3,opts:PICS('b5','q3',3)},
    {n:4,opts:[T('我不会','wǒ bú huì'),T('我吃饺子','wǒ chī jiǎozi'),T('做面条儿','zuò miàntiáor')]},
    {n:5,opts:[T('休息','xiūxi'),T('星期四','Xīngqīsì'),T('五口人','wǔ kǒu rén')]},
    {n:6},{n:7},{n:8},
    {n:9,opts:[T('菜','cài'),T('饺子','jiǎozi'),T('面条儿','miàntiáor')]},
    {n:10,opts:[T('4号','sì hào'),T('10号','shí hào'),T('14号','shísì hào')]},
    {n:11,...T('王老师，再见。','Wáng lǎoshī, zàijiàn.')},{n:12,...T('今天我休息。','Jīntiān wǒ xiūxi.')},{n:13,...T('我有一个儿子，他今年7岁。','Wǒ yǒu yí gè érzi, tā jīnnián qī suì.')},
    {n:14,...T('你去超市买什么？','Nǐ qù chāoshì mǎi shénme?')},{n:15,...T('你会做饭吗？','Nǐ huì zuòfàn ma?')},{n:16,...T('今天几号？','Jīntiān jǐ hào?')},
    {n:17,...T('今天（　　）号？','Jīntiān … hào?')},
    {n:18,...T('男：你的新电脑真（　　）！　女：谢谢，我也很喜欢。','Nǐ de xīn diànnǎo zhēn …! Xièxie, wǒ yě hěn xǐhuan.')},
    {n:19,...T('我非常喜欢我的中文名字。★说话人喜欢什么？','Wǒ fēicháng xǐhuan wǒ de Zhōngwén míngzi.'),opts:[T('新电脑','xīn diànnǎo'),T('中国菜','Zhōngguó cài'),T('中文名字','Zhōngwén míngzi')]},
    {n:20,...T('今天8号，你几号休息？★说话人想知道什么？','Jīntiān bā hào, nǐ jǐ hào xiūxi?'),opts:[T('今天几号','jīntiān jǐ hào'),T('哪天休息','nǎ tiān xiūxi'),T('星期几上班','xīngqī jǐ shàngbān')]}
  ]};

// ===== Pembuat bab ringkas (dipakai Bab 5 dst.) =====
// o: l2=[[opsi q4],[opsi q5]] l4=[[q9],[q10]] r1=[T,T,T] r2=[item A-D] r2q=[T,T,T] r3=[item] r3q=[T,T] r4=[{zh,py,opts},{..}]  (+ ex huruf contoh: l3ex r1ex r2ex r3ex)
const MK = (n,o) => ({ audio:`audio/bab_${n}.mp3`,
  shared:{ L3:{ex:o.l3ex||'A',items:PICS('b'+n,'p6',4)}, R1:{ex:o.r1ex||'A',items:PICS('b'+n,'p11',4)}, R2:{ex:o.r2ex||'A',items:o.r2}, R3:{ex:o.r3ex||'C',items:o.r3} },
  qs:[ ...[1,2,3].map(i=>({n:i,opts:PICS('b'+n,'q'+i,3)})),
    {n:4,opts:o.l2[0]},{n:5,opts:o.l2[1]},{n:6},{n:7},{n:8},{n:9,opts:o.l4[0]},{n:10,opts:o.l4[1]},
    ...o.r1.map((t,i)=>({n:11+i,...t})), ...o.r2q.map((t,i)=>({n:14+i,...t})), ...o.r3q.map((t,i)=>({n:17+i,...t})),
    ...o.r4.map((t,i)=>({n:19+i,...t})) ] });

BABS[6] = MK(6,{ r2ex:'D',
  l2:[[T('超市','chāoshì'),T('做饭','zuò fàn'),T('东西','dōngxi')],[T('去','qù'),T('西安饭店','Xī’ān Fàndiàn'),T('坐出租车','zuò chūzūchē')]],
  l4:[[T('5362805',''),T('5398205',''),T('5326085','')],[T('包子','bāozi'),T('饺子','jiǎozi'),T('面条儿','miàntiáor')]],
  r1:[T('我有一个新电脑。','Wǒ yǒu yí gè xīn diànnǎo.'),T('今天星期二。','Jīntiān Xīngqī’èr.'),T('我想去超市买东西。','Wǒ xiǎng qù chāoshì mǎi dōngxi.')],
  r2:[T('坐出租车。','Zuò chūzūchē.'),T('真好看！','Zhēn hǎokàn!'),T('包子。','Bāozi.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('你吃什么？','Nǐ chī shénme?'),T('我们怎么去？','Wǒmen zěnme qù?'),T('这是老师的新电脑。','Zhè shì lǎoshī de xīn diànnǎo.')],
  r3:[T('有','yǒu'),T('牛奶','niúnǎi'),T('名字','míngzi')],
  r3q:[T('我想买（　　）。','Wǒ xiǎng mǎi'),T('男：我的手机号是+86 13552721160。　女：我（　　）你的手机号，你的电话号呢？','Wǒ de shǒujīhào shì … Wǒ … nǐ de shǒujīhào, nǐ de diànhuàhào ne?')],
  r4:[{...T('我家有三口人：爸爸、妈妈和我。★说话人家里有几口人？','Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.'),opts:[T('三口人','sān kǒu rén'),T('四口人','sì kǒu rén'),T('六口人','liù kǒu rén')]},
      {...T('明天星期天，我休息，想去超市买牛奶。★说话人想买什么？','Míngtiān Xīngqītiān, wǒ xiūxi, xiǎng qù chāoshì mǎi niúnǎi.'),opts:[T('菜','cài'),T('牛奶','niúnǎi'),T('饺子','jiǎozi')]}]
});

BABS[7] = MK(7,{ r2ex:'D',
  l2:[[T('10:00',''),T('12:00',''),T('12号','shí’èr hào')],[T('8月','bā yuè'),T('三分钟','sān fēnzhōng'),T('7:10','')]],
  l4:[[T('上课','shàngkè'),T('上班','shàngbān'),T('看电影','kàn diànyǐng')],[T('饭店','fàndiàn'),T('菜店','càidiàn'),T('超市','chāoshì')]],
  r1:[T('我在上课呢。','Wǒ zài shàngkè ne.'),T('我下午有事，晚上7:00见吧。','Wǒ xiàwǔ yǒu shì, wǎnshang qī diǎn jiàn ba.'),T('今天不上班，我去超市买东西。','Jīntiān bú shàngbān, wǒ qù chāoshì mǎi dōngxi.')],
  r2:[T('早上七点半。','Zǎoshang qī diǎn bàn.'),T('对不起，我有课。','Duìbuqǐ, wǒ yǒu kè.'),T('电影院。','Diànyǐngyuàn.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('我们在哪儿见？','Wǒmen zài nǎr jiàn?'),T('现在几点？','Xiànzài jǐ diǎn?'),T('我们下午去超市吧。','Wǒmen xiàwǔ qù chāoshì ba.')],
  r3:[T('医院','yīyuàn'),T('中午','zhōngwǔ'),T('名字','míngzi')],
  r3q:[T('我们（　　）12:00下课。','Wǒmen … xiàkè.'),T('男：你现在在哪儿？　女：我在（　　）呢。','Nǐ xiànzài zài nǎr? Wǒ zài … ne.')],
  r4:[{...T('我今天早上八点半上课，十点十分下课。★说话人今天几点下课？','Wǒ jīntiān zǎoshang bā diǎn bàn shàngkè, shí diǎn shí fēn xiàkè.'),opts:[T('8:30',''),T('10:10',''),T('10:20','')]},
      {...T('妈妈今天休息，下午想去菜店买些菜。★妈妈下午想去菜店买：','Māma jīntiān xiūxi, xiàwǔ xiǎng qù càidiàn mǎi xiē cài.'),opts:[T('菜','cài'),T('饺子','jiǎozi'),T('牛奶','niúnǎi')]}]
});
