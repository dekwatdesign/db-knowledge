# `district`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| district_code | char(4) | NO | PRI |  |  |  |
| district_name | varchar(150) | YES |  | NULL |  |  |
| province_code | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_district_name_uni | province_code | yes | 1 |
| ix_district_name_uni | district_name | yes | 2 |
| ix_province_code | province_code | no | 1 |
| PRIMARY | district_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "district_code": "0000",
    "district_name": "----",
    "province_code": "00"
  },
  {
    "district_code": "6404",
    "district_name": "กงไกรลาศ",
    "province_code": "64"
  },
  {
    "district_code": "9302",
    "district_name": "กงหรา",
    "province_code": "93"
  },
  {
    "district_code": "2502",
    "district_name": "กบินทร์บุรี",
    "province_code": "25"
  },
  {
    "district_code": "4603",
    "district_name": "กมลาไสย",
    "province_code": "46"
  },
  {
    "district_code": "9508",
    "district_name": "กรงปินัง",
    "province_code": "95"
  },
  {
    "district_code": "7402",
    "district_name": "กระทุ่มแบน",
    "province_code": "74"
  },
  {
    "district_code": "4009",
    "district_name": "กระนวน",
    "province_code": "40"
  }
]
```
