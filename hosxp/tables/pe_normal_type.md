# `pe_normal_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_normal_type_code | char(1) | NO | PRI |  |  |  |
| pe_normal_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pe_normal_type_name | pe_normal_type_name | yes | 1 |
| PRIMARY | pe_normal_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "pe_normal_type_code": "N",
    "pe_normal_type_name": "Abnormal"
  },
  {
    "pe_normal_type_code": "Y",
    "pe_normal_type_name": "Normal"
  },
  {
    "pe_normal_type_code": "-",
    "pe_normal_type_name": "ไม่ได้ตรวจ"
  }
]
```
