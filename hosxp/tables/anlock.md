# `anlock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| optype | varchar(50) | YES |  | NULL |  |  |
| onlineid | varchar(50) | YES | UNI | NULL |  |  |
| lock_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| onlineid_unique | onlineid | yes | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
