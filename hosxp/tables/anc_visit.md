# `anc_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| anc_code | int(11) | NO | PRI | 0 |  |  |
| anc_note | text | YES |  | NULL |  |  |
| anc_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_code | anc_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | anc_code | yes | 2 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
