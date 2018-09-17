---
title: Label
order: 1
date: 2018-09-07 12:00:00 +0000
content_tr: '2017 yılında İstanbul’da kurulan Helikon, ismini 1952’de Ankara’da kurulan, kurucuları arasında besteciler Bülent Arel ve İlhan Usmanbaş’ın bulunduğu Helikon Derneği’nden alır. Dernek, 1955 yılında yaşanan 6-7 Eylül Olayları sonrasında adının Yunanca kaynaklı olmasından ötürü sıkı yönetim tarafından kapatılmıştır.

Helikon, mitolojide ilham perileri için kutsal sayılan Aganippe ve Hippocrene kaynaklarının bulunduğu dağın adıdır. Şiirsel ilhamla ilişkilendirilir.'
content_en: '2017 yılında İstanbul’da kurulan Helikon, ismini 1952’de Ankara’da kurulan, kurucuları arasında besteciler Bülent Arel ve İlhan Usmanbaş’ın bulunduğu Helikon Derneği’nden alır. Dernek, 1955 yılında yaşanan 6-7 Eylül Olayları sonrasında adının Yunanca kaynaklı olmasından ötürü sıkı yönetim tarafından kapatılmıştır.

Helikon, mitolojide ilham perileri için kutsal sayılan Aganippe ve Hippocrene kaynaklarının bulunduğu dağın adıdır. Şiirsel ilhamla ilişkilendirilir.'
image: 'uploads/helikon-poster.jpg'

---

<div class="row" style="flex: 1;">

<div class="col-xs-12 col-sm-8">
  <div class="section__block">
  {% if site.lang == "en" %}
    {{ page.content_en | markdownify }}
  {% else %}
    {{ page.content_tr | markdownify }}
  {% endif %}
	</div>
</div>

<div class="col-xs-12 col-sm-4">
  {% if page.image.size > 0 %}
    <figure><img src="{{ page.image | replace: '/uploads', 'uploads' }}" alt="" /></figure>
  {% endif %}
</div>

</div>
