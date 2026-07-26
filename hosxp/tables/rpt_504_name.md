# `rpt_504_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name1 | varchar(250) | YES |  | NULL |  |  |
| name2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name1": "โรคติดเชื้อและปรสิต",
    "name2": "Certain infectious and parasitic diseases",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 2,
    "name1": "เนื้องอก (รวมมะเร็ง)",
    "name2": "Neoplasms",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 3,
    "name1": "โรคเลือดและอวัยวะสร้างเลือด",
    "name2": "Diseases of the blood and blood forming organs and certain disorders involving the immune mechanism",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 4,
    "name1": "โรคเกี่ยวกับต่อมไร้ท่อ โภชนาการ และเมตะบอลิสัม",
    "name2": "Endocrine, nutritional and metabolic diseases",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 5,
    "name1": "ภาวะแปรปรวนทางจิตและพฤติกรรม",
    "name2": "Mental and behavioural disorders",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 6,
    "name1": "โรคระบบประสาท",
    "name2": "Diseases of the nervous system",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 7,
    "name1": "โรคตารวมส่วนประกอบของตา",
    "name2": "Diseases of the eye and adnexa",
    "hos_guid": null,
    "icd10": null
  },
  {
    "id": 8,
    "name1": "โรคหูและปุ่มกกหู",
    "name2": "Diseases of the ear and mastoid process",
    "hos_guid": null,
    "icd10": null
  }
]
```
