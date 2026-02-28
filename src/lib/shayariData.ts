const shayariList = [
  `{name1} ka naam aaye to dil pighal jaaye,\n{name2} ka zikr ho to waqt sambhal jaaye.\nYeh ishq awaaz se pare hai,\nBas khamoshi mein dhal jaaye.`,
  `{name1} aur {name2} ka milna ajeeb nahi,\nJaise likha tha unka naseeb kahin.\nDo dil the jo tanha safar mein the,\nAur manzil mil gayi ek hi zameen.`,
  `{name1} ki aankhon mein {name2} ka noor hai,\nJaise raat mein chaand ka gurur hai.\nYeh pyaar halka sa ehsaas nahi,\nYeh dil ka sabse gehra surur hai.`,
  `{name1} ka haath thaam kar {name2} ne jaana,\nKe mohabbat sirf kehna nahi nibhaana.\nYeh rishta waqt ka mohtaaj nahi,\nHar haal mein saath reh jaana.`,
  `{name1} aur {name2} ka rishta yun hai,\nJaise baarish aur mitti ki khushboo.\nDoor reh kar bhi paas mehsoos ho,\nJaise dil mein basi koi aarzoo.`,
  `{name1} ke bina {name2} adhure nahi,\nMagar saath ho toh mukammal lage.\nYeh pyaar kamzor nahi karta,\nHar mushkil mein aur mazboot lage.`,
  `{name1} jab {name2} ko dekhen,\nToh lafz kahin kho jaate hain.\nYeh ishq woh jazba hai,\nJo aankhon se bayan ho jaate hain.`,
  `{name1} aur {name2} ka saath sukoon hai,\nJaise sardi mein halki dhoop.\nNa shor, na dikhawa koi,\nBas saaf sa dil aur rooh.`,
  `{name1} ke dil mein {name2} ka ghar hai,\nNa shehar, na deewaron ki baat.\nYeh rishta bas ek ehsaas hai,\nJo rehta hai din aur raat.`,
  `{name1} aur {name2}, do naam ek kahani,\nHar pal mein basi rawani.\nYeh pyaar waqt se pare hai,\nJaise purani koi nishani.`,
  `{name1} ka zikr ho aur {name2} na aaye,\nAisa mumkin hi nahi.\nYeh mohabbat itni gehri hai,\nKe judaa reh kar bhi juda nahi.`,
  `{name1} ki muskurahat mein {name2} ka sukoon,\nJaise dil ko mil gaya junoon.\nYeh ishq halka sa rang nahi,\nYeh poori zindagi ka khoobsurat khoon.`,
  `{name1} aur {name2} ka milna ek dua tha,\nJo chupke se qabool ho gaya.\nDo dil the jo dhadak rahe the,\nAur safar ek ho gaya.`,
  `{name1} ke saath {name2} ko yakeen mila,\nJaise andhere mein roshni ka din mila.\nYeh rishta sirf aaj ka nahi,\nHar kal ka bhi sukoon mila.`,
  `{name1} aur {name2} ka ishq misaal hai,\nNa shor, na sawaal hai.\nBas saath rehne ka wada,\nAur be-inteha khayal hai.`,
  `{name1} jab {name2} ka naam lete hain,\nDil halka sa dhadak jaata hai.\nYeh pyaar sirf lafzon mein nahi,\nHar saans mein bas jaata hai.`,
  `{name1} aur {name2} ka rishta gehra hai,\nJaise samundar ka paani.\nUpar se shaant aur halka,\nAndar poori kahani.`,
  `{name1} ke bina {name2} ka safar adhoora nahi,\nMagar saath ho toh haseen ho jaaye.\nYeh mohabbat sirf milna nahi,\nHar pal ek dusre ko chahte jaaye.`,
  `{name1} aur {name2} ka naam saath likho,\nToh harf bhi narm ho jaate hain.\nYeh ishq waqt se kam nahi hota,\nSaath saalon ke saath badh jaate hain.`,
  `{name1} ke liye {name2} ek dua hai,\nHar dua mein unka zikr hai.\nYeh pyaar sirf kismat nahi,\nHar roz chuna gaya fikr hai.`,
];

export function getRandomShayari(name1: string, name2: string): string {
  const index = Math.floor(Math.random() * shayariList.length);
  return shayariList[index]
    .replace(/\{name1\}/g, name1)
    .replace(/\{name2\}/g, name2);
}
