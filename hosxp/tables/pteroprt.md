# `pteroprt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | YES | MUL | NULL |  |  |
| ercode | varchar(4) | NO | PRI |  |  |  |
| eroprtime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| ertimetype | char(1) | YES |  | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| vstdate | date | NO | PRI | 0000-00-00 |  |  |
| vsttime | time | NO | PRI | 00:00:00 |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn_vsttime_ercode_unique | hn | yes | 1 |
| hn_vsttime_ercode_unique | vsttime | yes | 2 |
| hn_vsttime_ercode_unique | ercode | yes | 3 |
| hn_vsttime_ercode_unique | vstdate | yes | 4 |
| hn_vsttime_ercode_unique | eroprtime | yes | 5 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | ercode | yes | 1 |
| PRIMARY | eroprtime | yes | 2 |
| PRIMARY | hn | yes | 3 |
| PRIMARY | vstdate | yes | 4 |
| PRIMARY | vsttime | yes | 5 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
