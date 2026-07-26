# `doctorptotlist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor | varchar(6) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| otdate | date | YES | MUL | NULL |  |  |
| tsp | time | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| otdate | otdate | no | 1 |
| vn | vn | no | 1 |
| vstdate | vstdate | no | 1 |
| vsttime | vsttime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
