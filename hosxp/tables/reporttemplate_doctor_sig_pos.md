# `reporttemplate_doctor_sig_pos`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| ratio_left | double(22,3) | YES |  | NULL |  |  |
| ratio_bottom | double(22,3) | YES |  | NULL |  |  |
| ratio_width | double(22,3) | YES |  | NULL |  |  |
| ratio_height | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "name": "DOCTOR-CERT-1",
    "ratio_left": 0.644,
    "ratio_bottom": 0.125,
    "ratio_width": 0.127,
    "ratio_height": 0.033
  }
]
```
