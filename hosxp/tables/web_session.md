# `web_session`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sbrand | varchar(50) | YES | UNI | NULL |  |  |
| ipaddr | varchar(20) | YES |  | NULL |  |  |
| tlogin | datetime | YES |  | NULL |  |  |
| lastaction | datetime | YES |  | NULL |  |  |
| username | varchar(150) | YES |  | NULL |  |  |
| state | varchar(50) | YES |  | NULL |  |  |
| data | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| sbrand_unique | sbrand | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
