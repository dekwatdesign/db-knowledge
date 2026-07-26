# `ipt_labour_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| wbc_vaccine_id | int(11) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
