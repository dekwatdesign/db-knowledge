# `patient_pre_ipt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_pre_ipt_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| p_an | varchar(9) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_p_an | p_an | yes | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_pre_ipt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "patient_pre_ipt_id": 1,
    "hn": "680001382",
    "vn": "681223075605",
    "p_an": "P00000001"
  }
]
```
