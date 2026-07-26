# `anc_ill_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| disease_id | int(11) | NO | PRI | 0 |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| disease_id | disease_id | no | 1 |
| hn | hn | no | 1 |
| hn_disease_id_unique | hn | yes | 1 |
| hn_disease_id_unique | disease_id | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | disease_id | yes | 1 |
| PRIMARY | hn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
