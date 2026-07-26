# `drugstore_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pn | int(11) | YES | UNI | NULL |  |  |
| pt_name | varchar(250) | YES |  | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| pt_subtype | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| pn_unique | pn | yes | 1 |
| pttype | pttype | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
