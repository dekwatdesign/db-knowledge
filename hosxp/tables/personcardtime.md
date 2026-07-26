# `personcardtime`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cardid | varchar(250) | YES | MUL | NULL |  |  |
| personid | varchar(13) | YES |  | NULL |  |  |
| readtime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cardid_readtime_unique | cardid | yes | 1 |
| cardid_readtime_unique | readtime | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
