# `mosquitoes_advice_officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mosquitoes_advice_officer_id | int(11) | NO | PRI | 0 |  |  |
| mosquitoes_advice_officer_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_mosquitoes_advice_officer_name | mosquitoes_advice_officer_name | yes | 1 |
| PRIMARY | mosquitoes_advice_officer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
