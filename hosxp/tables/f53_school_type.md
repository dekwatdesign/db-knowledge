# `f53_school_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| f53_school_type_code | varchar(2) | NO | PRI |  |  |  |
| f53_school_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_f53_school_type_name | f53_school_type_name | yes | 1 |
| PRIMARY | f53_school_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "f53_school_type_code": "00",
    "f53_school_type_name": "ไม่ได้เรียนหรือศึกษามากกว่ามัธยมศึกษา"
  },
  {
    "f53_school_type_code": "01",
    "f53_school_type_name": "ศูนย์พัฒนาเด็กเล็ก"
  },
  {
    "f53_school_type_code": "02",
    "f53_school_type_name": "ประถมศึกษารัฐบาล"
  },
  {
    "f53_school_type_code": "03",
    "f53_school_type_name": "ประถมศึกษาเทศบาล"
  },
  {
    "f53_school_type_code": "04",
    "f53_school_type_name": "ประถมศึกษาท้องถิ่น"
  },
  {
    "f53_school_type_code": "05",
    "f53_school_type_name": "ประถมศึกษาเอกชน"
  },
  {
    "f53_school_type_code": "06",
    "f53_school_type_name": "มัธยมศึกษารัฐบาล"
  },
  {
    "f53_school_type_code": "07",
    "f53_school_type_name": "มัธยมศึกษาเทศบาล"
  }
]
```
