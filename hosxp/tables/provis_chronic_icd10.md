# `provis_chronic_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10 | varchar(10) | NO | PRI |  |  |  |
| name_english | varchar(250) | YES |  | NULL |  |  |
| name_thai | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icd10 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd10": "A15",
    "name_english": "Respiratory tuberculosis, bacteriologically and histologically confirmed",
    "name_thai": "วัณโรคระบบหายใจ ยืนยันด้วยผลการตรวจหาเชื้อและการตรวจชิ้นเนื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A150",
    "name_english": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",
    "name_thai": "วัณโรคปอด ยืนยันด้วยผลการตรวจเสมหะโดยใช้กล้องจุลทรรศน์ อาจมีหรือไม่มีการเพาะเชื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A151",
    "name_english": "Tuberculosis of lung, confirmed by culture only",
    "name_thai": "วัณโรคปอด ยืนยันด้วยผลการเพาะเชื้อเท่านั้น",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A152",
    "name_english": "Tuberculosis of lung, confirmed histologically",
    "name_thai": "วัณโรคปอด ยืนยันด้วยผลการตรวจชิ้นเนื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A153",
    "name_english": "Tuberculosis of lung, confirmed by unspecified means",
    "name_thai": "วัณโรคปอด ยืนยันโดยไม่ระบุวิธี",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A154",
    "name_english": "Tuberculosis of intrathoracic lymph nodes, confirmed bacteriologically and histologically",
    "name_thai": "วัณโรคต่อมน้ำเหลืองในช่องอก ยืนยันด้วยผลการตรวจหาเชื้อและการตรวจชิ้นเนื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A155",
    "name_english": "Tuberculosis of larynx, trachea and bronchus, confirmed bacteriologically and histologically",
    "name_thai": "วัณโรคกล่องเสียง ท่อลม และหลอดลม ยืนยันด้วยผลการตรวจหาเชื้อและการตรวจชิ้นเนื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "A156",
    "name_english": "Tuberculous pleurisy, confirmed bacteriologically and histologically",
    "name_thai": "เยื่อหุ้มปอดอักเสบจากเชื้อวัณโรค ยืนยันด้วยผลการตรวจหาเชื้อและการตรวจชิ้นเนื้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
