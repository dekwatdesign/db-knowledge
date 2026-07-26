# `psychiatric_clinic_psychia_test_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_psychia_test_item_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_psychia_test_item_name | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_test_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_psychia_test_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
