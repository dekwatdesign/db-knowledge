# `house_owner_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_owner_survey_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| hous_owner_id | int(11) | YES |  | NULL |  |  |
| house_lease_price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | house_owner_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
