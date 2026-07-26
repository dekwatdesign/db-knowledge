# `provis_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_labcode | varchar(7) | NO | PRI |  |  |  |
| name_eng | varchar(250) | YES |  | NULL |  |  |
| name_thai | varchar(250) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name_thai | name_thai | no | 1 |
| PRIMARY | provis_labcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_labcode": "0290201",
    "name_eng": "Chromosome analysis, breakage study, whole blood",
    "name_thai": "การวิเคราะห์โครโมโซมเพื่อศึกษาความแตกแยก  จากเลือด"
  },
  {
    "provis_labcode": "0290401",
    "name_eng": "Chromosome analysis, cultured with mitogenic stimulation, whole blood",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยงและการกระตุ้นการทำให้เกิด กระบวนการไมโทซิสในเซลล์  จากเลือด"
  },
  {
    "provis_labcode": "0290601",
    "name_eng": "Chromosome analysis, cultured without mitogenic stimulation, whole blood",
    "name_thai": "การวิเคราะห์โครโมโซมการเพาะเลี้ยงโดยไม่กระตุ้นการทำให้เกิดกระบวนการ ไมโทซิสในเซลล์  จากเลือด"
  },
  {
    "provis_labcode": "0290805",
    "name_eng": "Chromosome analysis, cultured, amniotic fluid",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยงเซลล์  จากน้ำคร่ำ"
  },
  {
    "provis_labcode": "0290827",
    "name_eng": "Chromosome analysis, cultured, bone marrow",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยง  จากไขกระดูก"
  },
  {
    "provis_labcode": "0290828",
    "name_eng": "Chromosome analysis, cultured, lymph nodes",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยงเซลล์  จากต่อมน้ำเหลือง"
  },
  {
    "provis_labcode": "0290829",
    "name_eng": "Chromosome analysis, cultured, products of conception",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยงเซลล์  จากผลิตภัณฑ์จากการปฏิสนธิ"
  },
  {
    "provis_labcode": "0290830",
    "name_eng": "Chromosome analysis, cultured, skin",
    "name_thai": "การวิเคราะห์โครโมโซมโดยการเพาะเลี้ยงเซลล์  จากผิวหนัง"
  }
]
```
