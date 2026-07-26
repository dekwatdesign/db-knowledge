# `f53_cm_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| f53_cm_diag_code | varchar(2) | NO | PRI |  |  |  |
| f53_cm_diag_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_f53_cm_diag_name | f53_cm_diag_name | yes | 1 |
| PRIMARY | f53_cm_diag_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "f53_cm_diag_code": "0",
    "f53_cm_diag_name": "ข้อมูลจากใบมรณบัตร"
  },
  {
    "f53_cm_diag_code": "1",
    "f53_cm_diag_name": "ซักประวัติและตรวจร่างกาย"
  }
]
```
