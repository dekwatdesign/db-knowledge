# `hrd_province`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | 0 |  |  |
| PROVINCE_NAME | varchar(60) | YES |  |  |  | ชื่อจังหวัด |
| PROVINCE_NAME_EN | varchar(60) | YES |  |  |  | ชื่อจังหวัดอังกฤษ |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 10,
    "PROVINCE_NAME": "กรุงเทพมหานคร",
    "PROVINCE_NAME_EN": "BANGKOK"
  },
  {
    "ID": 11,
    "PROVINCE_NAME": "สมุทรปราการ",
    "PROVINCE_NAME_EN": "SAMUT  PRAKAN"
  },
  {
    "ID": 12,
    "PROVINCE_NAME": "นนทบุรี",
    "PROVINCE_NAME_EN": "NONTHABURI"
  },
  {
    "ID": 13,
    "PROVINCE_NAME": "ปทุมธานี",
    "PROVINCE_NAME_EN": "PATHUM  THANI"
  },
  {
    "ID": 14,
    "PROVINCE_NAME": "พระนครศรีอยุธยา",
    "PROVINCE_NAME_EN": "PHRA  NAKHON  SIAYUTTHAYA"
  },
  {
    "ID": 15,
    "PROVINCE_NAME": "อ่างทอง",
    "PROVINCE_NAME_EN": "ANG THONG"
  },
  {
    "ID": 16,
    "PROVINCE_NAME": "ลพบุรี",
    "PROVINCE_NAME_EN": "LOP BURI"
  },
  {
    "ID": 17,
    "PROVINCE_NAME": "สิงห์บุรี",
    "PROVINCE_NAME_EN": "SING  BURI"
  }
]
```
