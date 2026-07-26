# `ipd_nurse_ass_adls_scale`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_ass_adls_scale_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_ass_adls_scale_date | date | YES |  | NULL |  |  |
| ipd_nurse_ass_adls_scale_day | date | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| ipd_nurse_ass_adls_result_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxipd_nurse_ass_adls_scale_an | an | no | 1 |
| ix_idxipd_nurse_ass_adls_scale_hn | hn | no | 1 |
| ix_idxipd_nurse_ass_adls_scale_result | ipd_nurse_ass_adls_result_id | no | 1 |
| PRIMARY | ipd_nurse_ass_adls_scale_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
