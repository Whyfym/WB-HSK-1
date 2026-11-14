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
const PICS = (d,p,k) => 'ABCDEF'.slice(0,k).split('').map(c => ({img:`img/${d}/${p}${c}.jpg`}));
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

BABS[8] = MK(8,{ r2ex:'D',
  l2:[[T('去学校','qù xuéxiào'),T('房间外','fángjiān wài'),T('在吃东西','zài chī dōngxi')],[T('我能到','wǒ néng dào'),T('我吃午饭','wǒ chī wǔfàn'),T('我不能工作','wǒ bù néng gōngzuò')]],
  l4:[[T('超市','chāoshì'),T('饭店','fàndiàn'),T('学校书店','xuéxiào shūdiàn')],[T('去学校','qù xuéxiào'),T('看电影','kàn diànyǐng'),T('去上班','qù shàngbān')]],
  r1:[T('你的手机在桌子上呢。','Nǐ de shǒujī zài zhuōzi shang ne.'),T('我在学校吃午饭。','Wǒ zài xuéxiào chī wǔfàn.'),T('这个医院里病人多，医生工作很忙。','Zhège yīyuàn lǐ bìngrén duō, yīshēng gōngzuò hěn máng.')],
  r2:[T('医院。','Yīyuàn.'),T('我老师。','Wǒ lǎoshī.'),T('饺子和面条儿。','Jiǎozi hé miàntiáor.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('桌子上有什么？','Zhuōzi shang yǒu shénme?'),T('她是谁？','Tā shì shéi?'),T('你爸爸在哪儿工作？','Nǐ bàba zài nǎr gōngzuò?')],
  r3:[T('能','néng'),T('有','yǒu'),T('名字','míngzi')],
  r3q:[T('我的房间里（　　）一只小猫。','Wǒ de fángjiān lǐ … yì zhī xiǎo māo.'),T('男：我们下午在书店见吧。　女：好的，我7:00（　　）到。','Wǒmen xiàwǔ zài shūdiàn jiàn ba. Hǎo de, wǒ qī diǎn … dào.')],
  r4:[{...T('昨天爸爸在医院工作，哥哥在家里休息，没去书店。★说话人的哥哥昨天：','Zuótiān bàba zài yīyuàn gōngzuò, gēge zài jiā lǐ xiūxi, méi qù shūdiàn.'),opts:[T('在家里','zài jiā lǐ'),T('在书店','zài shūdiàn'),T('在医院工作','zài yīyuàn gōngzuò')]},
      {...T('我喜欢吃米饭，我女朋友不喜欢。★说话人的女朋友不喜欢吃：','Wǒ xǐhuan chī mǐfàn, wǒ nǚpéngyou bù xǐhuan.'),opts:[T('米饭','mǐfàn'),T('包子','bāozi'),T('面条儿','miàntiáor')]}]
});

BABS[9] = MK(9,{ r2ex:'D',
  l2:[[T('书','shū'),T('我的','wǒ de'),T('他的电脑','tā de diànnǎo')],[T('星期天','Xīngqītiān'),T('孩子们','háizimen'),T('去外边唱歌','qù wàibian chàng gē')]],
  l4:[[T('上午8:00','shàngwǔ'),T('上午10:00','shàngwǔ'),T('晚上8:00','wǎnshang')],[T('菜店','càidiàn'),T('书店','shūdiàn'),T('超市','chāoshì')]],
  r1:[T('妹妹和小狗今天在家里玩。','Mèimei hé xiǎo gǒu jīntiān zài jiā lǐ wán.'),T('房间外有一只小猫。','Fángjiān wài yǒu yì zhī xiǎo māo.'),T('这是我的第三个电脑。','Zhè shì wǒ de dì-sān gè diànnǎo.')],
  r2:[T('在家里。','Zài jiā lǐ.'),T('我女朋友。','Wǒ nǚpéngyou.'),T('一只小猫。','Yì zhī xiǎo māo.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('桌子上有什么？','Zhuōzi shang yǒu shénme?'),T('你今天下午在哪儿？','Nǐ jīntiān xiàwǔ zài nǎr?'),T('你和谁在超市呢？','Nǐ hé shéi zài chāoshì ne?')],
  r3:[T('2:00',''),T('上课','shàngkè'),T('名字','míngzi')],
  r3q:[T('我上午在学校（　　），我们下午去看电影吧。','Wǒ shàngwǔ zài xuéxiào …, wǒmen xiàwǔ qù kàn diànyǐng ba.'),T('男：我们下午几点在学校见？　女：下午（　　）吧。','Wǒmen xiàwǔ jǐ diǎn zài xuéxiào jiàn? Xiàwǔ … ba.')],
  r4:[{...T('我有一只小狗，很漂亮，它是我的好朋友。★说话人有几只小狗？','Wǒ yǒu yì zhī xiǎo gǒu, hěn piàoliang, tā shì wǒ de hǎo péngyou.'),opts:[T('一','yī'),T('四','sì'),T('十一','shíyī')]},
      {...T('星期天中午妈妈在做饭，我和妹妹在房间里玩。★说话人和妹妹在哪儿？','Xīngqītiān zhōngwǔ māma zài zuò fàn, wǒ hé mèimei zài fángjiān lǐ wán.'),opts:[T('外边','wàibian'),T('房间里','fángjiān lǐ'),T('超市里','chāoshì lǐ')]}]
});

BABS[10] = MK(10,{ r2ex:'D',
  l2:[[T('10:00',''),T('十块钱','shí kuài qián'),T('十本书','shí běn shū')],[T('不贵','bú guì'),T('很好看','hěn hǎokàn'),T('120元','yuán')]],
  l4:[[T('很多','hěn duō'),T('真贵','zhēn guì'),T('不好看','bù hǎokàn')],[T('很少','hěn shǎo'),T('很便宜','hěn piányi'),T('很漂亮','hěn piàoliang')]],
  r1:[T('请问，包子多少钱一个？','Qǐngwèn, bāozi duōshao qián yí gè?'),T('这边的苹果真便宜。','Zhèbiān de píngguǒ zhēn piányi.'),T('这些是男孩子穿的衣服。','Zhèxiē shì nán háizi chuān de yīfu.')],
  r2:[T('十块钱。','Shí kuài qián.'),T('对不起，没有。','Duìbuqǐ, méiyǒu.'),T('在那边。','Zài nàbiān.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('女孩子的衣服在哪儿？','Nǚ háizi de yīfu zài nǎr?'),T('杯子多少钱一个？','Bēizi duōshao qián yí gè?'),T('请问这儿有牛奶吗？','Qǐngwèn zhèr yǒu niúnǎi ma?')],
  r3:[T('穿','chuān'),T('块','kuài'),T('名字','míngzi')],
  r3q:[T('那些苹果两（　　）钱一斤，很便宜。','Nàxiē píngguǒ liǎng … qián yì jīn, hěn piányi.'),T('男：这件衣服怎么样？　女：很好看，10岁的男孩子能（　　）。','Zhè jiàn yīfu zěnmeyàng? Hěn hǎokàn, shí suì de nán háizi néng …')],
  r4:[{...T('我没有手机，今天想去商店买一个。★说话人想买什么？','Wǒ méiyǒu shǒujī, jīntiān xiǎng qù shāngdiàn mǎi yí gè.'),opts:[T('杯子','bēizi'),T('手机','shǒujī'),T('水果','shuǐguǒ')]},
      {...T('这件衣服很好看，你也能穿，买一件吧。★那件衣服：','Zhè jiàn yīfu hěn hǎokàn, nǐ yě néng chuān, mǎi yí jiàn ba.'),opts:[T('好看','hǎokàn'),T('便宜','piányi'),T('很贵','hěn guì')]}]
});

BABS[11] = MK(11,{ r2ex:'D',
  l2:[[T('不吃午饭','bù chī wǔfàn'),T('在外边玩','zài wàibian wán'),T('水果便宜','shuǐguǒ piányi')],[T('能到','néng dào'),T('想去呢','xiǎng qù ne'),T('没到呢','méi dào ne')]],
  l4:[[T('超市','chāoshì'),T('外边','wàibian'),T('房间里','fángjiān lǐ')],[T('学校后边','xuéxiào hòubian'),T('超市前边','chāoshì qiánbian'),T('超市后边','chāoshì hòubian')]],
  r1:[T('妈妈正在做饭呢。','Māma zhèngzài zuò fàn ne.'),T('你今天不想去学校吗？','Nǐ jīntiān bù xiǎng qù xuéxiào ma?'),T('我和朋友们在外边玩呢。','Wǒ hé péngyoumen zài wàibian wán ne.')],
  r2:[T('不，我坐出租车。','Bù, wǒ zuò chūzūchē.'),T('非常忙。','Fēicháng máng.'),T('没有，我在开车呢。','Méiyǒu, wǒ zài kāichē ne.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('你开车去吗？','Nǐ kāichē qù ma?'),T('你们学习忙不忙？','Nǐmen xuéxí máng bu máng?'),T('你在吃午饭吗？','Nǐ zài chī wǔfàn ma?')],
  r3:[T('找','zhǎo'),T('睡觉','shuìjiào'),T('名字','míngzi')],
  r3q:[T('弟弟没起床，还在（　　）呢。','Dìdi méi qǐchuáng, hái zài … ne.'),T('男：喂，你到没到饭店呢？　女：没到呢，我正在（　　）饭店在哪里呢。','Wèi, nǐ dào méi dào fàndiàn ne? Méi dào ne, wǒ zhèngzài … fàndiàn zài nǎlǐ ne.')],
  r4:[{...T('我姐姐今年20岁，正在读大学呢，她学医。★说话人的姐姐是：','Wǒ jiějie jīnnián èrshí suì, zhèngzài dú dàxué ne, tā xué yī.'),opts:[T('老师','lǎoshī'),T('医生','yīshēng'),T('大学生','dàxuéshēng')]},
      {...T('我明天有事，要去学校找老师，不知道老师在不在。★说话人明天要去学校见：','Wǒ míngtiān yǒu shì, yào qù xuéxiào zhǎo lǎoshī, bù zhīdào lǎoshī zài bu zài.'),opts:[T('朋友','péngyou'),T('学生','xuésheng'),T('老师','lǎoshī')]}]
});

BABS[12] = MK(12,{ r2ex:'D',
  l2:[[T('在吃药','zài chī yào'),T('有点儿','yǒudiǎnr'),T('不太好','bú tài hǎo')],[T('下雪了','xià xuě le'),T('太热了','tài rè le'),T('不喝水','bù hē shuǐ')]],
  l4:[[T('看医生','kàn yīshēng'),T('看朋友','kàn péngyou'),T('看病人','kàn bìngrén')],[T('工作','gōngzuò'),T('休息','xiūxi'),T('读书','dúshū')]],
  r1:[T('我女儿生病了。','Wǒ nǚ’ér shēngbìng le.'),T('今天天不太好，下雪了。','Jīntiān tiān bú tài hǎo, xià xuě le.'),T('12:00了，你们怎么还在看电视？','Shí’èr diǎn le, nǐmen zěnme hái zài kàn diànshì?')],
  r2:[T('热水。','Rè shuǐ.'),T('我病了。','Wǒ bìng le.'),T('对。','Duì.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('你怎么了？','Nǐ zěnme le?'),T('你想喝点儿什么？','Nǐ xiǎng hē diǎnr shénme?'),T('你开车了？','Nǐ kāichē le?')],
  r3:[T('冷','lěng'),T('生病','shēngbìng'),T('名字','míngzi')],
  r3q:[T('他（　　）了，没来上班。','Tā … le, méi lái shàngbān.'),T('男：外边雨大吗？　女：很大，我觉得有点儿（　　）。','Wàibian yǔ dà ma? Hěn dà, wǒ juéde yǒudiǎnr …')],
  r4:[{...T('昨天的天气很好，我和朋友们去外边玩了。★说话人觉得昨天：','Zuótiān de tiānqì hěn hǎo, wǒ hé péngyoumen qù wàibian wán le.'),opts:[T('天气好','tiānqì hǎo'),T('雨不大','yǔ bú dà'),T('有点儿冷','yǒudiǎnr lěng')]},
      {...T('老张去看病，医生说他要吃三天药。★医生说老张：','Lǎo Zhāng qù kànbìng, yīshēng shuō tā yào chī sān tiān yào.'),opts:[T('要吃药','yào chī yào'),T('要多睡觉','yào duō shuìjiào'),T('要多喝水','yào duō hē shuǐ')]}]
});

BABS[13] = MK(13,{ r2ex:'D',
  l2:[[T('给你','gěi nǐ'),T('吃早饭','chī zǎofàn'),T('要一杯茶','yào yì bēi chá')],[T('学习','xuéxí'),T('不对','bú duì'),T('没问题','méi wèntí')]],
  l4:[[T('问问题','wèn wèntí'),T('找人玩','zhǎo rén wán'),T('看医生','kàn yīshēng')],[T('饭店','fàndiàn'),T('学校','xuéxiào'),T('朋友家','péngyou jiā')]],
  r1:[T('她太小了，这个苹果给她一半吧。','Tā tài xiǎo le, zhège píngguǒ gěi tā yíbàn ba.'),T('请给我一杯牛奶，谢谢。','Qǐng gěi wǒ yì bēi niúnǎi, xièxie.'),T('我打电话问一下吧。','Wǒ dǎ diànhuà wèn yíxià ba.')],
  r2:[T('不客气。','Bú kèqi.'),T('一个面包。','Yí gè miànbāo.'),T('不知道。','Bù zhīdào.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('那里卖不卖手机？','Nàlǐ mài bu mài shǒujī?'),T('我会写了，谢谢老师。','Wǒ huì xiě le, xièxie lǎoshī.'),T('你要什么？','Nǐ yào shénme?')],
  r3:[T('给','gěi'),T('一下','yíxià'),T('名字','míngzi')],
  r3q:[T('你看（　　），你要什么？','Nǐ kàn …, nǐ yào shénme?'),T('男：请坐，您要什么？　女：请（　　）我一杯茶。','Qǐng zuò, nín yào shénme? Qǐng … wǒ yì bēi chá.')],
  r4:[{...T('明天星期天，我们可以去饭店吃饺子吗？★明天是：','Míngtiān Xīngqītiān, wǒmen kěyǐ qù fàndiàn chī jiǎozi ma?'),opts:[T('星期五','Xīngqīwǔ'),T('星期六','Xīngqīliù'),T('星期日','Xīngqīrì')]},
      {...T('爸爸今天在家里工作，我们不要去他的房间。★爸爸今天：','Bàba jīntiān zài jiā lǐ gōngzuò, wǒmen búyào qù tā de fángjiān.'),opts:[T('在家里工作','zài jiā lǐ gōngzuò'),T('做了面条儿','zuòle miàntiáor'),T('不能去公司','bù néng qù gōngsī')]}]
});

BABS[14] = MK(14,{ r2ex:'D',
  l2:[[T('都写','dōu xiě'),T('听见了','tīngjiàn le'),T('都会写了','dōu huì xiě le')],[T('学习','xuéxí'),T('超市','chāoshì'),T('买面包','mǎi miànbāo')]],
  l4:[[T('下课后','xiàkè hòu'),T('上课前','shàngkè qián'),T('回家后','huí jiā hòu')],[T('小狗','xiǎo gǒu'),T('小猫','xiǎo māo'),T('小狗和小猫','xiǎo gǒu hé xiǎo māo')]],
  r1:[T('王先生今天生病了，没来上班。','Wáng xiānsheng jīntiān shēngbìng le, méi lái shàngbān.'),T('火车上，有的人在读书，有的人在睡觉。','Huǒchē shang, yǒude rén zài dúshū, yǒude rén zài shuìjiào.'),T('喂，他们都来我家了，你也来吧。','Wèi, tāmen dōu lái wǒ jiā le, nǐ yě lái ba.')],
  r2:[T('是的，我睡了一觉。','Shì de, wǒ shuìle yí jiào.'),T('我们都去了。','Wǒmen dōu qù le.'),T('写字、看书、吃饭。','Xiě zì, kàn shū, chī fàn.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('谁去学校了？','Shéi qù xuéxiào le?'),T('你下午没去医院吗？','Nǐ xiàwǔ méi qù yīyuàn ma?'),T('你今天上午都忙了些什么？','Nǐ jīntiān shàngwǔ dōu mángle xiē shénme?')],
  r3:[T('都','dōu'),T('茶','chá'),T('名字','míngzi')],
  r3q:[T('我喝了一杯（　　）。','Wǒ hēle yì bēi …'),T('男：上课了，请大家不要说话。　女：好的，老师，我们（　　）不说话了。','Shàngkè le, qǐng dàjiā búyào shuōhuà. Hǎo de, lǎoshī, wǒmen … bù shuōhuà le.')],
  r4:[{...T('服务员，我想问一下，我们的房间号是多少？★说话人想知道什么？','Fúwùyuán, wǒ xiǎng wèn yíxià, wǒmen de fángjiānhào shì duōshao?'),opts:[T('时间','shíjiān'),T('电话号','diànhuàhào'),T('房间号','fángjiānhào')]},
      {...T('儿子和女儿都上小学了，他们会写很多字了。★说话人的两个孩子是：','Érzi hé nǚ’ér dōu shàng xiǎoxué le, tāmen huì xiě hěn duō zì le.'),opts:[T('小学生','xiǎoxuéshēng'),T('中学生','zhōngxuéshēng'),T('大学生','dàxuéshēng')]}]
});

BABS[15] = MK(15,{ r2ex:'D',
  l2:[[T('太早了','tài zǎo le'),T('没睡觉','méi shuìjiào'),T('不想去','bù xiǎng qù')],[T('很多','hěn duō'),T('也不贵','yě bú guì'),T('也很好看','yě hěn hǎokàn')]],
  l4:[[T('西安','Xī’ān'),T('北京','Běijīng'),T('上海','Shànghǎi')],[T('坐飞机','zuò fēijī'),T('坐火车','zuò huǒchē'),T('坐出租车','zuò chūzūchē')]],
  r1:[T('我家有五口人，我们现在住在北京。','Wǒ jiā yǒu wǔ kǒu rén, wǒmen xiànzài zhù zài Běijīng.'),T('这里有好吃的，还有好玩儿的。','Zhèlǐ yǒu hǎochī de, hái yǒu hǎowánr de.'),T('现在我会说一点儿汉语，也会写一些汉字了。','Xiànzài wǒ huì shuō yìdiǎnr Hànyǔ, yě huì xiě yìxiē Hànzì le.')],
  r2:[T('我女儿。','Wǒ nǚ’ér.'),T('十个。','Shí gè.'),T('苹果。','Píngguǒ.'),T('好的，谢谢！','Hǎo de, xièxie!')],
  r2q:[T('你会写几个汉字？','Nǐ huì xiě jǐ gè Hànzì?'),T('谁上中学了？','Shéi shàng zhōngxué le?'),T('你爱吃什么？','Nǐ ài chī shénme?')],
  r3:[T('电视','diànshì'),T('北京','Běijīng'),T('名字','míngzi')],
  r3q:[T('今年我们都想去（　　）。','Jīnnián wǒmen dōu xiǎng qù …'),T('男：我爱看电影，也爱唱歌。你呢？　女：我喜欢看（　　）。','Wǒ ài kàn diànyǐng, yě ài chàng gē. Nǐ ne? Wǒ xǐhuan kàn …')],
  r4:[{...T('明天星期天，儿子想去看一个电影。★儿子明天想：','Míngtiān Xīngqītiān, érzi xiǎng qù kàn yí gè diànyǐng.'),opts:[T('买电脑','mǎi diànnǎo'),T('打电话','dǎ diànhuà'),T('看电影','kàn diànyǐng')]},
      {...T('下小雨了，小狗非常高兴，它喜欢小雨。★小狗喜欢：','Xià xiǎoyǔ le, xiǎo gǒu fēicháng gāoxìng, tā xǐhuan xiǎoyǔ.'),opts:[T('下小雨','xià xiǎoyǔ'),T('下大雨','xià dàyǔ'),T('下小雪','xià xiǎoxuě')]}]
});

// ===== MOCK TEST HSK 1 (bab ke-16, 40 soal) =====
const SECS_MOCK = [
 {id:'L1',from:1,to:5,kind:'pic',zh:'听力 第一部分 · 第1—5题',en:'Listening Part 1 · Questions 1–5: Listen and choose the correct picture.',
  how:'Dengarkan tiap frasa/kalimat, lalu pilih gambar yang sesuai (A, B, atau C).',ex:SECS[0].ex},
 {id:'L2',from:6,to:10,kind:'txt',zh:'听力 第二部分 · 第6—10题',en:'Listening Part 2 · Questions 6–10: Listen and choose the correct answer.',
  how:'Dengarkan pertanyaan atau kalimat, lalu pilih jawaban yang tepat.',
  ex:{zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',en:'How is the weather today?',a:'C',opts:[{zh:'在学习',py:'zài xuéxí'},{zh:'很好听',py:'hěn hǎotīng'},{zh:'非常热',py:'fēicháng rè'}]}},
 {id:'L3',from:11,to:15,kind:'shared',zh:'听力 第三部分 · 第11—15题',en:'Listening Part 3 · Questions 11–15: Listen to each dialogue and choose the correct picture.',
  how:'Dengarkan dialog, lalu pilih gambar yang paling cocok dari gambar A–F di atas. Gambar bertanda “Contoh” tidak dipakai sebagai jawaban.',
  ex:{zh:'女：你好！　男：你好！很高兴认识你。',py:'Nǐ hǎo! Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',en:'How do you do? Nice to meet you.'}},
 {id:'L4',from:16,to:20,kind:'txt',zh:'听力 第四部分 · 第16—20题',en:'Listening Part 4 · Questions 16–20: Listen and choose the correct answer.',
  how:'Dengarkan kalimat dan pertanyaannya, lalu pilih jawaban yang benar.',ex:SECS[3].ex},
 {id:'R1',from:21,to:25,kind:'shared',zh:'阅读 第一部分 · 第21—25题',en:'Reading Part 1 · Questions 21–25: Choose the correct picture for each sentence.',
  how:'Baca kalimat, lalu pilih gambar yang paling cocok dari gambar A–F. Gambar bertanda “Contoh” tidak dipakai sebagai jawaban.',
  ex:{zh:'我很喜欢这本书。',py:'Wǒ hěn xǐhuan zhè běn shū.',en:'I like this book very much.'}},
 {id:'R2',from:26,to:30,kind:'shared',zh:'阅读 第二部分 · 第26—30题',en:'Reading Part 2 · Questions 26–30: Match the sentences.',
  how:'Baca pertanyaan, lalu cocokkan dengan jawaban yang tepat dari daftar A–F di atas. Setiap jawaban dipakai sekali.',
  ex:{zh:'你喝水吗？',py:'Nǐ hē shuǐ ma?',en:'Would you like some water?'}},
 {id:'R3',from:31,to:35,kind:'shared',zh:'阅读 第三部分 · 第31—35题',en:'Reading Part 3 · Questions 31–35: Choose the correct word to fill in each blank.',
  how:'Pilih kata yang tepat dari daftar A–F di atas untuk mengisi bagian kosong ( ). Kata bertanda “Contoh” tidak dipakai.',
  ex:{zh:'你（　）什么名字？',py:'Nǐ … shénme míngzi?',en:'What is your name?'}},
 {id:'R4',from:36,to:40,kind:'txt',zh:'阅读 第四部分 · 第36—40题',en:'Reading Part 4 · Questions 36–40: Choose the correct answer.',
  how:'Baca teks pendek, lalu jawab pertanyaan ★ dengan memilih pilihan yang benar.',ex:SECS[7].ex}
];
BABS[16] = { audio:'audio/mocktest.mp3', secs:SECS_MOCK,
  shared:{
    L3:{ex:'C',items:PICS('bm','p11',6)},
    R1:{ex:'E',items:PICS('bm','p21',6)},
    R2:{ex:'F',items:[T('商店。','Shāngdiàn.'),T('我学生。','Wǒ xuésheng.'),T('在桌子上。','Zài zhuōzi shang.'),T('还没有。','Hái méiyǒu.'),T('下雪了。','Xià xuě le.'),T('好的，谢谢！','Hǎo de, xièxie!')]},
    R3:{ex:'D',items:[T('认识','rènshi'),T('住','zhù'),T('晚饭','wǎnfàn'),T('叫','jiào'),T('汉字','Hànzì'),T('块','kuài')]} },
  qs:[
    ...[1,2,3,4,5].map(i=>({n:i,opts:PICS('bm','q'+i,3)})),
    {n:6,opts:[T('哪里','nǎlǐ'),T('打电话','dǎ diànhuà'),T('做饭好吃','zuò fàn hǎochī')]},
    {n:7,opts:[T('白天','báitiān'),T('生病了','shēngbìng le'),T('水果店','shuǐguǒdiàn')]},
    {n:8,opts:[T('八元','bā yuán'),T('不是','bú shì'),T('便宜','piányi')]},
    {n:9,opts:[T('去年','qùnián'),T('很漂亮','hěn piàoliang'),T('我弟弟','wǒ dìdi')]},
    {n:10,opts:[T('没有','méiyǒu'),T('再见','zàijiàn'),T('不要','búyào')]},
    {n:11},{n:12},{n:13},{n:14},{n:15},
    {n:16,opts:[T('60岁','suì'),T('60多岁','duō suì'),T('70岁','suì')]},
    {n:17,opts:[T('电脑','diànnǎo'),T('杯子','bēizi'),T('手机','shǒujī')]},
    {n:18,opts:[T('女儿','nǚ’ér'),T('妹妹','mèimei'),T('高女士','Gāo nǚshì')]},
    {n:19,opts:[T('包子','bāozi'),T('面包','miànbāo'),T('面条儿','miàntiáor')]},
    {n:20,opts:[T('早上','zǎoshang'),T('中午','zhōngwǔ'),T('星期天','Xīngqītiān')]},
    {n:21,...T('王先生是医生。','Wáng xiānsheng shì yīshēng.')},{n:22,...T('姐姐上午去超市买了菜。','Jiějie shàngwǔ qù chāoshì mǎile cài.')},
    {n:23,...T('今天的早饭是牛奶和鸡蛋。','Jīntiān de zǎofàn shì niúnǎi hé jīdàn.')},{n:24,...T('我家有四口人，爸爸、妈妈、弟弟和我。','Wǒ jiā yǒu sì kǒu rén, bàba, māma, dìdi hé wǒ.')},
    {n:25,...T('她和好朋友都爱唱歌。','Tā hé hǎo péngyou dōu ài chàng gē.')},
    {n:26,...T('这是我的书，你的呢？','Zhè shì wǒ de shū, nǐ de ne?')},{n:27,...T('你去哪儿买苹果？','Nǐ qù nǎr mǎi píngguǒ?')},
    {n:28,...T('昨天天气怎么样？','Zuótiān tiānqì zěnmeyàng?')},{n:29,...T('你和谁打电话呢？','Nǐ hé shéi dǎ diànhuà ne?')},{n:30,...T('你下班了吗？','Nǐ xiàbān le ma?')},
    {n:31,...T('大家都没吃（　　）呢。','Dàjiā dōu méi chī … ne.')},{n:32,...T('在今天的中文课上，我学了很多（　　）。','Zài jīntiān de Zhōngwén kè shang, wǒ xuéle hěn duō …')},
    {n:33,...T('对不起，我不（　　）这个人。','Duìbuqǐ, wǒ bú … zhège rén.')},{n:34,...T('我和家人（　　）在北京。','Wǒ hé jiārén … zài Běijīng.')},
    {n:35,...T('男：这些东西可以卖多少钱？　女：80（　　）。','Zhèxiē dōngxi kěyǐ mài duōshao qián? 80 …')},
    {n:36,...T('下雨了，我们坐出租车回家吧。★说话人想怎么回家？','Xià yǔ le, wǒmen zuò chūzūchē huí jiā ba.'),opts:[T('开车','kāichē'),T('坐飞机','zuò fēijī'),T('坐出租车','zuò chūzūchē')]},
    {n:37,...T('我儿子今年16岁了，正在上中学。★说话人的儿子是：','Wǒ érzi jīnnián shíliù suì le, zhèngzài shàng zhōngxué.'),opts:[T('小学生','xiǎoxuéshēng'),T('中学生','zhōngxuéshēng'),T('大学生','dàxuéshēng')]},
    {n:38,...T('小猫和小狗都在房间外睡觉呢。★小狗在：','Xiǎo māo hé xiǎo gǒu dōu zài fángjiān wài shuìjiào ne.'),opts:[T('桌子下','zhuōzi xià'),T('房间里','fángjiān lǐ'),T('房间外','fángjiān wài')]},
    {n:39,...T('我同学在这个学校工作很多年了，你有问题可以问他。★说话人的同学在哪儿上班？','Wǒ tóngxué zài zhège xuéxiào gōngzuò hěn duō nián le, nǐ yǒu wèntí kěyǐ wèn tā.'),opts:[T('饭店','fàndiàn'),T('医院','yīyuàn'),T('学校','xuéxiào')]},
    {n:40,...T('这个小朋友写字真好看。★那个小朋友：','Zhège xiǎopéngyou xiě zì zhēn hǎokàn.'),opts:[T('名字好听','míngzi hǎotīng'),T('写字好看','xiě zì hǎokàn'),T('正在读书','zhèngzài dúshū')]}
  ] };
