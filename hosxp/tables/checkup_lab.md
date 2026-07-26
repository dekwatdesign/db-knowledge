# `checkup_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| group_id | varchar(255) | NO | PRI |  |  |  |
| sub_group | varchar(255) | NO | PRI |  |  |  |
| seq_no | varchar(255) | NO | PRI |  |  |  |
| lab_items_code | varchar(255) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lab_items_code | lab_items_code | no | 1 |
| PRIMARY | group_id | yes | 1 |
| PRIMARY | sub_group | yes | 2 |
| PRIMARY | seq_no | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
