// Data soal per bab. Kunci jawaban ada di kunci.js (jangan ditaruh di sini).
// Untuk menambah bab: salin blok Bab 4, ganti isi soal & nama file gambar di folder img/bN/.
const SEC = {
  1:'第1—3题：听短语，选择正确图片。每题听两次。', 4:'第4—5题：听问题，选择正确回答。每题听两次。',
  6:'第6—8题：听对话，选择最匹配的图片。每题听两次。', 9:'第9—10题：听句子和问题，选择正确答案。每题听两次。',
  11:'第11—13题：选择与句子最匹配的图片。', 14:'第14—16题：匹配句子。', 17:'第17—18题：选词填空。', 19:'第19—20题：选择正确答案。'
};
// P(nomor, [opsi...], {zh, py}) ; opsi = teks, atau {img:'path'}, atau {zh, py}
const P = (n, opts, extra={}) => ({ n, opts: opts.map((o,i)=>({k:'ABCD'[i], ...(typeof o==='string'?{zh:o}:o)})), ...extra });
const PICS = (dir, pre, k) => 'ABCD'.slice(0,k).split('').map(c => ({img:`img/${dir}/${pre}${c}.jpg`}));
const BABS = {
  4: { audio:'audio/bab_4.mp3', qs:[
    P(1,PICS('b4','q1',3)), P(2,PICS('b4','q2',3)), P(3,PICS('b4','q3',3)),
    P(4,[{zh:'十人',py:'shí rén'},{zh:'20个',py:'gè'},{zh:'三口人',py:'sān kǒu rén'}]),
    P(5,[{zh:'大',py:'dà'},{zh:'12岁',py:'suì'},{zh:'两千',py:'liǎngqiān'}]),
    P(6,PICS('b4','p6',4)), P(7,PICS('b4','p6',4)), P(8,PICS('b4','p6',4)),
    P(9,[{zh:'中国人',py:'Zhōngguó rén'},{zh:'泰国人',py:'Tàiguó rén'},{zh:'法国人',py:'Fǎguó rén'}]),
    P(10,[{zh:'安妮',py:'Ānní'},{zh:'王一飞',py:'Wáng Yīfēi'},{zh:'白家月',py:'Bái Jiāyuè'}]),
    P(11,PICS('b4','p11',4),{zh:'老师，您好！',py:'Lǎoshī, nín hǎo!'}),
    P(12,PICS('b4','p11',4),{zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.'}),
    P(13,PICS('b4','p11',4),{zh:'我哥哥今年20岁。',py:'Wǒ gēge jīnnián èrshí suì.'}),
    ...[['她是谁？','Tā shì shéi?'],['你是法国人吗？','Nǐ shì Fǎguó rén ma?'],['您儿子多大？','Nín érzi duō dà?']].map(([zh,py],i) =>
      P(14+i,[{zh:'好的，谢谢！',py:'Hǎo de, xièxie!'},{zh:'他今年5岁。',py:'Tā jīnnián wǔ suì.'},{zh:'我女朋友。',py:'Wǒ nǚpéngyou.'},{zh:'是的。',py:'Shì de.'}],{zh,py})),
    P(17,[{zh:'想',py:'xiǎng'},{zh:'忙',py:'máng'},{zh:'名字',py:'míngzi'}],{zh:'她工作很（　　）。',py:'Tā gōngzuò hěn'}),
    P(18,[{zh:'想',py:'xiǎng'},{zh:'忙',py:'máng'},{zh:'名字',py:'míngzi'}],{zh:'男：你们好吗？　女：很好，我们很（　　）你。',py:'Nǐmen hǎo ma? Hěn hǎo, wǒmen hěn … nǐ.'}),
    P(19,[{zh:'姐姐',py:'jiějie'},{zh:'三口人',py:'sān kǒu rén'},{zh:'四口人',py:'sì kǒu rén'}],{zh:'我家有三口人，爸爸、妈妈和我。★说话人家里有：',py:'Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ.'}),
    P(20,[{zh:'法国人',py:'Fǎguó rén'},{zh:'中国人',py:'Zhōngguó rén'},{zh:'泰国人',py:'Tàiguó rén'}],{zh:'她是法国人，我不是。★“她”是：',py:'Tā shì Fǎguó rén, wǒ bú shì.'})
  ]}
};
