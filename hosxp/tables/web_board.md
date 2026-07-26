# `web_board`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pn | varchar(12) | YES | UNI | NULL |  |  |
| subject | varchar(250) | YES | MUL | NULL |  |  |
| user | varchar(50) | YES | MUL | NULL |  |  |
| category | varchar(150) | YES |  | NULL |  |  |
| detail | blob | YES |  | NULL |  |  |
| master_pn | varchar(12) | YES | MUL | NULL |  |  |
| post_date | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| master_pn | master_pn | no | 1 |
| pn_unique | pn | yes | 1 |
| subject | subject | no | 1 |
| user | user | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
