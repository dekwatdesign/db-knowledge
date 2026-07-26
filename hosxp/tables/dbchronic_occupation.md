# `dbchronic_occupation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | YES | UNI | NULL |  |  |
| occupation | char(3) | NO | PRI |  |  |  |
| nhso_code | char(3) | YES |  | NULL |  |  |
| code506 | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| Chronic_Code | varchar(2) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | occupation | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "ไม่มีอาชีพ",
    "occupation": "000",
    "nhso_code": "000",
    "code506": "10",
    "hos_guid": null,
    "Chronic_Code": "11",
    "hos_guid_ext": null
  },
  {
    "name": "รับราชการ",
    "occupation": "004",
    "nhso_code": "004",
    "code506": "02",
    "hos_guid": null,
    "Chronic_Code": "2",
    "hos_guid_ext": null
  },
  {
    "name": "รัฐวิสาหกิจ",
    "occupation": "005",
    "nhso_code": "005",
    "code506": "10",
    "hos_guid": null,
    "Chronic_Code": "2",
    "hos_guid_ext": null
  },
  {
    "name": "นักการเมือง",
    "occupation": "006",
    "nhso_code": "006",
    "code506": "10",
    "hos_guid": null,
    "Chronic_Code": "2",
    "hos_guid_ext": null
  },
  {
    "name": "ทหาร,ตำรวจ",
    "occupation": "007",
    "nhso_code": "007",
    "code506": "07",
    "hos_guid": null,
    "Chronic_Code": "7",
    "hos_guid_ext": null
  },
  {
    "name": "ครู",
    "occupation": "009",
    "nhso_code": "009",
    "code506": "09",
    "hos_guid": null,
    "Chronic_Code": "9",
    "hos_guid_ext": null
  },
  {
    "name": "อื่นๆ",
    "occupation": "010",
    "nhso_code": "010",
    "code506": "10",
    "hos_guid": null,
    "Chronic_Code": "10",
    "hos_guid_ext": null
  },
  {
    "name": "เลี้ยงสัตว์",
    "occupation": "012",
    "nhso_code": "012",
    "code506": "12",
    "hos_guid": null,
    "Chronic_Code": "12",
    "hos_guid_ext": null
  }
]
```
