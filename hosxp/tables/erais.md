# `erais`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ais | int(11) | YES | MUL | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| br | int(11) | YES |  | NULL |  |  |
| icdcode | varchar(5) | YES | MUL | NULL |  |  |
| iss | double(22,3) | YES |  | NULL |  |  |
| ps | double(22,3) | YES |  | NULL |  |  |
| rts | double(22,3) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icdcode_br_vn_ais_unique | icdcode | yes | 1 |
| icdcode_br_vn_ais_unique | br | yes | 2 |
| icdcode_br_vn_ais_unique | vn | yes | 3 |
| icdcode_br_vn_ais_unique | ais | yes | 4 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icdcode_br_vn_ais_unique | ais | yes | 1 |
| ix_icdcode_br_vn_ais_unique | br | yes | 2 |
| ix_icdcode_br_vn_ais_unique | icdcode | yes | 3 |
| ix_icdcode_br_vn_ais_unique | vn | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
