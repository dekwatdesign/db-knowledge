# `clinic_hd_asm_va_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_asm_va_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_asm_va_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | clinic_hd_asm_va_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "clinic_hd_asm_va_type_id": 1,
    "clinic_hd_asm_va_type_name": "AVG"
  },
  {
    "clinic_hd_asm_va_type_id": 2,
    "clinic_hd_asm_va_type_name": "AVF"
  }
]
```
