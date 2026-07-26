# `prscrpt_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_reg_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| prscrpt_reg_date | date | YES |  | NULL |  |  |
| clinic | varchar(5) | YES |  | NULL |  |  |
| prscrpt_reg_status_id | int(11) | YES |  | NULL |  |  |
| prscrpt_reg_refill_doctor | varchar(7) | YES |  | NULL |  |  |
| prscrpt_reg_pack_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_prscrpt_reg_hn_clinic_idx | hn | yes | 1 |
| ix_prscrpt_reg_hn_clinic_idx | clinic | yes | 2 |
| PRIMARY | prscrpt_reg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
