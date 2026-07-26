# `f53_school_owner`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| f53_school_owner_code | varchar(2) | NO | PRI |  |  |  |
| f53_school_owner_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_f53_school_owner_name | f53_school_owner_name | yes | 1 |
| PRIMARY | f53_school_owner_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "f53_school_owner_code": "01",
    "f53_school_owner_name": "อบต."
  },
  {
    "f53_school_owner_code": "02",
    "f53_school_owner_name": "เทศบาล"
  },
  {
    "f53_school_owner_code": "03",
    "f53_school_owner_name": "ผู้ใหญ่บ้าน/กำนัน"
  },
  {
    "f53_school_owner_code": "04",
    "f53_school_owner_name": "โรงเรียน"
  },
  {
    "f53_school_owner_code": "05",
    "f53_school_owner_name": "วัด,มัสยิส/โบสถ์"
  },
  {
    "f53_school_owner_code": "06",
    "f53_school_owner_name": "เอกชน/ชุมชน"
  },
  {
    "f53_school_owner_code": "11",
    "f53_school_owner_name": "กระทรวงมหาดไทย"
  },
  {
    "f53_school_owner_code": "12",
    "f53_school_owner_name": "กระทรวงศึกษาธิการ"
  }
]
```
