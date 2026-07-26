# `passport_nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| passport_nationality_nhso_code | char(3) | NO | PRI |  |  |  |
| passport_nationality_code | char(3) | YES | MUL | NULL |  |  |
| passport_nationality_eng_name | varchar(255) | YES |  | NULL |  |  |
| passport_nationality_thai_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_passport_nationality_code | passport_nationality_code | no | 1 |
| PRIMARY | passport_nationality_nhso_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "passport_nationality_nhso_code": "999",
    "passport_nationality_code": "000",
    "passport_nationality_eng_name": "Unkown",
    "passport_nationality_thai_name": "ไม่ระบุ"
  },
  {
    "passport_nationality_nhso_code": "002",
    "passport_nationality_code": "PRT",
    "passport_nationality_eng_name": "Portugal",
    "passport_nationality_thai_name": "โปรตุเกส"
  },
  {
    "passport_nationality_nhso_code": "003",
    "passport_nationality_code": "NLD",
    "passport_nationality_eng_name": "Netherlands",
    "passport_nationality_thai_name": "เนเธอแลนด์/ดัตช์"
  },
  {
    "passport_nationality_nhso_code": "004",
    "passport_nationality_code": "DEU",
    "passport_nationality_eng_name": "Germany",
    "passport_nationality_thai_name": "เยอรมัน/เยอรมนี"
  },
  {
    "passport_nationality_nhso_code": "005",
    "passport_nationality_code": "FRA",
    "passport_nationality_eng_name": "France",
    "passport_nationality_thai_name": "ฝรั่งเศส"
  },
  {
    "passport_nationality_nhso_code": "006",
    "passport_nationality_code": "DNK",
    "passport_nationality_eng_name": "Danmark",
    "passport_nationality_thai_name": "เดนมาร์ก"
  },
  {
    "passport_nationality_nhso_code": "007",
    "passport_nationality_code": "SWE",
    "passport_nationality_eng_name": "Sweden",
    "passport_nationality_thai_name": "สวีเดน"
  },
  {
    "passport_nationality_nhso_code": "008",
    "passport_nationality_code": "CHE",
    "passport_nationality_eng_name": "Switzerland",
    "passport_nationality_thai_name": "สวิตเซอร์แลนด์"
  }
]
```
