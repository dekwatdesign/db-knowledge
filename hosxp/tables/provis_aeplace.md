# `provis_aeplace`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "ที่บ้าน หรืออาคารที่พัก"
  },
  {
    "code": "02",
    "name": "ในสถานที่ทำงาน ยกเว้นโรงงานหรือก่อสร้าง"
  },
  {
    "code": "03",
    "name": "ในโรงงานอุตสาหกรรม หรือบริเวณก่อสร้าง"
  },
  {
    "code": "04",
    "name": "ภายในอาคารอื่นๆ"
  },
  {
    "code": "05",
    "name": "ในสถานที่สาธารณะ"
  },
  {
    "code": "06",
    "name": "ในชุมชน และไร่นา"
  },
  {
    "code": "07",
    "name": "บนถนนสายหลัก"
  },
  {
    "code": "08",
    "name": "บนถนนสายรอง"
  }
]
```
