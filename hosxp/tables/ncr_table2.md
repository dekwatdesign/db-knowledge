# `ncr_table2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| key1 | varchar(100) | YES | MUL | NULL |  |  |
| key2 | varchar(100) | YES | MUL | NULL |  |  |
| des1 | varchar(250) | YES | MUL | NULL |  |  |
| mapcode | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| des1 | des1 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| key1 | key1 | no | 1 |
| key2 | key2 | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
