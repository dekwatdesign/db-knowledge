# `fpmain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| a | int(11) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| fp | varchar(6) | YES | MUL | NULL |  |  |
| fpspclty | char(2) | YES | MUL | NULL |  |  |
| g | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| p | int(11) | YES |  | NULL |  |  |
| vstdate | datetime | YES | MUL | NULL |  |  |
| vsttime | datetime | YES | MUL | NULL |  |  |
| icount | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| fp | fp | no | 1 |
| fpspclty | fpspclty | no | 1 |
| hn | hn | no | 1 |
| hn_vstdate_fp | hn | no | 1 |
| hn_vstdate_fp | vstdate | no | 2 |
| hn_vstdate_fp | fp | no | 3 |
| ix_hn_vstdate_fp | fp | no | 1 |
| ix_hn_vstdate_fp | hn | no | 2 |
| ix_hn_vstdate_fp | vstdate | no | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| vstdate | vstdate | no | 1 |
| vsttime | vsttime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
