# `psy_register_drug_use_other`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_drug_use_other_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_id | int(11) | YES |  | NULL |  |  |
| psy_register_drug_use_other_name | varchar(100) | YES |  | NULL |  |  |
| psy_register_drug_use_other_staff | varchar(10) | YES |  | NULL |  |  |
| psy_register_drug_use_other_begindate | date | YES |  | NULL |  |  |
| psy_register_drug_use_other_enddate | date | YES |  | NULL |  |  |
| psy_register_drug_use_other_receive | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_drug_use_other_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
