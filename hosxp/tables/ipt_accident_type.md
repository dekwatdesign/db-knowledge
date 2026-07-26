# `ipt_accident_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_accident_type_code | char(1) | NO | PRI |  |  |  |
| ipt_accident_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_accident_type_name | ipt_accident_type_name | yes | 1 |
| PRIMARY | ipt_accident_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipt_accident_type_code": "O",
    "ipt_accident_type_name": "กองทุนเงินทดแทน"
  },
  {
    "ipt_accident_type_code": "B",
    "ipt_accident_type_name": "พรบ. & กองทุนเงินทดแทน"
  },
  {
    "ipt_accident_type_code": "V",
    "ipt_accident_type_name": "พรบ. ผู้ประสบภัยจากรถ"
  },
  {
    "ipt_accident_type_code": "C",
    "ipt_accident_type_name": "อุบัติเหตุทั่วไป"
  }
]
```
