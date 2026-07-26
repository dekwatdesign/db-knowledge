# `baby_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| baby_code | int(11) | NO | PRI | 0 |  |  |
| baby_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_baby_code | baby_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_baby_code | baby_code | no | 1 |
| ix_vn_baby_code | vn | no | 2 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | baby_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
