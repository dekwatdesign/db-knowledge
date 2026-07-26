# `ovstdiag_text`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovstdiag_text_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| provisional_dx_text | text | YES |  | NULL |  |  |
| dx_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_dc | vn | yes | 1 |
| ix_vn_dc | doctor_code | yes | 2 |
| ix_vn_dc_index | doctor_code | yes | 1 |
| ix_vn_dc_index | vn | yes | 2 |
| PRIMARY | ovstdiag_text_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ovstdiag_text_id": 1,
    "vn": "591005094242",
    "doctor_code": "065",
    "provisional_dx_text": "Down syndrome",
    "dx_note": null
  },
  {
    "ovstdiag_text_id": 2,
    "vn": "600215091027",
    "doctor_code": "065",
    "provisional_dx_text": "separation anxiety disorder",
    "dx_note": null
  }
]
```
