# `province`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| province_code | char(2) | NO | PRI |  |  |  |
| province_name | varchar(150) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_province_name | province_name | yes | 1 |
| PRIMARY | province_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "province_code": "81",
    "province_name": "กระบี่"
  },
  {
    "province_code": "10",
    "province_name": "กรุงเทพมหานคร"
  },
  {
    "province_code": "71",
    "province_name": "กาญจนบุรี"
  },
  {
    "province_code": "46",
    "province_name": "กาฬสินธุ์"
  },
  {
    "province_code": "62",
    "province_name": "กำแพงเพชร"
  },
  {
    "province_code": "40",
    "province_name": "ขอนแก่น"
  },
  {
    "province_code": "22",
    "province_name": "จันทบุรี"
  },
  {
    "province_code": "24",
    "province_name": "ฉะเชิงเทรา"
  }
]
```
