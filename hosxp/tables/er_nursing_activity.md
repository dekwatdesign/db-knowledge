# `er_nursing_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_nursing_activity_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| er_activity_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| begin_time | datetime | YES |  | NULL |  |  |
| activity_detail | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| er_activity_id | er_activity_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_nursing_activity_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
