// Data soal. Tiap bab: { audio, qs:[...] }.
// q: { n, sec, zh, py, opts:[{k:'A',zh,py,en,img}], a:'B' }  (a = kunci jawaban; null = belum diisi)
// Soal bergambar: isi img:'img/b4/q1A.jpg' (taruh file gambar di folder img/).
const SEC = {
  1:'第1—3题：听短语，选择正确图片。每题听两次。', 4:'第4—5题：听问题，选择正确回答。每题听两次。',
  6:'第6—8题：听对话，选择最匹配的图片。每题听两次。', 9:'第9—10题：听句子和问题，选择正确答案。每题听两次。',
  11:'第11—13题：选择与句子最匹配的图片。', 14:'第14—16题：匹配句子。', 17:'第17—18题：选词填空。', 19:'第19—20题：选择正确答案。'
};
const P = (n, opts, a=null, extra={}) => ({ n, opts: opts.map((o,i)=>({k:'ABCD'[i], ...(typeof o==='string'?{zh:o}:o)})), a, ...extra });
const BABS = {
  4: { audio:'audio/bab_4.mp3', qs:[
    P(1,[{img:1},{img:1},{img:1}]), P(2,[{img:1},{img:1},{img:1}]), P(3,[{img:1},{img:1},{img:1}]),
    P(4,['十人','20个','三口人']), P(5,['大','12岁','两千']),
    P(6,[{img:1},{img:1},{img:1},{img:1}]), P(7,[{img:1},{img:1},{img:1},{img:1}]), P(8,[{img:1},{img:1},{img:1},{img:1}]),
    P(9,['中国人','泰国人','法国人']), P(10,['安妮','王一飞','白家月']),
    P(11,[{img:1},{img:1},{img:1},{img:1}],null,{zh:'老师，您好！',py:'Lǎoshī, nín hǎo!'}),
    P(12,[{img:1},{img:1},{img:1},{img:1}],null,{zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.'}),
    P(13,[{img:1},{img:1},{img:1},{img:1}],null,{zh:'我哥哥今年20岁。',py:'Wǒ gēge jīnnián èrshí suì.'}),
    P(14,['好的，谢谢！','他今年5岁。','我女朋友。','是的。'],'C',{zh:'她是谁？'}),
    P(15,['好的，谢谢！','他今年5岁。','我女朋友。','是的。'],'D',{zh:'你是法国人吗？'}),
    P(16,['好的，谢谢！','他今年5岁。','我女朋友。','是的。'],'B',{zh:'您儿子多大？'}),
    P(17,['想','忙','名字'],'B',{zh:'她工作很（　）。'}),
    P(18,['想','忙','名字'],null,{zh:'（soal 18 belum dibaca)'}),
    P(19,['三口人','四口人','六口人'],null),P(20,['菜','牛奶','饺子'],null)
  ]}
};
