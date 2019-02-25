---
title: Label
order: 1
date: 2018-09-07 12:00:00 +0000
content_tr: |-
  2017 yılında İstanbul’da kurulan Helikon, ismini 1952’de Ankara’da kurulan, kurucuları arasında besteciler Bülent Arel ve İlhan Usmanbaş’ın bulunduğu Helikon Derneği’nden alır. Dernek, 1955 yılında yaşanan 6-7 Eylül Olayları sonrasında sıkı yönetim tarafından kapatılmıştır.

  Helikon, mitolojide ilham perileri için kutsal sayılan Aganippe ve Hippocrene kaynaklarının bulunduğu dağın adıdır. Şiirsel ilhamla ilişkilendirilir.
content_en: |-
  Helikon was started in 2017 in İstanbul. Label is named after the Helikon Association, which was an arts association founded in Ankara in 1955 by a group of intellectuals including composers Bülent Arel and İlhan Usmanbaş. Helikon Association was closed down by the state after the Istanbul Pogrom of 6-7 September 1955.

  In mythology, Helikon is the name of the mountain where the two springs sacred to the muses, Aganippe and Hippocrene, were located. Helikon is considered a source of poetic inspiration.
image: uploads/helikon dribbble-06.jpg

---
<div class="row" style="flex: 1;">

<div class="col-xs-12 col-sm-7 col-lg-8">
  <div class="section__block">
  {% if site.lang == "en" %}
    {{ page.content_en | markdownify }}
  {% else %}
    {{ page.content_tr | markdownify }}
  {% endif %}
	</div>
</div>

<div class="col-xs-12 col-sm-5 col-lg-4">
  <div class="section__block section__image">
    {% if page.image.size > 0 %}
      <figure><img src="{{ site.url }}/{{ page.image }}" alt="" /></figure>
    {% endif %}
  </div>
</div>

</div>