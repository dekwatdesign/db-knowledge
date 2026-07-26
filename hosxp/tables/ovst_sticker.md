# `ovst_sticker`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| printed | char(1) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| send_time | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
