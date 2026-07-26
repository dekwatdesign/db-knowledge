# `psych_smi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_smi_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psych_smi_active | char(1) | YES |  | NULL |  |  |
| psych_smi_date | date | YES |  | NULL |  |  |
| psych_smi_time | time | YES |  | NULL |  |  |
| psych_smi_status_id | int(11) | YES | MUL | NULL |  |  |
| psych_smi_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_smi_refer_hospcode | varchar(9) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_smi_status_id | psych_smi_status_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_smi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
