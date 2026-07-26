# `dis_satisfied_topic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_satisfied_topic_id | int(11) | NO | PRI | 0 |  |  |
| dis_satisfied_topic_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_satisfied_topic_name | dis_satisfied_topic_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_satisfied_topic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
