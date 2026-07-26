# `ipt_trx_track`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| last_track_datetime | datetime | YES |  | NULL |  |  |
| last_track_active_form | varchar(100) | YES |  | NULL |  |  |
| last_track_user | varchar(100) | YES |  | NULL |  |  |
| last_track_computer | varchar(100) | YES |  | NULL |  |  |
| track_lost | char(1) | YES | MUL | NULL |  |  |
| last_item_count | int(11) | YES |  | NULL |  |  |
| last_sql_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_track_lost | track_lost | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
