# `psych_social_prob_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_social_prob_items_code | char(4) | NO | PRI |  |  |  |
| psych_social_prob_items_name | text | YES |  | NULL |  |  |
| psych_social_prob_group_code | char(2) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_social_prob_group_code | psych_social_prob_group_code | no | 1 |
| PRIMARY | psych_social_prob_items_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_social_prob_items_code": "0001",
    "psych_social_prob_items_name": "ไม่มีปัญหาทางสังคม (No Social Problem) หรือยังไม่พบปัญหาในวันที่เข้าเยี่ยมผู้ใช้บริการ",
    "psych_social_prob_group_code": "00",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0101",
    "psych_social_prob_items_name": "ปัญหาการสื่อสาร สื่อสารไม่เหมาะสม ไม่สามารถสื่อสารความต้องการของแต่ละฝ่ายได้ สื่อสารไม่ชัดเจน ทะเลาะเบาะแว้งกันเป็นประจา พูดประชดประชัน ตาหนิติเตียน การด่าว่า ใช้วาจารุนแรง หยาบคาย การออกคาสั่ง บังคับขู่เข็ญ เจ้ากี้เจ้าการ เฉยเมย ไม่พูด ต่างคนต่างอยู่ ไม่สนใจกันและกัน",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0102",
    "psych_social_prob_items_name": "การใช้ความรุนแรง เช่น ทุบตี มีการกระทาทารุณระหว่างกัน",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0103",
    "psych_social_prob_items_name": "ความคิด ความเชื่อ ทัศนคติ จารีต ประเพณี วัฒนธรรมแตกต่างกัน ไม่สามารถปรับตัวเข้าหากัน ไม่ยอมรับหรือขาดความภูมิใจในคู่สมรส",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0104",
    "psych_social_prob_items_name": "ฝ่ายใดฝ่ายหนึ่งไม่รับผิดชอบครอบครัว ผูกพันกับครอบครัวเดิมหรือญาติเข้ามาวุ่นวายมากเกินไป",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0105",
    "psych_social_prob_items_name": "สามีหรือภรรยามีความสัมพันธ์กับชายหรือหญิงอื่นที่ไม่ใช่สามีหรือภรรยาตนเอง",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0106",
    "psych_social_prob_items_name": "ปัญหาเพศสัมพันธ์ เช่น ความต้องการทางเพศลดลง ปัญหาการร่วมเพศ ความเย็นชา หมดสมรรถภาพทางเพศ หรือมีพฤติกรรมเบี่ยงเบนทางเพศ เป็นต้น",
    "psych_social_prob_group_code": "01",
    "active": null
  },
  {
    "psych_social_prob_items_code": "0107",
    "psych_social_prob_items_name": "อื่น ๆ",
    "psych_social_prob_group_code": "01",
    "active": null
  }
]
```
