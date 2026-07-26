# `nhso_govcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_govcode | varchar(6) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | nhso_govcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_govcode": "08004",
    "name": "กรมการขนส่งทางบก"
  },
  {
    "nhso_govcode": "07018",
    "name": "กรมการข้าว"
  },
  {
    "nhso_govcode": "13003",
    "name": "กรมการค้าต่างประเทศ"
  },
  {
    "nhso_govcode": "13004",
    "name": "กรมการค้าภายใน"
  },
  {
    "nhso_govcode": "17003",
    "name": "กรมการจัดหางาน"
  },
  {
    "nhso_govcode": "05004",
    "name": "กรมการท่องเที่ยว"
  },
  {
    "nhso_govcode": "08005",
    "name": "กรมการบินพลเรือน"
  },
  {
    "nhso_govcode": "15003",
    "name": "กรมการปกครอง"
  }
]
```
