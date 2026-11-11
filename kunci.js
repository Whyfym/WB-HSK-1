// Kunci jawaban resmi (dari Kunci_jawaban_Workbook_HSK_1.pdf), urut soal 1-20
const KUNCI = {
  4:'BCB BB DCB AC CDB CDB BA BA'.replace(/ /g,''),
  5:'CAB AB CBD BB DCB CBD AB CB',
  6:'BBC AC CBD AC CBD CAB BA AB',
  7:'CAC BC CDB AC DCB CAB BA BA',
  8:'CBA BA DCB CB BDC CBA BA AA',
  9:'BCA BC DCB AB DCB CAB BA AB',
  10:'BCB BB CDB AB CBD CAB BA BA',
  11:'CBC BC DCB BC CBD ABC BA CC',
  12:'ACB CB DCB AB DBC BAC BA AA',
  13:'CAC CC CDB BA BDC CAB BA CA',
  14:'CCB CB DBC AA CBD BAC BA CA',
  15:'ABC AC BDC AB DBC BAC BA CA'
};
for (const b in KUNCI) KUNCI[b] = KUNCI[b].replace(/ /g,'').split('');
