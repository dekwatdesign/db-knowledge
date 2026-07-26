# `dis_satisfied`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_satisfied_id | int(11) | NO | PRI | 0 |  |  |
| drug_information_service_id | int(11) | YES |  | NULL |  |  |
| dis_satisfied_topic_id | int(11) | YES |  | NULL |  |  |
| dis_satisfied_result_id | int(11) | YES |  | NULL |  |  |
| note | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_satisfied_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
