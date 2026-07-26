# `drug_counseling_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_counseling_group_id | int(11) | NO | PRI | 0 |  |  |
| drug_counseling_group_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_counseling_group_name | drug_counseling_group_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drug_counseling_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
