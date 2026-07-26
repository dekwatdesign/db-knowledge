# `house_mosquitoes_prevent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_mosquitoes_prevent_id | int(11) | NO | PRI | 0 |  |  |
| house_mosquitoes_survey_id | int(11) | YES |  | NULL |  |  |
| mosquitoes_prevent_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_mosquitoes_prevent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
