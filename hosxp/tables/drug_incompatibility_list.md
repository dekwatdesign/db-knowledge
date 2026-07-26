# `drug_incompatibility_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_incompatibility_list_id | int(11) | NO | PRI | 0 |  |  |
| drug_incompatibility_id | int(11) | YES |  | NULL |  |  |
| generic_name | varchar(200) | YES |  | NULL |  |  |
| drug_incompatibility_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drug_incompatibility_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
